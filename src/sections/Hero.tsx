"use client";

import { useRef } from "react";
import ArrowIcon from "@/assets/arrow-right.svg";
import cloudImage from "@/assets/Cloud Infrastructure.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip'
    >
      <div className='container'>
        <div className='md:flex items-center'>
          <div className='md:w-[478px]'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>
              Clarity in Every Decision
            </h1>
            <p className='md:text-xl text-lg max-md:leading-[26px] text-[#010D3E] tracking-tight mt-6'>
              Meet Alfred, your AI-powered advisor delivering real-time insights
              from all your data. Make faster decisions, cut through the noise,
              and focus on what truly matters.
            </p>
            <div className='flex gap-1 items-center mt-[30px]'>
              <button className='btn btn-primary' onClick={onOpenModal}>
                Contact Us
              </button>
              {/* <a
                href='https://alfred-pathsetter-cebxf4cpafazhthy.southindia-01.azurewebsites.net'
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-text gap-1 group transition-all duration-300 ease-in-out inline-flex items-center'
              >
                <span>Learn more</span>
                <ArrowIcon className='h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
              </a> */}
            </div>
          </div>

          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <motion.img
              src={cloudImage.src}
              // src={testing.src}
              alt='Cog image'
              className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 6,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
