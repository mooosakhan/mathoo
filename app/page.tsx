import { Header } from "@/components/portfolio/header";
import { Hero } from "@/components/portfolio/hero";
import { Features } from "@/components/portfolio/features";
import { About } from "@/components/portfolio/about";
import { Works } from "@/components/portfolio/works";
import { CaseStudies } from "@/components/portfolio/case-studies";
import { Services } from "@/components/portfolio/services";
import { Testimonials } from "@/components/portfolio/testimonials";
import { Footer } from "@/components/portfolio/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] ">
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
