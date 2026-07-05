interface ImprovementsProps {
  improvements: CaseStudy["improvements"];
}
import { CaseStudy } from "@/types/caseStudy";
import { TitleChip } from "../reusable/titleChip";
function Improvements({ improvements }: ImprovementsProps) {
  return (
    <>
      <TitleChip text="Scope Improvements" className="text-center mt-20" />
      <div className="max-w-5xl mx-auto mt-10 px-4">
        <div className="flex flex-col md:flex-row gap-5">
          {improvements.map((improvement) => (
            <div key={improvement.title} className="bg-white rounded-lg  p-6 flex-1">
              <TitleChip
                text={improvement.title}
                className="text-center mb-4"
              />
              <p className="cs-paragraph text-center ">
                {improvement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Improvements;
