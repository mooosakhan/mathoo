import Image from "next/image";
import { TitleChip } from "../reusable/titleChip";

type Props = {
  image: string;
  heading: string;
};

export default function SingleImageSection({
  image,
  heading,
}: Props) {
  return (
    <section className="w-full max-w-5xl py-20">
      <TitleChip text={heading} className="text-center mt-5"/>

      <Image
        src={image}
        alt={heading}
        width={1600}
        height={900}
        className="w-full rounded-xl mt-10"
      />
    </section>
  );
}