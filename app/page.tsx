import type { Metadata } from "next";
import { Hero } from "@/components/portfolio/hero";
import { Features } from "@/components/portfolio/features";
import { About } from "@/components/portfolio/about";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { Services } from "@/components/portfolio/services";
import { Testimonials } from "@/components/portfolio/testimonials";
import ImageContainer from "@/components/portfolio/ImageContainer";

export const metadata: Metadata = {
  title: "Muneeb Ur Rehman - Product Designer | UI/UX Expert",
  description:
    "Award-winning UI/UX designer creating beautiful, user-centered product experiences. Specializing in design systems, web design, and digital transformation.",
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#F8F9FA]">
      {/* Left vertical line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 left-4 hidden md:block lg:left-20 xl:left-40 2xl:left-57 w-[1px]"
        style={{
          backgroundImage: "url(/assets/line.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Right vertical line */}
      <div
        className="pointer-events-none absolute top-0 bottom-0 right-4 hidden md:block lg:right-20 xl:right-40 2xl:right-57 w-[1px]"
        style={{
          backgroundImage: "url(/assets/line.png)",
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
        }}
      />

      {/* Hero */}
      <div
        className="relative"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative">
          <Hero />
        </div>
      </div>

      <Features />
      <ImageContainer />
      <About />
      <CaseStudies />
      <Services />
      <Testimonials />
    </main>
  );
}