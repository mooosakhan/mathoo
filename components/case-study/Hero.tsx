import Image from "next/image";
import { TitleChip } from "../reusable/titleChip";
import { CaseStudy } from "@/types/caseStudy";
interface HeroProps {
  hero: CaseStudy["hero"];
}
function Hero({ hero }: HeroProps) {
  return (
    <div className="cs-card gap-3">
      {/* hero image */}
      <div className="relative flex w-full md:w-1/2 items-center justify-center rounded-xl overflow-hidden h-[300px] ">
        <div className={hero.upperfade} />

        <Image
          src={hero.logo}
          width={220}
          height={300}
          alt="logo"
          className="relative z-10 h-auto w-40 md:w-52"
        />

        <div className={hero.lowerfade} />
      </div>
      {/* hero content  */}
      <div className="mt-8 cs-half md:mt-0">
        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-switzer">{hero.title}</h1>

            <p className="mt-3 leading-relaxed text-[#28282899] font-switzer">
              {hero.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 font-switzer">
            <div>
              <h2 className="cs-meta-title">Industry:</h2>
              <p>{hero.industry}</p>
            </div>

            <div>
              <h2 className="cs-meta-title">Agency:</h2>
              <p>{hero.agency}</p>
            </div>

            <div>
              <h2 className="cs-meta-title">Time Period:</h2>
              <p>{hero.duration}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {hero.chips.map((chip) => (
              <TitleChip key={chip} text={chip} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
