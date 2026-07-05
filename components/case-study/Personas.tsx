import { TitleChip } from "../reusable/titleChip";
import PersonaCard from "../reusable/PersonaCard";
import { CaseStudy } from "@/types/caseStudy";
interface PersonaProps {
  personas: CaseStudy["personas"];
}
function Personas({ personas }: PersonaProps) {
  return (
    <>
      <TitleChip text="User Personas" className="text-center mt-10" />

      {personas.map((persona) => (
        <PersonaCard key={persona.id} {...persona} />
      ))}
    </>
  );
}

export default Personas;
