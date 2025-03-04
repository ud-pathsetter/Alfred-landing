"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Example images
import Team1 from "@/assets/team1.jpg.webp";
import Team2 from "@/assets/team2.jpg";
import Team3 from "@/assets/team3.jpeg";
import Team4 from "@/assets/team4.jpeg";
import Team5 from "@/assets/team5.jpeg";

export const Team = () => {
  return (
    <section
      id='team'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip mb-10'
    >
      <div className='container'>
        {/* Updated Heading: Larger, matching other sections */}
        <h2
          className='section-title tracking-wider text-center'
          style={{ fontFamily: "Mokoto" }}
        >
          MEET THE TEAM
        </h2>

        {/* Ticker Container */}
        <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-8'>
          <motion.div
            className='flex gap-14 flex-none pr-14'
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {/* First set of items */}
            <div className='flex gap-14'>
              {/* Member 1 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team1}
                    alt='Sridhar Gadhi'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Sridhar Gadhi</h4>
                <p className='text-sm text-gray-600'>
                  Founder &amp; Managing Director
                </p>
              </div>

              {/* Member 2 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team2}
                    alt='Manohar Varanasi'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Manohar Varanasi</h4>
                <p className='text-sm text-gray-600'>
                  Sr. Vice President, Global Delivery
                </p>
              </div>

              {/* Member 3 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team3}
                    alt='Srikar Chintalagiri'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Srikar Chintalagiri</h4>
                <p className='text-sm text-gray-600'>Chief Operating Officer</p>
              </div>

              {/* Member 4 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team5}
                    alt='Nitisha Baalay'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Nitisha Baalay</h4>
                <p className='text-sm text-gray-600'>
                  Vice President, Business Operations &amp; HR
                </p>
              </div>

              {/* Member 5 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team4}
                    alt='Guhan Ashok'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Guhan Ashok</h4>
                <p className='text-sm text-gray-600'>Product Management Lead</p>
              </div>
            </div>

            {/* Second set of items (identical for seamless scrolling) */}
            <div className='flex gap-14'>
              {/* Member 1 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team1}
                    alt='Sridhar Gadhi'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Sridhar Gadhi</h4>
                <p className='text-sm text-gray-600'>
                  Founder &amp; Managing Director
                </p>
              </div>

              {/* Member 2 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team2}
                    alt='Manohar Varanasi'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Manohar Varanasi</h4>
                <p className='text-sm text-gray-600'>
                  Sr. Vice President, Global Delivery
                </p>
              </div>

              {/* Member 3 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team3}
                    alt='Srikar Chintalagiri'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Srikar Chintalagiri</h4>
                <p className='text-sm text-gray-600'>Chief Operating Officer</p>
              </div>

              {/* Member 4 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team5}
                    alt='Nitisha Baalay'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Nitisha Baalay</h4>
                <p className='text-sm text-gray-600'>
                  Vice President, Business Operations &amp; HR
                </p>
              </div>

              {/* Member 5 */}
              <div className='flex flex-col items-center'>
                <div className='relative w-40 h-40 rounded-full overflow-hidden'>
                  <Image
                    src={Team4}
                    alt='Guhan Ashok'
                    fill
                    className='object-cover'
                  />
                </div>
                <h4 className='mt-3 font-semibold'>Guhan Ashok</h4>
                <p className='text-sm text-gray-600'>Product Management Lead</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
