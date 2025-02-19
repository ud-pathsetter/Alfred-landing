"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

// const testimonials = [
//   {
//     text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
//     imageSrc: avatar1.src,
//     name: "Jamie Rivera",
//     username: "@jamietechguru00",
//   },
//   {
//     text: "Our team's productivity has skyrocketed since we started using this tool. ",
//     imageSrc: avatar2.src,
//     name: "Josh Smith",
//     username: "@jjsmith",
//   },
//   {
//     text: "This app has completely transformed how I manage my projects and deadlines.",
//     imageSrc: avatar3.src,
//     name: "Morgan Lee",
//     username: "@morganleewhiz",
//   },
//   {
//     text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
//     imageSrc: avatar4.src,
//     name: "Casey Jordan",
//     username: "@caseyj",
//   },
//   {
//     text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
//     imageSrc: avatar5.src,
//     name: "Taylor Kim",
//     username: "@taylorkimm",
//   },
//   {
//     text: "The customizability and integration capabilities of this app are top-notch.",
//     imageSrc: avatar6.src,
//     name: "Riley Smith",
//     username: "@rileysmith1",
//   },
//   {
//     text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
//     imageSrc: avatar7.src,
//     name: "Jordan Patels",
//     username: "@jpatelsdesign",
//   },
//   {
//     text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
//     imageSrc: avatar8.src,
//     name: "Sam Dawson",
//     username: "@dawsontechtips",
//   },
//   {
//     text: "Its user-friendly interface and robust features support our diverse needs.",
//     imageSrc: avatar9.src,
//     name: "Casey Harper",
//     username: "@casey09",
//   },
// ];

const testimonials = [
  {
    text: "Being a COO means every minute counts, and Alfred has transformed my daily routine. With a simple question like 'What are my top priorities today?', I get instant, data-driven insights. It's streamlined our operations significantly.",
    imageSrc: avatar2.src,
    name: "Karthik Gupta",
    username: "COO, Quantify",
  },
  {
    text: "Alfred is like having a control tower for our entire company. With one query, I can track project timelines, monitor resources, and spot bottlenecks before they become roadblocks.",
    imageSrc: avatar3.src,
    name: "Deepak Chandran",
    username: "CEO, Consultant",
  },
  {
    text: "We integrated Alfred with our ERP, and it instantly streamlined our workflow. It's like having a data-savvy teammate on call.",
    imageSrc: avatar1.src,
    name: "Priya Gupta",
    username: "@priyagupta",
  },
  {
    text: "Alfred’s quick insights cut my decision-making time in half. Our team now focuses on what truly matters.",
    imageSrc: avatar4.src,
    name: "Rohan Sharma",
    username: "@rohansh",
  },
  {
    text: "Thanks to Alfred's real-time breakdowns, we caught a major supply chain bottleneck before it cost us big.",
    imageSrc: avatar8.src,
    name: "Aditi Patel",
    username: "@pateladiti",
  },
  {
    text: "Having Alfred is like having a business analyst who never sleeps. It keeps us on top of every opportunity.",
    imageSrc: avatar6.src,
    name: "Anjali Mehra",
    username: "@anjaliMehra",
  },
  {
    text: "Alfred transformed our daily stand-ups. We now start each day with actionable data and clear next steps.",
    imageSrc: avatar7.src,
    name: "Vivek Singh",
    username: "@vivekSingh",
  },
  {
    text: "Before Alfred, we juggled multiple reports. Now, everything is in one place—making decisions is a breeze.",
    imageSrc: avatar5.src,
    name: "Siddharth Verma",
    username: "@siddyv",
  },
  {
    text: "Alfred's user-friendly interface turned data analysis from a chore into a quick, insightful process.",
    imageSrc: avatar9.src,
    name: "Archit Thakur",
    username: "@archithakur",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className={twMerge("flex flex-col pt-10", props.className)}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name, username }) => (
              <div key={imageSrc} className='card my-5'>
                <div>{text}</div>
                <div className='flex items-center gap-2 mt-5'>
                  {/* <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className='h-10 w-10 rounded-full'
                  /> */}
                  <div className='flex flex-col'>
                    <div className='font-semibold tracking-tight leading-5'>
                      {name}
                    </div>
                    <div className='leading-5 tracking-tight'>{username}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section id='testimonials' className='bg-white'>
      <div className='container'>
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Testimonials</div>
          </div>
          <h2 className='section-title mt-5'>What Business Leaders Say</h2>
          <p className='section-description mt-5'>
            From real-time insights to round-the-clock advisory, Alfred
            transforms how decisions are made. Discover how leaders leverage
            Alfred for success.
          </p>
        </div>
        <div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden'>
          <TestimonialsColumn
            testimonials={firstColumn}
            duration={15}
            className='block'
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            className='hidden md:block'
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className='hidden lg:block'
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
