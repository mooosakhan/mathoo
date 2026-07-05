import { CaseStudy } from '@/types/caseStudy'
import { TitleChip } from '../reusable/titleChip'
interface ProblemProps{
    problem: CaseStudy["problem"]
}
function Problem({ problem }:ProblemProps) {
  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-5xl flex-col items-center justify-center gap-6 px-6 py-10 text-center">
            <TitleChip text="Problem Statement" />
    
            <div className="w-full max-w-3xl">
              <p className="cs-paragraph">
                {problem.statement}
              </p>
    
              <div className="mt-10">
                <TitleChip text="Solutions" />
    
                <p className="cs-paragraph mt-10">
                  {problem.solution}
                </p>
              </div>
            </div>
          </div>
  )
}

export default Problem