import { CaseStudy } from '@/types/caseStudy'
import { TitleChip } from '../reusable/titleChip'
interface GoalProps{
    goal: CaseStudy["goal"]
}
function Goal({ goal }: GoalProps) {
  return (
     <div className="mt-10">
            <TitleChip text="Project Goal" className="text-center" />
    
            <div className="mt-10 w-full max-w-3xl">
              <p className="cs-paragraph text-center">
                {goal}
              </p>
            </div>
          </div>
  )
}

export default Goal