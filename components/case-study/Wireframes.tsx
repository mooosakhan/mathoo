import { StandardCaseStudy } from "@/types/caseStudy";
import { TitleChip } from "../reusable/titleChip";
import Image from "next/image";
type StandardWireframes = NonNullable<StandardCaseStudy["wireframes"]>;
interface WireFrameProps {
  wireframes: StandardWireframes;
  heading: string;
}
function Wireframes({ wireframes, heading }: WireFrameProps) {
  return (
    <>
      <TitleChip text={heading} className="text-center mt-10" />
      <div className="relative overflow-hidden max-w-5xl mx-auto mt-10">
        {/* Top Fade */}
        <div className="pointer-events-none absolute top-0 left-0 z-10 h-40 w-full bg-linear-to-b from-[#F8F9FA] to-transparent" />

        {/* Bottom Fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-40 w-full bg-gradient-to-t from-[#F8F9FA] to-transparent" />

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {wireframes.left.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={800}
                height={1200}
                className=" rounded-xl"
                alt=""
              />
            ))}
          </div>

          <div className="space-y-6 md:pt-16">
            {wireframes.right.map((img, i) => (
              <Image
                key={i}
                src={img}
                width={800}
                height={1200}
                className="rounded-xl "
                alt=""
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Wireframes;
