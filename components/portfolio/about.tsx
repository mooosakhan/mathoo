"use client";

import { motion } from "framer-motion";
import { TitleChip } from "../reusable/titleChip";
import { fadeInUp, revealContainer, revealItem } from "@/lib/motion-variants";

export function About() {
  return (
    <motion.section 
      className="py-4 sm:py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-8 text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <TitleChip text="About Me" />
        </motion.div>

        <motion.div 
          className="text-center"
          variants={revealContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="text-lg leading-relaxed text-[#7b7c7c] sm:text-xl">
            <motion.span variants={revealItem} className="inline">I design </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">user focused experiences</motion.span>
            <motion.span variants={revealItem} className="inline"> that </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">solve usability challenges</motion.span>
            <motion.span variants={revealItem} className="inline"> and </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">improve workflows</motion.span>
            <motion.span variants={revealItem} className="inline"> through thoughtful </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">problem solving</motion.span>
            <motion.span variants={revealItem} className="inline"> and </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">UI decisions.</motion.span>
            <motion.span variants={revealItem} className="inline">
              {" "}
              Outside of design I enjoy late night creative sessions and{" "}
            </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">turning ideas</motion.span>
            <motion.span variants={revealItem} className="inline"> into meaningful </motion.span>
            <motion.span variants={revealItem} className="inline text-[#282828]">products.</motion.span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
