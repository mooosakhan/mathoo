import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Features } from "@/components/portfolio/features";
import { About } from "@/components/portfolio/about";
import { Works } from "@/components/portfolio/works";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { Services } from "@/components/portfolio/services";
import { Testimonials } from "@/components/portfolio/testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Works />
      <About />
      <CaseStudies />
      <Services />
      <Testimonials />
    </main>
  );
}
