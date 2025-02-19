"use client";

import ArrowRight from "@/assets/arrow-right.svg";
import Database from "@/assets/Database.png";
import Router from "@/assets/Router.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface CallToActionProps {
  onOpenModal: () => void;
}

export function CallToAction({ onOpenModal }: CallToActionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      id='updates'
      className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'
    >
      <div className='container'>
        <div className='section-heading relative pt-10'>
          <h2 className='section-title'>Sign up for a demo</h2>
          <p className='section-description mt-5'>
            Welcome to your AI-powered advisor. Access real-time insights, track
            priorities, and make faster, data-driven decisions. No
            guesswork—just clarity.
          </p>

          <motion.img
            src={Database.src}
            alt='star imge'
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            style={{ translateY }}
          />
          <motion.img
            src={Router.src}
            width={360}
            alt='spring image'
            className='absolute -right-[331px] -top-[19px]'
            style={{ translateY }}
          />
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button onClick={onOpenModal} className='btn btn-primary'>
            Contact Us
          </button>
          {/* <a
            href='https://alfred-pathsetter-cebxf4cpafazhthy.southindia-01.azurewebsites.net'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-text gap-1 group transition-all duration-300 ease-in-out inline-flex items-center'
          >
            <span>Learn more</span>
            <ArrowRight className='h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
          </a> */}
        </div>
      </div>
    </section>
  );
}
