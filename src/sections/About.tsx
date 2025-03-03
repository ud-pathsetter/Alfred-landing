"use client";

import Image from "next/image";
// import Team1 from "@/assets/team1.jpg";
// import Team2 from "@/assets/team2.jpg";
// import Team3 from "@/assets/team3.jpg";
import CEO from "@/assets/CEO.jpeg";

export const About = () => {
  return (
    <section
      id='team'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip mb-10'
    >
      <div className='container'>
        {/* Vision Section */}
        <div className='section-heading'>
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

        {/* Team Members */}
        <div className='mt-12'>
          <h3 className='font-bold text-xl text-center'>Meet the Team</h3>
          <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-3 grid-cols-1 mt-5'>
            {/* CEO with image */}
            <div className='flex flex-col items-center'>
              {/* <Image
                src={CEO}
                alt='CEO'
                width={120}
                height={120}
                className='rounded-full'
              /> */}
              <h4 className='mt-2 font-semibold'>Sridhar Gadhi</h4>
              <p className='text-sm text-gray-600'>
                Founder & Managing Director
              </p>
            </div>

            {/* Others: text only */}
            <div className='flex flex-col items-center justify-center'>
              <h4 className='font-semibold'>Manohar Varanasi</h4>
              <p className='text-sm text-gray-600'>
                Sr. Vice President, Global Delivery
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='font-semibold'>Srikar Chintalagiri</h4>
              <p className='text-sm text-gray-600'>Chief Operating Officer</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='font-semibold'>Nitisha Baalay</h4>
              <p className='text-sm text-gray-600'>
                Vice President, Business Operations & HR
              </p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='font-semibold'>Guhan Ashok</h4>
              <p className='text-sm text-gray-600'>Product Management Lead</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h4 className='font-semibold'>Chiru Harsh Patnam</h4>
              <p className='text-sm text-gray-600'>Chief Strategy Officer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
