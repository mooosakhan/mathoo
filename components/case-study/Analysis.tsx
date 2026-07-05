import { CaseStudy } from "@/types/caseStudy";
import { TitleChip } from "../reusable/titleChip";
interface AnalysisProps {
  analysis: CaseStudy["analysis"];
}
function Analysis({ analysis }: AnalysisProps) {
  return (
    <>
      {" "}
      <TitleChip text="Analysis" className="text-center mt-10" />
      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Cards */}
          {analysis.map((result) => (
            <div
              key={result.title}
              className="bg-white rounded-lg p-6 "
            >
              <div className="w-8 h-8 rounded-full flex items-center justify-center  mb-5 bg-[#f6f8f6]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.75 21.5H7.75C2.32 21.5 0 19.18 0 13.75V7.75C0 2.32 2.32 0 7.75 0H12.75C13.16 0 13.5 0.34 13.5 0.75C13.5 1.16 13.16 1.5 12.75 1.5H7.75C3.14 1.5 1.5 3.14 1.5 7.75V13.75C1.5 18.36 3.14 20 7.75 20H13.75C18.36 20 20 18.36 20 13.75V8.75C20 8.34 20.34 8 20.75 8C21.16 8 21.5 8.34 21.5 8.75V13.75C21.5 19.18 19.18 21.5 13.75 21.5Z"
                    fill="black"
                  />
                  <path
                    d="M20.75 9.5005H16.75C13.33 9.5005 12 8.17048 12 4.75048V0.750477C12 0.450477 12.18 0.170477 12.46 0.060477C12.74 -0.059523 13.06 0.010477 13.28 0.220477L21.28 8.22048C21.49 8.43048 21.56 8.7605 21.44 9.0405C21.33 9.3205 21.05 9.5005 20.75 9.5005ZM13.5 2.56048V4.75048C13.5 7.33048 14.17 8.00048 16.75 8.00048H18.94L13.5 2.56048Z"
                    fill="black"
                  />
                  <path
                    d="M8.39966 17.4602C7.95966 17.4602 7.53966 17.2902 7.22966 16.9802L4.76966 14.5202C4.22966 13.9802 4.13966 13.0702 4.55966 12.4302L5.68966 10.7302C5.96966 10.3002 6.54966 9.99017 7.06966 9.99017H9.71966C10.2297 9.99017 10.8097 10.3002 11.0997 10.7302L12.2297 12.4202C12.6497 13.0502 12.5597 13.9702 12.0197 14.5102L9.55966 16.9702C9.25966 17.2902 8.83966 17.4602 8.39966 17.4602ZM7.07966 11.5002C7.03966 11.5102 6.95966 11.5502 6.93966 11.5802L5.81966 13.2702C5.78966 13.3102 5.79966 13.4302 5.83966 13.4702L8.29966 15.9302C8.34966 15.9802 8.46966 15.9802 8.51966 15.9302L10.9797 13.4702C11.0197 13.4302 11.0297 13.3202 10.9997 13.2702L9.86966 11.5802C9.84966 11.5602 9.76966 11.5202 9.72966 11.5102L7.07966 11.5002Z"
                    fill="black"
                  />
                </svg>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {result.title}
              </h3>

              <p className="text-[#28282899] font-switzer leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Analysis;
