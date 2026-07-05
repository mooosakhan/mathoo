import Image from "next/image";
import { TitleChip } from "../reusable/titleChip";
import { CaseStudy } from "@/types/caseStudy";
interface UserTestingProps {
  testing: CaseStudy["testing"];
}
function UserTesting({ testing }: UserTestingProps) {
  return (
    <>
      <TitleChip text="User Testing" className="text-center mt-10" />
      <div className="persona-card mt-5">
        <div className="flex justify-center items-center w-75 mx-auto rounded-lg bg-[#c0b9b9]">
          <Image
            src={testing.user.image}
            alt={""}
            width={300}
            height={100}
            className="object-cover object-top"
          />
        </div>

        <h1 className="text-center mt-5 text-2xl font-semibold leading-relaxed text-gray-800">
          {testing.user.name}
        </h1>

        <div className="mt-2 flex space-x-3 justify-center">
          {testing.user.chips.map((chip) => (
            <TitleChip text={chip} key={chip} />
          ))}
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {testing.stats.map((stat)=>(
            <div key={stat.title} className="bg-white rounded-2xl p-8  border-gray-100 flex flex-col w-[300px]">
            <h3 className="text-lg font-medium text-gray-700">
             {stat.title}
            </h3>

            <div className="mt-5">
              <h1 className="text-5xl font-bold leading-none">{stat.value}</h1>

              <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserTesting;
