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
          {/* FIRST CARD */}
          <motion.div
            className="relative overflow-hidden rounded-3xl w-full group"
            variants={listItem}
          >
            <div className="rounded-[35px] border-[13px] w-full border-[#f6f7f7]">
              <img
                src={caseStudies[0].image}
                alt={caseStudies[0].name}
                className="object-cover w-full transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div className="w-[840px] h-[80px] flex p-3 justify-between rounded-full bg-white">
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#f6f7f7] flex items-center justify-center">
                    <img
                      src="/assets/case-study/smit-logo.png"
                      className="w-[50px] h-[24px]"
                    />
                  </div>
                  <div className="flex flex-col text-black">
                    <p>SMIT</p>
                    <p className="text-xs text-gray-500 font-light">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                <button className="px-3 py-2 rounded-full bg-[#f6f7f7] text-sm w-[144px] hover:bg-gray-200">
                  View Case Study
                </button>
              </div>
            </div>
          </motion.div>

          {/* SECOND ROW */}
          <motion.div
            className="flex items-center justify-between h-[400px]"
            variants={listItem}
          >
            {/* CARD 2 */}
            <div className="relative overflow-hidden rounded-3xl h-full max-w-[438px] group">
              <div className="rounded-[33px] border-[13px] border-[#f6f7f7] h-full">
                <img
                  src={caseStudies[1].image}
                  alt={caseStudies[1].name}
                  className="object-cover w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 mb-6 mx-auto opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
                <div className="w-[90%] h-[80px] flex p-3 justify-between rounded-full bg-white">
                  <div className="flex gap-2 items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f6f7f7] flex items-center justify-center">
                      <img
                        src="/assets/case-study/smit-logo.png"
                        className="w-[40px] h-[24px]"
                      />
                    </div>
                    <div className="flex flex-col text-black">
                      <p>SMIT</p>
                      <p className="text-xs text-gray-500 font-light">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>

                  <button className="px-3 py-2 rounded-full bg-[#f6f7f7] text-sm cursor-pointer font-medium w-[144px] hover:bg-gray-200">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="relative overflow-hidden rounded-3xl h-full max-w-[438px] group">
              <div className="rounded-[33px] border-[13px] border-[#f6f7f7] h-full">
                <img
                  src={caseStudies[2].image}
                  alt={caseStudies[2].name}
                  className="object-contain w-full h-full transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 w-full left-1/2 -translate-x-1/2 mb-6 mx-auto opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center justify-center">
                <div className="w-[90%] h-[80px] flex p-3 justify-between rounded-full bg-white">
                  <div className="flex gap-2 items-center">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f6f7f7] flex items-center justify-center">
                      <img
                        src="/assets/case-study/smit-logo.png"
                        className="w-[40px] h-[24px]"
                      />
                    </div>
                    <div className="flex flex-col text-black">
                      <p>SMIT</p>
                      <p className="text-xs text-gray-500 font-light">
                        UI/UX Designer
                      </p>
                    </div>
                  </div>

                  <button className="px-3 py-2 rounded-full bg-[#f6f7f7] text-sm cursor-pointer font-medium w-[144px] hover:bg-gray-200">
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* LAST CARD */}
          <motion.div
            className="relative overflow-hidden rounded-3xl lg:h-[420px] group"
            variants={listItem}
          >
            <div className="rounded-[35px] border-[13px] w-full border-[#f6f7f7]">
              <img
                src={caseStudies[3].image}
                alt={caseStudies[3].name}
                className="object-cover w-full transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-6 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <div className="w-[840px] h-[80px] flex p-3 justify-between rounded-full bg-white">
                <div className="flex gap-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full bg-[#f6f7f7] flex items-center justify-center">
                    <img
                      src="/assets/case-study/smit-logo.png"
                      className="w-[50px] h-[24px]"
                    />
                  </div>
                  <div className="flex flex-col text-black">
                    <p>SMIT</p>
                    <p className="text-xs text-gray-500 font-light">
                      UI/UX Designer
                    </p>
                  </div>
                </div>

                <button className="px-3 py-2 rounded-full bg-[#f6f7f7] text-sm w-[144px] hover:bg-gray-200">
                  View Case Study
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
