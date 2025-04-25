"use client"

import { LayoutGroup, motion } from "motion/react"


import { TextRotate } from "@/components/ui/text-rotate"

function Preview() {
  return (
    <div className="w-full h-full text-6xl sm:text-3xl md:text-5xl flex flex-row items-center justify-center font-overusedGrotesk dark:text-muted text-foreground font-light overflow-hidden p-12 sm:p-20 md:p-24">
      <LayoutGroup>
        <motion.div className="flex whitespace-pre flex-col gap-10 items-center" layout>
          <motion.span
            className="pt-0.5 sm:pt-1 md:pt-2 text-[#f89b00] text-2xl xl:text-6xl md:text-4xl"
            layout
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
          >
            아직도 모르시나요? 
   
          </motion.span>
          <TextRotate
            texts={[
              "물어보세요!",
              "당신에게 어울리는 직업을",
              "공부하는 방법을",
              "취업하는 방법을",
            ]}
            mainClassName=" text-[#1a237e] text- px-2 sm:px-2 md:px-3 text-xl md:text-4xl bg-[#f89b00] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2200}
          />
        </motion.div>
      </LayoutGroup>
    </div>
  )
}

export { Preview }
