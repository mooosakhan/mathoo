"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CustomButton } from "./book-a-call-button";
import { SectionHeader } from "../reusable/section-header";
import { listContainer, listItem } from "@/lib/motion-variants";

export function CaseStudies() {
  const caseStudies = [
    { id: 1, name: "SMIT", image: "/assets/selectedWorks/work1.svg" },
    { id: 2, name: "SINDH BANK", image: "/assets/selectedWorks/work2.svg" },
    { id: 3, name: "SBCA", image: "/assets/selectedWorks/work3.svg" },
    { id: 4, name: "Savlan Alumni", image: "/assets/selectedWorks/work4.svg" },
  ];

  return (
    <motion.section 
      className="py-1 max-h-[1476px] max-w-[896px] mx-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto bg--600">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            chipText="Selected Works"
            heading="Projects That Showcase Problem-Solving"
            description="Each project represents a unique challenge solved through thoughtful research, strategic design, and attention to detail."
          />
        </motion.div>
        <motion.div 
          className="space-y-[24px]"
          variants={listContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="relative overflow-hidden rounded-3xl w-full bg-- group"
            variants={listItem}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-[35px] border-[13px] w-full border-[#f6f7f7]">
              <img
                src={caseStudies[0].image}
                alt={caseStudies[0].name}
                className="object-cover w-full"
              />
            </div>
            {/* Overlay button - appears on image hover */}
            <motion.div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-[840px] h-[80px] flex p-3 justify-between rounded-full bg-white text-white font-semibold text-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex gap-2 items-center justify-between">
                  <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full overflow-hidden bg-[#f6f7f7]">
                    <img
                      src="/assets/case-study/smit-logo.png"
                      alt="Muneeb ur Rehman"
                      className="w-[50px] h-[24px] object-cover rounded-full"
                    />
                  </div>
                  <div className="flex text-black flex-col">
                    <p className="text--900">SMIT</p>
                    <p className="text-[#7e7e7e] text-xs font-light">UI/UX Dsigner</p>
                  </div>
                </div>
                <motion.button 
                  className="px-3 py-2 rounded-full bg-[#f6f7f7] text-black font-light cursor-pointer   text-sm transition-colors duration-300 hover:bg--700 w-[144px] h-[53px]"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Case Study
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="flex items-center justify-between h-[400px] bg--50"
            variants={listItem}
          >
            <motion.div 
              className="relative overflow- rounded-3xl h-full max-w-[438px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-[33px] border-[13px] border-[#f6f7f7]">
                <img
                  src={caseStudies[1].image}
                  alt={caseStudies[1].name}
                  className="object-cover rounded-xl"
                />
              </div>
            </motion.div>

            <motion.div 
              className="relative overflow- rounded-3xl h-full max-w-[438px]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="rounded-[33px] border-[13px] border-[#f6f7f7]">
                <img
                  src={caseStudies[2].image}
                  alt={caseStudies[2].name}
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className=" overflow- rounded-3xl lg:h-[420px] "
            variants={listItem}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="rounded-[35px] border-[13px] w-full border-[#f6f7f7]">
              <img
                src={caseStudies[3].image}
                alt={caseStudies[3].name}
                className="object-cover w-full "
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
