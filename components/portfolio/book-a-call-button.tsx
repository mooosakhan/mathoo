"use client";

import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  text?: string;
  variant?: "dark" | "light" | "secondary";
}

export function CustomButton({ text = "Book a Call", variant = "dark" }: CustomButtonProps) {
  const isDark = variant === "dark";
  const isSecondary = variant === "secondary";
  
  return (
    <Button
      className={`flex flex-row justify-center items-center gap-2.5 h-[41px] text-sm font-medium rounded-[31px] px-[13px] py-[10px] w-auto cursor-pointer ${
        isDark 
          ? "text-white" 
          : isSecondary
          ? "text-white"
          : "text-[#28282899]"
      }`}
      style={
        isDark
          ? {
              backgroundColor: "#222222",
              boxShadow:
                "0.444584px 0.444584px 0.628737px -0.75px rgba(0, 0, 0, 0.26), 1.21072px 1.21072px 1.71222px -1.5px rgba(0, 0, 0, 0.247), 2.6583px 2.6583px 3.75941px -2.25px rgba(0, 0, 0, 0.23), 5.90083px 5.90083px 8.34503px -3px rgba(0, 0, 0, 0.192), 14px 14px 21.2132px -3.75px rgba(0, 0, 0, 0.2), -0.5px -0.5px 0px rgba(0, 0, 0, 0.686), inset 1px 1px 1px rgba(255, 255, 255, 0.7), inset -1px -1px 1px rgba(0, 0, 0, 0.23)",
            }
          : isSecondary
          ? {
              backgroundColor: "#28282899",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
            }
          : {
              backgroundColor: "#FFFFFF",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.08)",
            }
      }
    >
      {text}
    </Button>
  );
}
