import Image from "next/image";
import { TitleChip } from "./titleChip";
export interface Persona {
  id: number;
  name: string;
  image: string;
  role: string;
  age: string;
  gender: string;
  description: string;
  goal: string;
  frustrations: string;
}
export default function PersonaCard({ id, name, image, role, age, gender, description, goal, frustrations }: Persona) {
  return (
    <div className="persona-card">
      {/* Image */}
      <div className="flex justify-center items-center w-75 mx-auto rounded-2xl bg-[#c0b9b9]">
        <Image
          src={image}
          alt={name}
          width={300}
          height={100}
          className="object-cover object-top"
        />
      </div>

      <h1 className="text-center mt-5 text-2xl font-semibold leading-relaxed text-gray-800">
        {name}
      </h1>

      <div className="mt-5 flex space-x-3 justify-center">
        <TitleChip text={role} />
        <TitleChip text={age} />
        <TitleChip text={gender} />
      </div>

      <p className="cs-paragraph text-center mt-5">{description}</p>

      <div className="flex gap-5 mt-5">
        <div className="bg-white rounded-lg p-4 flex-1">
          <TitleChip text="Goal" className="text-center mt-5" />
          <p className="cs-paragraph text-center mt-5">{goal}</p>
        </div>

        <div className="bg-white rounded-lg p-4 flex-1">
          <TitleChip text="Frustrations" className="text-center mt-5" />
          <p className="cs-paragraph text-center mt-5">
            {frustrations}
          </p>
        </div>
      </div>
    </div>
  );
}
