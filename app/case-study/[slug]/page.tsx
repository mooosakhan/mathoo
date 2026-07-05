import { notFound } from "next/navigation";

import Hero from "@/components/case-study/Hero";
import Overview from "@/components/case-study/Overview";
import Problem from "@/components/case-study/Problem";
import Gallery from "@/components/case-study/Gallery";
import Goal from "@/components/case-study/Goal";
import Personas from "@/components/case-study/Personas";
import Analysis from "@/components/case-study/Analysis";
import BrainStorm from "@/components/case-study/BrainStorm";
import Wireframes from "@/components/case-study/Wireframes";
import UserTesting from "@/components/case-study/UserTesting";
import Conclusion from "@/components/case-study/Conclusion";
import Improvements from "@/components/case-study/Improvements";
import SingleImageSection from "@/components/case-study/SingleImageSection";

import { caseStudies } from "@/constants/caseStudies";
import Prototype from "@/components/case-study/Prototype";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
  params: Promise<{
    slug: keyof typeof caseStudies;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = caseStudies[slug];

  if (!data) {
    notFound();
  }

  return (
    <>
      <Button className="translate-x-55 bg-[#FAF6F8 text-[#28282899]" >
        <ArrowLeft />
        back
      </Button>
      <section className="relative flex w-full flex-col items-center justify-center bg-[#F8F9FA] px-2 py-24 sm:px-3 sm:py-32 lg:px-4 lg:py-0">
        <Hero hero={data.hero} />

        <Overview overview={data.overview} />

        <Problem problem={data.problem} />

        <Gallery images={data.gallery} />

        <Goal goal={data.goal} />

        <Personas personas={data.personas} />

        <Analysis analysis={data.analysis} />

        <BrainStorm brainStorm={data.brainstorming} />

        {data.type === "standard" ? (
          <>
            {data.wireframes && (
              <Wireframes wireframes={data.wireframes} heading="Wireframes" />
            )}

            {data.finalDesign && (
              <Wireframes
                wireframes={data.finalDesign}
                heading="Final Design"
              />
            )}
          </>
        ) : (
          <>
            {data.wireframes && (
              <SingleImageSection
                image={data.wireframes.image}
                heading="Wireframes"
              />
            )}

            {data.finalDesign && (
              <SingleImageSection
                image={data.finalDesign.image}
                heading="Final Design"
              />
            )}
          </>
        )}

        {data.testing && <UserTesting testing={data.testing} />}
        {data.prototype && (
          <Prototype image={data.prototype.src} heading="Prototype" />
        )}
        <Conclusion conclusion={data.conclusion} />

        <Improvements improvements={data.improvements} />
      </section>
    </>
  );
}
