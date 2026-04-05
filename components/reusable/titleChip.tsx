"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface TitleChipProps {
  text: string;
}

export function TitleChip({ text }: TitleChipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: -10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, type: "spring", stiffness: 400 }}
    >
      <Button variant="default" className=" text-[#7e7e7e]  px-2 text-xs shadow-none  font-medium rounded-[31px] min-w-[108px] h-[46px] border border-[5px] border-[#f6f7f7] hover:bg-white bg-white">
        {text}
      </Button>
    </motion.div>
  );
}
