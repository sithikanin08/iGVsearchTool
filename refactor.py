import re
import json

filepath = 'c:/Users/Trident_Corporation/Documents/GitHub/iGVsearchTool/app/data/projectsData.ts'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace DeliveryDetails with OpportunityDetail
content = content.replace(
'''export interface DeliveryDetails {
  applyLink?: string;
  jdBooklet?: string;
}''', 
'''export interface OpportunityDetail {
  duration: "4 Weeks" | "6 Weeks" | "4 weeks" | "6 weeks";
  applyLink?: string;
  jdBooklet?: string;
}'''
)

content = content.replace(
'''export interface ProjectOPMapping {
  opName: string;
  logistics: string;
  fourWeeks?: DeliveryDetails;
  sixWeeks?: DeliveryDetails;
}''',
'''export interface ProjectOPMapping {
  opName: string;
  logistics?: string;
  opportunities: OpportunityDetail[];
}'''
)

# Replace the objects mapping fourWeeks and sixWeeks to array
def replacer(match):
    block = match.group(0)
    
    # We will safely evaluate it by converting the JS object string to a dummy parseable dict in python?
    # No, it's safer to use regex since it's just raw strings.
    
    # Find opName
    op_m = re.search(r'opName:\s*"([^"]+)"', block)
    if not op_m: return block
    opName = op_m.group(1)
    
    # Find logistics
    log_m = re.search(r'logistics:\s*"([^"]+)"', block)
    logistics = log_m.group(1) if log_m else ""
    
    # find fourWeeks
    four_m = re.search(r'fourWeeks:\s*\{([^}]+)\}', block)
    # find sixWeeks
    six_m = re.search(r'sixWeeks:\s*\{([^}]+)\}', block)
    
    opportunities = []
    if four_m:
        inner = four_m.group(1).strip()
        opportunities.append(f'{{ duration: "4 Weeks", {inner} }}')
    if six_m:
        inner = six_m.group(1).strip()
        opportunities.append(f'{{ duration: "6 Weeks", {inner} }}')
        
    opp_str = ', '.join(opportunities)
    
    if logistics:
        return f'{{ opName: "{opName}", logistics: "{logistics}", opportunities: [{opp_str}] }}'
    else:
        return f'{{ opName: "{opName}", opportunities: [{opp_str}] }}'


# The objects in opsMapping look like: { opName: "...", logistics: "...", fourWeeks: {...}, sixWeeks: {...} }
# Let's match from { opName: to the closing } of that object.
# Since the objects can have nested braces (for fourWeeks, sixWeeks), we can use a simpler approach.
# We will split the file by opsMapping: [\n and ]
new_content = ""
idx = 0
while True:
    start = content.find('opsMapping: [', idx)
    if start == -1:
        new_content += content[idx:]
        break
    
    new_content += content[idx:start + len('opsMapping: [\n')]
    end = content.find('    ]', start)
    
    ops_block = content[start + len('opsMapping: [\n'):end]
    
    # Split ops_block into individual OP blocks.
    # They are separated by "},\n      {" or similar. 
    # Let's just use regex to find { ... } considering 1 level of nesting
    # Regex for { ... } where ... can contain nested {}
    op_blocks = re.findall(r'\{\s*opName:.*?(?:\{.*?\}.*?)*\}', ops_block, re.DOTALL)
    
    new_ops_block = []
    for b in op_blocks:
        new_ops_block.append("      " + replacer(b))
    
    new_content += ",\n".join(new_ops_block) + "\n"
    
    idx = end
    
with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Done")
