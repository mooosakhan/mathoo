import { CaseStudy } from "@/types/caseStudy"
import { TitleChip } from "../reusable/titleChip"

interface ConclusionProps{
    conclusion : CaseStudy["conclusion"]
}
function Conclusion({conclusion}: ConclusionProps) {
  return (
    <div className="mt-10 max-w-4xl mx-auto">
            <TitleChip text="Conclusion" className="text-center" />
    
            <p className="cs-paragraph mt-10 text-center">
              {conclusion}
            </p>
          </div>
  )
}

export default Conclusion