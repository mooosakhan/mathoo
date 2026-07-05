import studentPortal from "./studentPortal";
import sindhBank from "./sindhBank";
import sbca from "./sbca";
import saylaniAlumni from "./saylaniAlumni";
import { CaseStudy } from "@/types/caseStudy";

export const caseStudies: Record<string, CaseStudy> = {
  "student-portal": studentPortal,
  "sindh-bank": sindhBank,
  "saylani-alumni": saylaniAlumni,
  "sbca": sbca,
};
