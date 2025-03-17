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
            At Pathsetter AI, our mission is to make AI truly useful for
            organizations—the driving force behind progress, innovation, and
            global collaboration. We harness technology, from automation to data
            insights, to build accessible, practical solutions that enhance
            productivity and enable smarter decision-making.
          </p>
          {/* <p className='section-description mt-5'>
            Technology has always played a crucial role in helping organizations
            grow, adapt, and deliver more value. From automation to data-driven
            insights, the right tools can make businesses more efficient,
            responsive, and innovative. At Pathsetter AI, we believe in building
            technology that is accessible, practical, and seamlessly integrates
            into the way organizations work. Our focus is on creating solutions
            that enhance productivity, support smarter decision-making, and help
            businesses stay ahead in an ever-evolving world.
          </p> */}
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
                <strong className='font-semibold'>Responsible AI: </strong> We
                develop ethical, transparent AI that ensures fairness, security,
                and accountability.
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
                <strong className='font-semibold'>Speed with Purpose: </strong>
                We innovate with agility and clear direction, aligning our
                solutions with business needs.
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
                <strong className='font-semibold'>Outcome-Driven: </strong> We
                prioritize measurable results, from optimizing efficiency to
                driving growth and unlocking new opportunities.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
