import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[#f1f3e9]">
      <Navbar />
      <div className="pt-32 pb-20 container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-[#234934] mb-4">
          Our Team
        </h1>
        <p className="text-[#234934]/70 text-lg">
          Meet the passionate team behind AIESEC in SLIIT's iGV department.
        </p>
        {/* Team page content will be developed */}
        <div className="mt-12 p-8 bg-white rounded-2xl text-center">
          <p className="text-[#234934]/60">Full team page coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
