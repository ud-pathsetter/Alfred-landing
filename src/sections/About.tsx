"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const About = () => {
  return (
    <section
      id='about'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip mb-10'
    >
      <div className='container'>
        {/* Vision Section */}
        <div className='section-heading w-full max-w-4xl mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Pathsetter Vision</div>
          </div>
          <h2
            className='section-title mt-5 tracking-wider'
            style={{ fontFamily: "Mokoto" }}
          >
            PATHSETTER
          </h2>
          <h2 className='section-title mt-5'>
            Charting the Future of Innovation
          </h2>
          <p className='section-description mt-5'>
            At Pathsetter AI, we started with a singular mission: to make AI
            truly useful for organizations. We believe that organizations are
            the cornerstone of progress—microcosms of society that sustain
            economies, drive innovation, and enable global collaboration. They
            are not just entities; they are the beating heart of industries,
            communities, and the future we envision.
          </p>
          <p className='section-description mt-5'>
            Technology has always played a crucial role in helping organizations
            grow, adapt, and deliver more value. From automation to data-driven
            insights, the right tools can make businesses more efficient,
            responsive, and innovative. At Pathsetter AI, we believe in building
            technology that is accessible, practical, and seamlessly integrates
            into the way organizations work. Our focus is on creating solutions
            that enhance productivity, support smarter decision-making, and help
            businesses stay ahead in an ever-evolving world.
          </p>
        </div>

        {/* Our Values */}
        <div className='mt-12'>
          <h3 className='font-bold text-xl'>Our Values</h3>
          <p className='mt-4 text-base'>
            At Pathsetter AI, our values guide everything we do, from the
            technology we build to the partnerships we cultivate:
          </p>

          {/* Icon-based list */}
          <ul className='space-y-6 mt-6 text-base text-gray-700'>
            <li className='flex items-start gap-3'>
              {/* Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-green-600 flex-shrink-0 mt-[2px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 12c0 5.385-4.365 9.75-9.75 
                    9.75S2.25 17.385 2.25 12 6.615 2.25 
                    12 2.25 21.75 6.615 21.75 12z'
                />
              </svg>

              <div>
                <strong className='font-semibold'>Responsible AI</strong> – We
                are committed to developing AI solutions that are ethical,
                transparent, and designed to create positive impact. We believe
                AI should serve organizations responsibly, ensuring fairness,
                security, and accountability in every solution we provide.
              </div>
            </li>

            <li className='flex items-start gap-3'>
              {/* Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-green-600 flex-shrink-0 mt-[2px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 12c0 5.385-4.365 9.75-9.75 
                    9.75S2.25 17.385 2.25 12 6.615 2.25 
                    12 2.25 21.75 6.615 21.75 12z'
                />
              </svg>

              <div>
                <strong className='font-semibold'>Speed with Purpose</strong> –
                Innovation thrives on agility. We move fast, but with a clear
                sense of direction, ensuring that our solutions are not just
                quick to deploy but also well-aligned with business needs and
                industry standards. Our speed is driven by intent—helping
                organizations adapt and stay ahead in an evolving landscape.
              </div>
            </li>

            <li className='flex items-start gap-3'>
              {/* Icon */}
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6 text-green-600 flex-shrink-0 mt-[2px]'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M9 12.75 11.25 15 15 9.75'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21.75 12c0 5.385-4.365 9.75-9.75 
                    9.75S2.25 17.385 2.25 12 6.615 2.25 
                    12 2.25 21.75 6.615 21.75 12z'
                />
              </svg>

              <div>
                <strong className='font-semibold'>
                  Outcome-Driven Approach
                </strong>{" "}
                – Results matter. Our focus is always on delivering measurable
                outcomes for our customers. Whether it’s optimizing efficiency,
                driving revenue growth, or unlocking new opportunities, we
                prioritize solutions that make a tangible difference.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
