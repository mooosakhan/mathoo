"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";

interface TitleChipProps {
  text: string;
}

export function TitleChip({ text }: TitleChipProps) {
  return (
    <motion.div
    >
      <Button variant="default" className=" text-[#7e7e7e]  px-2 text-xs shadow-none  font-medium rounded-[31px] min-w-[108px] h-[46px] border border-[5px] border-[#f6f7f7] hover:bg-white bg-white">
        {text}
      </Button>
    </motion.div>
  );
}
