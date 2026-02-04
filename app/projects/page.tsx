import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f1f3e9]">
      <Navbar />
      <div className="pt-32 pb-20 container-custom">
        <h1 className="text-4xl md:text-5xl font-bold text-[#234934] mb-4">
          Our Projects
        </h1>
        <p className="text-[#234934]/70 text-lg">
          Explore all our Global Volunteer projects in Sri Lanka.
        </p>
        {/* Projects page content will be developed */}
        <div className="mt-12 p-8 bg-white rounded-2xl text-center">
          <p className="text-[#234934]/60">Full projects page coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
