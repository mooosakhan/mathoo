import Image from 'next/image'
import { TitleChip } from '../reusable/titleChip'
import { CaseStudy } from '@/types/caseStudy'
interface BrainStormProps{
    brainStorm : CaseStudy["brainstorming"]
}
function BrainStorm({brainStorm}:BrainStormProps) {
  return (
    <>
    <TitleChip
            text="BrainStorming & Ideation"
            className="text-center mt-10"
          />
          <div className="relative overflow-hidden rounded-lg max-w-5xl mx-auto cs-card p-6 md:p-10 mt-10 min-h-[420px]">
            {/* Content */}
            <div className="max-w-full md:max-w-[55%]">
              <h2 className="text-2xl font-bold text-gray-900">My Approach</h2>
    
              <p className="mt-3 text-gray-600 leading-relaxed">
                {brainStorm.approach}
              </p>
    
              <h2 className="mt-8 text-2xl font-bold text-gray-900">
                Possible Solution
              </h2>
    
              <p className="mt-3 text-gray-600 leading-relaxed">
                {brainStorm.solution}
              </p>
            </div>
            <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-32">
              <Image
                src={brainStorm.image}
                alt="Quiz"
                width={500}
                height={520}
                className="-rotate-12"
              />
              <Image
                src={brainStorm.image}
                alt="Quiz"
                width={500}
                height={520}
                className="absolute top-8 left-16 -rotate-12"
              />
            </div>
          </div>
          </>
  )
}

export default BrainStorm