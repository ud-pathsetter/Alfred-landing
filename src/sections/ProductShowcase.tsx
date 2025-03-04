"use client";
import Image from "next/image";
import Product from "@/assets/Product.png";
import Product2 from "@/assets/Product2.png";
import Product3 from "@/assets/Product3.png";
import Wifi from "@/assets/WiFi.png";
import Modem from "@/assets/Modem.png";
import icon1 from "@/assets/Vector.svg";
import icon2 from "@/assets/Vector (1).svg";
import icon3 from "@/assets/Vector (2).svg";
import icon4 from "@/assets/Vector (3).svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Features = [
  {
    icon: icon1,
    title: "Unified Data",
    description:
      "Alfred integrates with your company-wide data to deliver real-time insights whenever you need them.",
  },
  {
    icon: icon2,
    title: "Accurate",
    description:
      "Get near-perfect answers to complex questions, plus clear next steps.",
  },
  {
    icon: icon3,
    title: "Always-On Advisory",
    description:
      "Alfred works 24/7, delivering data-backed decisions—no guesswork required.",
  },
  {
    icon: icon4,
    title: "Collaborative & Credible",
    description:
      "Alfred's chill style makes it easy to trust his guidance—he does the heavy lifting, you get the credit.",
  },
];

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      id='product'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip'
    >
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Boost your productivity with Alfred</div>
          </div>
          <h2
            className='section-title mt-5 tracking-wider'
            style={{ fontFamily: "Mokoto" }}
          >
            ALFRED
          </h2>
          <h2 className='section-title mt-5'>
            A more effective way of making decisions
          </h2>
          <p className='section-description mt-5'>
            Helping business leaders make decisions in real time providing them
            with accurate insights from integrated company wide data
          </p>
        </div>
        <div className='relative'>
          <Carousel
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              <CarouselItem>
                <Image
                  src={Product2}
                  alt='Product Image'
                  className='mt-10 border border-solid border-gray-300'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Product3}
                  alt='Product Image'
                  className='mt-10 border border-solid border-gray-300'
                />
              </CarouselItem>
              <CarouselItem>
                <Image
                  src={Product}
                  alt='Product Image'
                  className='mt-10 border border-solid border-gray-300'
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <motion.img
            src={Modem.src}
            alt='pyramid image'
            height={262}
            width={262}
            className='hidden lg:block absolute -right-36 -top-32'
            style={{
              translateY,
            }}
          />
          <motion.img
            src={Wifi.src}
            alt='tube image'
            height={248}
            width={248}
            className='hidden lg:block absolute bottom-24 -left-36'
            style={{
              translateY,
            }}
          />
        </div>

        <div className='grid gap-5 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-12 max-md:gap-10'>
          {Features.map((feature, index) => (
            <div
              key={index}
              className='flex flex-col gap-2 text-lg items-start'
            >
              <feature.icon />
              <h3 className='font-bold'>{feature.title}</h3>
              <p className='text-base'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
