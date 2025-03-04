"use client";

import React from "react";

export const CyberSecurity = () => {
  return (
    <section
      id='cyber-security'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip mb-10'
    >
      <div className='container'>
        {/* Section Heading */}
        <div className='section-heading w-full max-w-3xl mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Robust & Trusted</div>
          </div>
          <h2
            className='section-title mt-5 tracking-wider '
            style={{ fontFamily: "Mokoto" }}
          >
            Commitment Towards Security
          </h2>
          <h2 className='section-title mt-5'>
            Securing Your Data, Empowering Your Business
          </h2>
          <p className='section-description mt-5'>
            Our advanced security measures protect your data and build lasting
            trust:
          </p>
        </div>

        {/* Cyber Security List */}
        <div className='mt-12'>
          <ul className='space-y-6 text-base text-gray-700'>
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
                <strong className='font-semibold'>Fortified Access</strong> –
                Role-based controls with multi-factor authentication ensure only
                authorized users gain access.
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
                  Proactive Threat Defense
                </strong>{" "}
                – Cutting-edge threat monitoring, isolated deployments, and
                redundant systems guard against evolving risks.
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
                  Impenetrable Data Protection
                </strong>{" "}
                – AES-256 encryption and secure data pipelines keep your
                information safe in transit and at rest.
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
                <strong className='font-semibold'>Continuous Vigilance</strong>{" "}
                – Regular vulnerability assessments and rigorous security
                reviews mean we stay one step ahead.
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
                  Industry-Leading Standards
                </strong>{" "}
                – We follow the NIST Secure Software Development Framework and
                MITRE ATT&amp;CK best practices to secure every facet of our
                technology.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
