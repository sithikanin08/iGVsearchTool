export interface OpportunityDetail {
  duration?: "4 Weeks" | "6 Weeks" | string;
  applyLink?: string;
  jdBooklet?: string;
}

export interface ProjectOPMapping {
  opName: string;
  logistics: string;
  opportunities: OpportunityDetail[];
}

export interface Project {
  id: number;
  name: string;
  image: string;
  brief: string;
  fullDescription: string;
  sdg: string[];
  duration: string;
  location: string;
  status: "active" | "inactive";
  fee: string;
  amenities: string[];
  expaLink: string;
  opsMapping: ProjectOPMapping[];
}

export interface OP {
  id: number;
  name: string;
  photo: string;
  organization: string;
  location: string;
  description: string;
  website: string;
}

export const opportunityProviders: OP[] = [
  { id: 1, name: "Senior Citizens' Elders Home", photo: "/Logo-  enior citizens elder care.jpeg", organization: "Elders Home", location: "Sri Lanka", description: "Providing care and companionship for senior citizens.", website: "#" },
  { id: 2, name: "All Ceylon YMMA Conference – Elders' Home", photo: "/Logo - Ymma.png", organization: "Elders Home", location: "Sri Lanka", description: "Providing care and companionship for senior citizens.", website: "#" },
  { id: 3, name: "All Ceylon YMMA Conference – Children's Home", photo: "/Logo - Ymma.png", organization: "Children's Home", location: "Sri Lanka", description: "Providing care and companionship for children.", website: "#" },
  { id: 4, name: "Climb Lanka", photo: "/Logo-climblanka.jpeg", organization: "Sports Center", location: "Sri Lanka", description: "Promoting physical activity and outdoor sports.", website: "#" },
  { id: 5, name: "Zri Adventures (Pvt) Ltd", photo: "/Logo-ZriAd.jpeg", organization: "Adventure Sports", location: "Sri Lanka", description: "Promoting physical activity and outdoor adventure sports.", website: "#" },
  { id: 6, name: "All Ceylon YMMA Conference", photo: "/Logo - Ymma.png", organization: "Skills Development", location: "Sri Lanka", description: "Providing skills training and development.", website: "#" },
  { id: 7, name: "Diyakawa Water Sports Centre", photo: "/Logo - Diyakawawatesport.jpeg", organization: "Water Sports", location: "Sri Lanka", description: "Promoting physical activity and outdoor water sports.", website: "#" },
  { id: 8, name: "Sunrise Surf School", photo: "/Logo- Sunrise.jpeg", organization: "Surf School", location: "Sri Lanka", description: "Promoting physical activity and surfing skills.", website: "#" },
  { id: 9, name: "Finnish Pre School", photo: "/Logo - Finnish.jpeg", organization: "Education Center", location: "Sri Lanka", description: "Providing quality education for young children.", website: "#" },
  { id: 10, name: "Rathmulukanka Nenansala Education Center", photo: "/Logo - Rathmulukanda.jpg", organization: "Education Center", location: "Sri Lanka", description: "Providing quality education and digital access.", website: "#" },
  { id: 11, name: "Family Wellbeing Centre", photo: "/Logo - familywell.jpeg", organization: "Wellbeing Center", location: "Sri Lanka", description: "Promoting psychological and physical wellbeing for families.", website: "#" },
  { id: 12, name: "Ashla Nursery School", photo: "/Logo - Ashla.jpeg", organization: "Nursery School", location: "Sri Lanka", description: "Providing quality early education for children.", website: "#" },
  { id: 13, name: "Induruwa Sea Turtle Conservation Project", photo: "/Logo - Induruwa.jpeg", organization: "Marine Conservation", location: "Sri Lanka", description: "Protecting endangered sea turtles and their habitats.", website: "#" },
  { id: 14, name: "Lanka Mangrove Museum and Learning Center", photo: "/Logo - Lankamangrove.png", organization: "Environmental Conservation", location: "Sri Lanka", description: "Preserving and educating about Sri Lanka's vital mangrove ecosystems.", website: "#" },
  { id: 15, name: "Forest School Colombo", photo: "/Logo -ForestScl.jpg", organization: "Environmental Education", location: "Colombo, Sri Lanka", description: "Teaching children and youth about nature and environmental conservation.", website: "#" },
  { id: 16, name: "Diyakawa Water Sports Centre – Hospitality", photo: "/Logo - DiyakawaBen.jpeg", organization: "Water Sports & Hospitality", location: "Sri Lanka", description: "Hospitality training at a water sports and recreation centre.", website: "#" },
  { id: 17, name: "Diyakawa Water Sports Centre – Events & Marketing", photo: "/Logo - DiyakawaAru.jpeg", organization: "Water Sports & Events", location: "Sri Lanka", description: "Events management and marketing at a water sports centre.", website: "#" },
  { id: 18, name: "Diyakawa Hotel & Restaurant", photo: "/Logo - DiyakawaHotel&Res.jpeg", organization: "Hotel & Restaurant", location: "Sri Lanka", description: "Hospitality and restaurant management experience.", website: "#" }
];

