// // Video Background
// "use client";

// interface HeroProps {
//   onOpenModal: () => void;
// }

// export function Hero({ onOpenModal }: HeroProps) {
//   return (
//     <section className='relative h-[85vh] md:h-[80vh] overflow-hidden'>
//       {/* Background Video */}
//       <video
//         className='absolute top-0 left-0 w-full h-full object-cover z-[-2]'
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src='/assets/bgVid2.mp4' type='video/mp4' />
//         Your browser does not support the video tag.
//       </video>

//       {/* Semi-transparent Overlay */}
//       <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]' />

//       {/* Content Container */}
//       <div className='container h-full flex items-center px-4'>
//         <div className='w-full max-w-xl'>
//           <h1 className='text-4xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6'>
//             Clarity in Every Decision
//           </h1>
//           <p className='md:text-xl text-lg leading-relaxed text-white mt-6'>
//             Meet Alfred, your AI-powered advisor delivering real-time insights
//             from all your data. Make faster decisions, cut through the noise,
//             and focus on what truly matters.
//           </p>
//           <div className='flex gap-1 items-center mt-8'>
//             <button className='btn btn-primary' onClick={onOpenModal}>
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// Flip text
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroProps {
  onOpenModal: () => void;
}

const items = [
  {
    id: 1,
    heading: "Clarity in Every Decision",
    subHeading:
      "Meet Alfred, your AI-powered advisor delivering real-time insights from all your data. Make faster decisions, cut through the noise, and focus on what truly matters.",
  },
  {
    id: 2,
    heading: "Optimize Business Functions",
    subHeading:
      "Streamline processes across HR, Sales, Finance, and beyond—boosting efficiency and delivering real results.",
  },
];

export function Hero({ onOpenModal }: HeroProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => (state >= items.length - 1 ? 0 : state + 1));
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className='relative h-[85vh] md:h-[80vh] overflow-hidden flex items-center'>
      {/* Background Video */}
      <video
        className='absolute top-0 left-0 w-full h-full object-cover z-[-2]'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src='/assets/bgVid2.mp4' type='video/mp4' />
      </video>

      {/* Semi-transparent Overlay */}
      <div className='absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]' />

      {/* Content Container */}
      <div className='container flex items-center px-4'>
        <div className='w-full max-w-2xl'>
          <div className='relative'>
            {/* ✅ Wrap the animated text */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={items[index].id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ ease: "easeInOut" }}
              >
                <h1 className='text-4xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-gray-300 text-transparent bg-clip-text mt-6'>
                  {items[index].heading}
                </h1>
                <p className='md:text-xl text-lg leading-relaxed text-white mt-6'>
                  {items[index].subHeading}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ✅ Button is now positioned correctly below the text */}
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
