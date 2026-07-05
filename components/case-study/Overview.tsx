import { CaseStudy } from '@/types/caseStudy';
import Image from 'next/image'
interface OverviewProps {
    overview: CaseStudy["overview"];
}
function Overview({ overview }: OverviewProps) {
  return (
    <div className="cs-card mt-10 gap-10">
            <div className="cs-half">
              <p className="leading-relaxed text-sm sm:text-base font-switzer">
                {overview.description}
              </p>
            </div>
    
            <div className="relative mx-auto h-[240px] w-full max-w-md md:h-[320px] md:w-1/2">
              <Image
                src={overview.images[0]}
                alt="work2"
                width={320}
                height={240}
                className="cs-stack-image -translate-x-[50%] -translate-y-[45%] -rotate-12"
              />
    
              <Image
                src={overview.images[0]}
                alt="work2"
                width={320}
                height={240}
                className="cs-stack-image -translate-x-[30%] -translate-y-[50%] -rotate-12"
              />
            </div>
          </div>
  )
}

export default Overview