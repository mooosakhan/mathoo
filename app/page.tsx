import type { Metadata } from "next";
import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Features } from "@/components/portfolio/features";
import { About } from "@/components/portfolio/about";
import { Works } from "@/components/portfolio/works";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { Services } from "@/components/portfolio/services";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Footer } from "@/components/portfolio/footer";

export const metadata: Metadata = {
  title: "Muneeb Ur Rehman - Product Designer | UI/UX Expert",
  description:
    "Award-winning UI/UX designer creating beautiful, user-centered product experiences. Specializing in design systems, web design, and digital transformation.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] relative">
      {/* Left vertical line */}
      <div
        className="absolute left-57 top-0 bottom-0 w-[1px] pointer-events-none"
        style={{
          backgroundImage: "url(/assets/line.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      />
      
      {/* Right vertical line */}
      <div
        className="absolute right-57 top-0 bottom-0 w-[1px] pointer-events-none"
        style={{
          backgroundImage: "url(/assets/line.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      />

      <div
        className="relative "
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative">
          <Header />
          <Hero />
        </div>
      </div>
      <Features />
      {/* <Works /> */}
      <About />
      <CaseStudies />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}

