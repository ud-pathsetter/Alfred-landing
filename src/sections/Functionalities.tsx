"use client";
/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import Internet from "@/assets/Internet.png";
import PC from "@/assets/PC.png";
import fileImage from "@/assets/File.png";
import { motion } from "framer-motion";

const FuncCardsContent = [
  {
    img: PC,
    title: "Smart AI Tools",
    description: "Empowering teams with AI-driven automation",
  },
  {
    img: Internet,
    title: "Boosting Productivity",
    description: "Building AI platforms for smarter work",
  },
  {
    img: fileImage,
    title: "Seamless Decisions",
    description: "AI insights for streamlined decision-making",
  },
];

export const Functionalities = () => {
  return (
    <section id='features' className='bg-white py-24'>
      <div className='container'>
        <div className='max-w-[540px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Everything you need</div>
          </div>
          <h2 className='section-title mt-5'>Alfred's Vision</h2>
          <p className='section-description mt-5'>
            Building AI platforms to boost organizational productivity
          </p>
        </div>

        {/* cards */}
        <div className='flex sm:flex-wrap md:flex-nowrap md:gap-6 gap-4 justify-center mt-10'>
          {FuncCardsContent.map((card, index) => (
            <div
              key={index}
              className='bg-white py-10 md:px-14 px-8 rounded-xl shadow-xl text-center border'
            >
              <div className='flex justify-center'>
                <motion.img
                  src={card.img.src}
                  alt={card.title}
                  width={240}
                  height={240}
                  className='mb-4'
                  animate={{
                    translateY: [-17, 17],
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <h3 className='font-semibold text-xl mb-2'>{card.title}</h3>
              <p className='text-gray-600 text-base max-w-[16rem]'>
                {card.description}
              </p>
            </div>
          ))}
        </div>
        {/* cards */}
      </div>
    </section>
  );
};
