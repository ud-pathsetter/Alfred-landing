"use client";

import acmeLogo from "@/assets/logo-acme.png";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className='py-8 bg-white md:py-12'>
      <div className='container'>
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* <Image
              src={acmeLogo}
              alt='acmelogo'
              className='logo-ticker-image'
            />

            {/* First set of items */}
            <span className='logo-ticker-image text-2xl font-bold'>
              Hospitality
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>Mining</span>
            <span className='logo-ticker-image text-2xl font-bold'>Metal</span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Finance
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Real Estate
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>Retail</span>
            <span className='logo-ticker-image text-2xl font-bold'>Pharma</span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Manufacturing
            </span>

            {/* Second set of items (identical to the first) */}
            <span className='logo-ticker-image text-2xl font-bold'>
              Hospitality
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>Mining</span>
            <span className='logo-ticker-image text-2xl font-bold'>Metal</span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Finance
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Real Estate
            </span>
            <span className='logo-ticker-image text-2xl font-bold'>Retail</span>
            <span className='logo-ticker-image text-2xl font-bold'>Pharma</span>
            <span className='logo-ticker-image text-2xl font-bold'>
              Manufacturing
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
