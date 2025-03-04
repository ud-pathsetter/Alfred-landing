"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import report1 from "@/assets/report1.png";
import report2 from "@/assets/report2.png";
import report3 from "@/assets/report3.png";
import report4 from "@/assets/report4.png";
import report5 from "@/assets/report5.png";

const articles = [
  {
    date: "Jan 20, 2025",
    title: "AI-Designed 3D-Printed Shoes",
    description:
      "A groundbreaking approach to footwear using generative AI and advanced 3D printing.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/c4edb624-0004-4fe6-a91e-c6b7f0d71980/AI_shoe.png",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-ai-designed-3d-printed-shoes",
  },
  {
    date: "Jan 20, 2025",
    title: "The Stargate Project",
    description:
      "Pioneering new frontiers with AI-driven teleportation prototypes.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/cb2ca4d0-3ead-4108-9923-b56d7f33fb6f/Stargate_Header_New.jpg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-the-stargate-project",
  },
  {
    date: "Jan 20, 2025",
    title: "Building a Smarter Hiring Pipeline",
    description:
      "Revolutionizing recruitment processes with data-driven insights.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/4adb8478-5b64-4cd6-939f-e25ad01cfd47/images-4.jpeg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-building-a-smarter-hiring-pipeline",
  },
  {
    date: "Jan 20, 2025",
    title: "Revolutionizing Recruitment",
    description: "How AI is finding the right talent faster and smarter.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/b14882a5-f9d4-452c-9c3e-db65b225153b/IMG_0020.jpeg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-revolutionizing-recruitment",
  },
  {
    date: "Jan 20, 2025",
    title: "The Blueprint of Hyper-Personalization",
    description:
      "Delivering unique experiences to each user through AI-driven insights.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/8deea47c-d077-42d9-8d35-5194b0df8f0f/hyper-personalization.jpeg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-the-blueprint-of-hyper-personalization",
  },
  {
    date: "Jan 20, 2025",
    title: "Hyper-Personalization with AI",
    description: "A game-changer for marketing and user engagement.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/publication/logo/42972ad1-f926-4363-9625-c281239cac0c/pathsetterai_logo.jpeg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-hyper-personalization-with-ai",
  },
  {
    date: "Jan 20, 2025",
    title: "Redefining Diagnostics",
    description:
      "Harnessing AI to improve diagnostic accuracy and speed in healthcare.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/4fa57659-c33e-408f-8231-943c467b6b84/healthcare-workers-ai-1359494953.jpg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-redefining-diagnostics",
  },
  {
    date: "Jan 20, 2025",
    title: "From Pixels to Progress",
    description:
      "How computer vision is transforming industries from manufacturing to retail.",
    image:
      "https://media.beehiiv.com/cdn-cgi/image/format=auto,width=800,height=421,fit=scale-down,onerror=redirect/uploads/asset/file/4b5c6ff9-7b78-4857-9e63-c8d55601d323/aaaaaaaaa.jpeg",
    link: "https://pathsetters-newsletter.beehiiv.com/p/essentialai-from-pixels-to-progress",
  },
];

const pdfReports = [
  {
    title: "Finance Industry AI Readiness Report",
    description: "A comprehensive overview of market shifts and opportunities.",
    pdfLink: "/pdfs/Finance Industry_AI Readiness Report.pdf",
    thumbnail: report1,
  },
  {
    title: "Pharma Industry AI Readiness Report",
    description: "Insights from 1000+ companies on AI adoption strategies.",
    pdfLink: "/pdfs/Pharma Industry_AI Readiness Report.pdf",
    thumbnail: report2,
  },
  {
    title: "QSR Industry AI Readiness Report",
    description: "Best practices and frameworks for managing remote teams.",
    pdfLink: "/pdfs/QSR Industry_AI Readiness Report.pdf",
    thumbnail: report3,
  },
  {
    title: "Retail Industry AI Readiness Report",
    description: "Key data protection measures for modern organizations.",
    pdfLink: "/pdfs/Retail Industry_AI Readiness Report.pdf",
    thumbnail: report4,
  },
  {
    title: "Ridesharing Industry AI Readiness Report",
    description: "Key data protection measures for modern organizations.",
    pdfLink: "/pdfs/Ridesharing Industry_AI Readiness Report.pdf",
    thumbnail: report5,
  },
];

export const Resources = () => {
  return (
    <section
      id='resources'
      className='bg-gradient-to-b from-[#fff] to-[#d2ffec] py-24 overflow-x-clip mb-10'
    >
      <div className='container'>
        {/* Section Heading */}
        <div className='section-heading'>
          <div className='flex justify-center'>
            <div className='tag'>Learn & Grow</div>
          </div>
          <h2
            className='section-title mt-5 tracking-wider'
            style={{ fontFamily: "Mokoto" }}
          >
            Insights
          </h2>
          <p className='section-description mt-5'>
            Stay ahead of the curve with our curated articles and detailed
            industry reports.
          </p>
        </div>

        {/* Articles Grid with Image Styling */}
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12'>
          {articles.map((article, index) => (
            <div
              key={index}
              className='bg-white rounded-xl shadow-xl border flex flex-col overflow-hidden h-[450px]'
            >
              {/* Top Half: Image */}
              <div className='relative h-1/2 w-full'>
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className='object-cover'
                />
              </div>

              {/* Bottom Half: Content */}
              <div className='flex flex-col h-1/2 p-4 text-left justify-between'>
                <div>
                  <span className='text-xs text-gray-500 block'>
                    {article.date}
                  </span>
                  <h3 className='text-base md:text-lg font-semibold text-gray-800 mt-2'>
                    {article.title}
                  </h3>
                  <p className='text-sm text-gray-600 mt-2'>
                    {article.description}
                  </p>
                </div>
                <div className='mt-2'>
                  <Link href={article.link}>
                    <span className='text-sm font-medium text-blue-600 hover:underline'>
                      Read More
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* PDF Reports Carousel */}
        <div className='mt-16'>
          <h3 className='font-bold text-xl mb-5'>Industry Reports</h3>
          <Carousel
            plugins={[
              Autoplay({
                delay: 8000,
              }),
            ]}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {pdfReports.map((report, idx) => (
                <CarouselItem className='md:basis-1/2 lg:basis-1/3' key={idx}>
                  <div className='bg-white py-10 md:px-14 px-8 rounded-xl shadow-xl text-center border mx-2 w-[300px] h-full flex flex-col items-center'>
                    {report.thumbnail && (
                      <Image
                        src={report.thumbnail}
                        alt={report.title}
                        width={200}
                        height={200}
                        className='object-contain mb-4'
                      />
                    )}
                    <h4 className='font-semibold text-lg'>{report.title}</h4>
                    {/* <p className='text-sm text-gray-600 mt-2'>
                      {report.description}
                    </p> */}
                    <Link
                      href={report.pdfLink}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <span className='mt-4 text-blue-600 hover:underline text-sm font-medium'>
                        View PDF
                      </span>
                    </Link>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
