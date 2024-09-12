"use client";

import { cn } from "@/@/lib/utils";
import { Box, useTheme } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];
  const theme = useTheme();

  return (
    <div className={cn("relative", className)}>
      <div
        className='relative cursor-pointer group'
        onClick={() => setIsVideoOpen(true)}>
        <img
          src={`https://img.youtube.com/vi/${thumbnailSrc}/0.jpg`}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          className='w-full transition-all duration-200 group-hover:brightness-[0.8] ease-out rounded-xl shadow-lg border'
        />
        <div className='absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-2xl'>
          <div className='bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-28'>
            <div
              className={`flex items-center justify-center bg-[#b91c1c] from-primary/30 to-primary shadow-md rounded-full size-20 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100`}>
              <Play
                className='size-8 text-white fill-white group-hover:scale-105 scale-100 transition-transform duration-200 ease-out'
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md'>
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className='relative w-full max-w-4xl aspect-video mx-4 md:mx-0'>
              <Box
                sx={{ zIndex: theme.zIndex.tooltip, background: "black" }}
                className='size-full border-2 border-white rounded-2xl overflow-hidden isolate relative'>
                <iframe
                  src={videoSrc}
                  className='size-full rounded-2xl'
                  title={thumbnailAlt}
                  allowFullScreen
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
              </Box>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