export const allProjects: Project[] = [
  /* ── ACTIVE PROJECTS ────────────────────────────── */
  {
    id: 1,
    name: "Heartbeat",
    image: "/heartbeat.jpeg",
    brief: "Healthcare awareness and community wellbeing project based on SDG #3, Good Health and Well-being.",
    fullDescription: "Project Heartbeat is a project based on Sustainable Development Goal #03 \"Good Health and Well-being\". Volunteers work alongside local healthcare providers to conduct health camps, promote hygiene practices, and provide basic health screenings in underserved Sri Lankan communities. The project addresses preventive healthcare and promotes healthy lifestyle choices to create lasting impact.",
    sdg: ["3 - Good Health and Well-being"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Three Meals"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316713",
    opsMapping: [
      {
        opName: "Senior Citizens' Elders Home",
        logistics: "Transportation + Accommodation + 3 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329901", jdBooklet: "https://drive.google.com/file/d/10ZXfL09oz1ZjyaouLWR9ponyDy-A-GFF/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329357", jdBooklet: "https://drive.google.com/file/d/1Wh4DvYfbeEnUyfLyT4Jj-nDPBttvXUYQ/view?usp=drive_link" }
        ]
      },
      {
        opName: "All Ceylon YMMA Conference – Elders' Home",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331983", jdBooklet: "https://drive.google.com/file/d/1-XQer8Wcnqnjb9LuGlBwvVgq_IdfPtgq/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331302", jdBooklet: "https://drive.google.com/file/d/1HXZa7YDTant7Pgn_C-9PnlGzh-_WO8_6/view?usp=drive_link" }
        ]
      },
      {
        opName: "All Ceylon YMMA Conference – Children's Home",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331982", jdBooklet: "https://drive.google.com/file/d/1x6Z5FtTH5k_Ly5PNBYakBAqmaiBD6VSW/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331833", jdBooklet: "https://drive.google.com/file/d/12w8Bfh9hpA2B-km_guD1kfJMoniOrytf/view?usp=drive_link" }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Skill-up!",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    brief: "Skills training project impacting SDG #8 by providing young people with soft and hard skills for career growth.",
    fullDescription: "The project aims to impact SDG #8 by providing young people with soft and hard skills training, needed to qualify for a decent job, and career guidance. Volunteers lead workshops on communication, digital literacy, entrepreneurship, and professional development to help Sri Lankan youth build competitive skill sets.",
    sdg: ["8 - Decent Work and Economic Growth"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316643",
    opsMapping: [
      {
        opName: "Climb Lanka",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329539" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329361", jdBooklet: "https://drive.google.com/file/d/1kxqRVMIan54Z8PIL1uEB2r4ZargyEAWt/view?usp=drive_link" }
        ]
      },
      {
        opName: "Zri Adventures (Pvt) Ltd",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331354", jdBooklet: "https://drive.google.com/file/d/1MT78xIBVTY1ZGemwuv_y8rC8cG2rMvHN/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329360", jdBooklet: "https://drive.google.com/file/d/1Bq3za2-xTUo5LEtoVANW_YYWyRm-fOaj/view?usp=drive_link" }
        ]
      },
      {
        opName: "All Ceylon YMMA Conference",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331849" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331838" }
        ]
      },
      {
        opName: "Diyakawa Water Sports Centre – Hospitality",
        logistics: "Accommodation + 3 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332690" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332693" }
        ]
      },
      {
        opName: "Diyakawa Water Sports Centre – Events & Marketing",
        logistics: "Accommodation + 3 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332694" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332693" }
        ]
      },
      {
        opName: "Diyakawa Hotel & Restaurant",
        logistics: "Accommodation + 3 Meals",
        opportunities: [
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332886" }
        ]
      },
      {
        opName: "Sunrise Surf School",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332720" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332718" }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Global Classroom",
    image: "/globalclassroom.png",
    brief: "Quality education project contributing to SDG #4 by providing educational opportunities for all ages.",
    fullDescription: "The project aims to contribute to SDG #4 by providing an opening space for quality education for people of all ages, ensuring educational opportunities from initial literacy to other subjects such as mathematics, science and languages. Volunteers conduct interactive classes, cultural sessions, and develop communication skills.",
    sdg: ["4 - Quality Education"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Two Meals"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1316644",
    opsMapping: [
      {
        opName: "Finnish Pre School",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1330064", jdBooklet: "https://drive.google.com/file/d/1gS3HwIFwRbkR1Pgcmv3WgwjcU0GWGRVE/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329363" }
        ]
      },
      {
        opName: "Rathmulukanka Nenansala Education Center",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1330062", jdBooklet: "https://drive.google.com/file/d/1QuJv5DqCDGmdUGhi5M4ZLaaCT44A-O0t/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1323132" }
        ]
      },
      {
        opName: "Family Wellbeing Centre",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332342" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332340" }
        ]
      },
      {
        opName: "Ashla Nursery School",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332329" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332327" }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Fingerprint",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop",
    brief: "Youth empowerment and identity project helping young people discover their unique potential and leave their mark.",
    fullDescription: "Fingerprint is a youth development initiative that empowers young Sri Lankans to discover their identity and purpose. Through workshops on self-awareness, personal branding, and community engagement, volunteers help participants understand their unique strengths and build confidence to create positive change in their communities.",
    sdg: ["4 - Quality Education", "10 - Reduced Inequalities"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: [
      {
        opName: "Rathmulukanka Nenansala Education Center",
        logistics: "Accommodation + 2 Meals",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1330063" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1322941" }
        ]
      }
    ]
  },
  {
    id: 5,
    name: "Aquatica",
    image: "/Aquatica.jpg",
    brief: "Marine conservation project impacting SDG #14 to protect coastal ecosystems and marine wildlife.",
    fullDescription: "The project aims to impact SDG #14 by providing communities that live near marine and coastal areas, with concrete activities to improve the sustainability of the coast and protect marine wildlife that inhabits these ecosystems. Volunteers participate in beach cleanups, coral reef monitoring, and community education programs.",
    sdg: ["14 - Life Below Water", "13 - Climate Action"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://aiesec.org/opportunity/global-volunteer/1309136",
    opsMapping: [
      {
        opName: "Induruwa Sea Turtle Conservation Project",
        logistics: "Accommodation + Transportation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331039", jdBooklet: "https://drive.google.com/file/d/1UASk9aBRGIt4QI2JNuSoWFiyCgh6dDg1/view?usp=drive_link" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1309136" }
        ]
      },
      {
        opName: "Diyakawa Water Sports Centre",
        logistics: "Accommodation + Transportation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329932" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329942", jdBooklet: "https://drive.google.com/open?id=1_psdoMz3UuioLFFjKCCYg0CtF_LjrfgS&usp=drive_copy" }
        ]
      }
    ]
  },
  {
    id: 6,
    name: "On The Map",
    image: "/on the map.jpeg",
    brief: "Tourism promotion project putting Sri Lanka's cultural and natural wonders on the global stage.",
    fullDescription: "On The Map works to promote sustainable tourism in Sri Lanka by documenting lesser-known destinations, creating compelling content, and developing community-based tourism initiatives. Volunteers help local communities benefit from tourism while preserving cultural and natural heritage through storytelling and digital marketing.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: [
      {
        opName: "Diyakawa Water Sports Centre",
        logistics: "Accommodation + Transportation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1330014" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1329941", jdBooklet: "https://drive.google.com/file/d/1eJ1-mlh6evclybEwJTYB-xiohCEN_yzi/view?usp=drive_link" }
        ]
      },
      {
        opName: "Forest School Colombo",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332583" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332412" }
        ]
      }
    ]
  },
  {
    id: 7,
    name: "Rooted",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop",
    brief: "Agriculture and sustainability project connecting communities with the earth through regenerative farming practices.",
    fullDescription: "Rooted is an agricultural sustainability project that reconnects communities with traditional farming methods while introducing modern regenerative practices. Volunteers work with local farmers on organic agriculture, permaculture design, community gardens, and food security initiatives that nourish both people and the planet.",
    sdg: ["2 - Zero Hunger", "15 - Life on Land"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: [
      {
        opName: "Lanka Mangrove Museum and Learning Center",
        logistics: "Accommodation",
        opportunities: [
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1331930" }
        ]
      },
      {
        opName: "Forest School Colombo",
        logistics: "Accommodation",
        opportunities: [
          { duration: "4 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332583" },
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332412" }
        ]
      }
    ]
  },
  {
    id: 8,
    name: "Explorer",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=600&fit=crop",
    brief: "Adventure tourism and cultural exchange project creating unforgettable cross-cultural experiences.",
    fullDescription: "Explorer combined adventure tourism with meaningful cultural exchange, connecting international volunteers with local communities through eco-tourism, heritage trails, and immersive cultural programs that both preserved traditions and boosted local economies.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: [
      {
        opName: "Lanka Mangrove Museum and Learning Center",
        logistics: "Accommodation",
        opportunities: [
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332134" }
        ]
      }
    ]
  },
  {
    id: 9,
    name: "Green Leaders",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
    brief: "Environmental leadership project building the next generation of climate change champions and eco-warriors.",
    fullDescription: "Green Leaders cultivates environmental consciousness and leadership among Sri Lankan youth. Through hands-on sustainability workshops, tree-planting campaigns, waste management initiatives, and climate action projects, volunteers empower young people to become proactive environmental stewards and advocates for a greener future.",
    sdg: ["13 - Climate Action", "15 - Life on Land"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "active",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: [
      {
        opName: "Lanka Mangrove Museum and Learning Center",
        logistics: "Accommodation",
        opportunities: [
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332135" }
        ]
      },
      {
        opName: "Forest School Colombo",
        logistics: "Accommodation",
        opportunities: [
          { duration: "6 Weeks", applyLink: "https://aiesec.org/opportunity/global-volunteer/1332581" }
        ]
      }
    ]
  },
  /* ── INACTIVE PROJECTS ────────────────────────────── */
  {
    id: 10,
    name: "Discover",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    brief: "Cultural immersion and tourism development project promoting Sri Lanka's hidden gems while fostering sustainable travel.",
    fullDescription: "Discover is a sustainable tourism initiative that showcases Sri Lanka's hidden cultural treasures. Volunteers work with local communities to document lesser-known destinations, create compelling content, and develop community-based tourism programs that bring economic benefits while preserving cultural heritage and natural beauty.",
    sdg: ["8 - Decent Work and Economic Growth", "11 - Sustainable Cities"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 11,
    name: "Happy Bus",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
    brief: "Mobile community outreach project bringing joy, education, and essential services to underserved rural areas.",
    fullDescription: "Happy Bus is an innovative mobile outreach initiative that travels to underserved rural communities across Sri Lanka. The project brings educational workshops, recreational activities, health awareness campaigns, and community development programs directly to the people who need them most, spreading happiness and creating sustainable impact.",
    sdg: ["1 - No Poverty", "3 - Good Health and Well-being"],
    duration: "4/6 Weeks",
    location: "Rural Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Transportation", "Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 12,
    name: "Youth 4 Impact",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",
    brief: "Youth leadership program creating change-makers who drive sustainable development in their communities.",
    fullDescription: "Youth 4 Impact was designed to shape young Sri Lankans into community leaders through intensive leadership training, mentorship programs, and hands-on project management experience. Participants learned to identify community challenges and create innovative solutions.",
    sdg: ["4 - Quality Education", "17 - Partnerships for the Goals"],
    duration: "4/6 Weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 13,
    name: "Raise Your Voice",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    brief: "Advocacy and empowerment project giving young people the platform to speak up for social justice.",
    fullDescription: "Raise Your Voice empowered young Sri Lankans through public speaking training, debate workshops, and advocacy campaigns. Volunteers shared their experiences to inspire youth to become active voices for social justice, equality, and positive community change.",
    sdg: ["10 - Reduced Inequalities", "16 - Peace, Justice and Strong Institutions"],
    duration: "4/6 Weeks",
    location: "Colombo Region, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 14,
    name: "Equify",
    image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop",
    brief: "Gender equality and inclusion project breaking barriers and creating equal opportunities for all.",
    fullDescription: "Equify promoted gender equality and social inclusion through awareness campaigns, community workshops, and educational programs. Volunteers worked to break down stereotypes and create equal opportunities regardless of gender, background, or social status.",
    sdg: ["5 - Gender Equality", "10 - Reduced Inequalities"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 15,
    name: "Eco City",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&h=600&fit=crop",
    brief: "Urban sustainability project designing greener, cleaner, and more livable cities for the future.",
    fullDescription: "Eco City focused on creating sustainable urban environments through waste management solutions, green infrastructure projects, and community-led environmental initiatives in Sri Lankan cities. Volunteers championed clean energy adoption and eco-friendly urban planning.",
    sdg: ["11 - Sustainable Cities", "13 - Climate Action"],
    duration: "4/6 Weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 16,
    name: "Eat 4 Change",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop",
    brief: "Nutrition and food security project promoting healthy eating habits and sustainable food systems.",
    fullDescription: "Eat 4 Change tackled food insecurity and malnutrition through community nutrition programs, cooking workshops, and sustainable agriculture education. Volunteers helped establish community kitchens and promoted healthy eating habits across underserved areas.",
    sdg: ["2 - Zero Hunger", "3 - Good Health and Well-being"],
    duration: "4/6 Weeks",
    location: "Various locations, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Three Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 17,
    name: "Myself, My World",
    image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
    brief: "Mental health and personal development project building emotional resilience and self-awareness.",
    fullDescription: "Myself, My World focused on mental health awareness and personal development for young Sri Lankans. Through mindfulness workshops, emotional intelligence training, and self-care programs, volunteers helped participants build stronger connections with themselves and their communities.",
    sdg: ["3 - Good Health and Well-being", "4 - Quality Education"],
    duration: "4/6 Weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
  {
    id: 18,
    name: "Scale Up!",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    brief: "Entrepreneurship and business skills project helping aspiring entrepreneurs launch and grow their ventures.",
    fullDescription: "Scale Up! equipped aspiring entrepreneurs with essential business skills through startup workshops, mentorship programs, and pitch competitions. Volunteers with business expertise guided participants through ideation, business planning, and execution to help turn ideas into viable ventures.",
    sdg: ["8 - Decent Work and Economic Growth", "9 - Industry, Innovation and Infrastructure"],
    duration: "4/6 Weeks",
    location: "Colombo, Sri Lanka",
    status: "inactive",
    fee: "$120",
    amenities: ["Accommodation", "Two Meals"],
    expaLink: "https://expa.aiesec.org",
    opsMapping: []
  },
];

export function getOPByName(name: string): OP | undefined {
  return opportunityProviders.find(op => op.name === name);
}
