import Navbar    from "@/components/Navbar";
import Hero      from "@/components/Hero";
import Speakers  from "@/components/Speakers";
import Leads     from "@/components/Leads";
import Archive   from "@/components/Archive";
import Committee from "@/components/Committee";
import Footer    from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Speakers />
      <Leads />
      <Archive />
      <Committee />
      <Footer />
    </main>
  );
}
