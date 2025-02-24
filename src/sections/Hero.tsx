// "use client";
// import { useRef } from "react";
// import cloudImage from "@/assets/Cloud Infrastructure.png";
// import { motion, useScroll, useTransform } from "framer-motion";

// interface HeroProps {
//   onOpenModal: () => void;
// }

// export function Hero({ onOpenModal }: HeroProps) {
//   const heroRef = useRef<HTMLElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: heroRef,
//     offset: ["start end", "end start"],
//   });
//   const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

//   return (
//     <section
//       ref={heroRef}
//       className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#00CFAA,#EAEEFE_100%)] overflow-x-clip'
//     >
//       <div className='container'>
//         <div className='md:flex items-center'>
//           <div className='md:w-[478px]'>
//             <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0c3b32] text-transparent bg-clip-text mt-6'>
//               Clarity in Every Decision
//             </h1>
//             <p className='md:text-xl text-lg max-md:leading-[26px] text-[#1c3a63] tracking-tight mt-6'>
//               {/* <p className='md:text-xl text-lg max-md:leading-[26px] text-[#010D3E] tracking-tight mt-6'> */}
//               Meet Alfred, your AI-powered advisor delivering real-time insights
//               from all your data. Make faster decisions, cut through the noise,
//               and focus on what truly matters.
//             </p>
//             <div className='flex gap-1 items-center mt-[30px]'>
//               <button className='btn btn-primary' onClick={onOpenModal}>
//                 Contact Us
//               </button>
//             </div>
//           </div>

//           <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
//             <motion.img
//               src={cloudImage.src}
//               alt='Cog image'
//               className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0'
//               animate={{
//                 translateY: [-30, 30],
//               }}
//               transition={{
//                 repeat: Infinity,
//                 repeatType: "mirror",
//                 duration: 6,
//                 ease: "easeInOut",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Video Background
"use client";

interface HeroProps {
  onOpenModal: () => void;
}

export function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className='relative h-[85vh] md:h-[80vh] overflow-hidden'>
      {/* Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-[-2]'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/assets/bgVid.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      {/* Semi-transparent Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]' />

      {/* Content Container */}
      <div className='container h-full flex items-center px-4'>
        <div className='w-full max-w-xl'>
          <h1 className='text-4xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6'>
            Clarity in Every Decision
          </h1>
          <p className='md:text-xl text-lg leading-relaxed text-white mt-6'>
            Meet Alfred, your AI-powered advisor delivering real-time insights
            from all your data. Make faster decisions, cut through the noise,
            and focus on what truly matters.
          </p>
          <div className='flex gap-1 items-center mt-8'>
            <button className='btn btn-primary' onClick={onOpenModal}>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
