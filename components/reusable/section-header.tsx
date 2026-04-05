import { motion } from "framer-motion";
import { TitleChip } from "./titleChip";
import { revealContainer, revealItem } from "@/lib/motion-variants";

interface SectionHeaderProps {
  chipText: string;
  heading: string;
  description: string;
  headingAs?: "h1" | "h2" | "h3" | "h4";
}

export function SectionHeader({
  chipText,
  heading,
  description,
  headingAs: HeadingTag = "h3",
}: SectionHeaderProps) {
  return (
    <motion.div 
      className="text-center max-w-[570px] mx-auto flex flex-col gap-[8px] items-center justify-between"
      variants={revealContainer}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <motion.div variants={revealItem}>
        <TitleChip text={chipText} />
      </motion.div>
      <motion.div variants={revealItem}>
        <HeadingTag className="text-3xl font-base text-gray-900 sm:text-2xl">
          {heading}
        </HeadingTag>
      </motion.div>
      <motion.p 
        className="texxt-base text-[#7b7c7c] sm:text-md"
        variants={revealItem}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
