"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface LeadMagnetProps {
  onOpenModal?: () => void;
}

const LeadMagnet = ({ onOpenModal }: LeadMagnetProps) => {
  // Add aria-label for better accessibility
  return (
    <section 
      id="lead-magnet" 
      className="bg-gradient-to-b from-[#fff] to-[#d2ffec] py-16 overflow-x-clip mb-10"
      aria-label="Industry Assessment Survey"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-xl border border-[#222222]/10">
          {/* Lead Magnet Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center">
              <div className="tag">Free Assessment</div>
            </div>
            <h2 className="section-title mt-5">Industry Readiness Survey</h2>
            <p className="section-description mt-5">
              Discover where your business stands in the industry and receive personalized recommendations to improve your performance.
            </p>
          </div>

          {/* Lead Magnet Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f0f8ff] p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#007bff]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Benchmark Your Business</h3>
              <p className="text-gray-600 text-sm">See how your company compares to industry leaders and competitors</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f0f8ff] p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#007bff]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Identify Growth Opportunities</h3>
              <p className="text-gray-600 text-sm">Discover key areas where your business can improve and expand</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#f0f8ff] p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#007bff]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2">Get Custom Recommendations</h3>
              <p className="text-gray-600 text-sm">Receive a personalized action plan based on your unique situation</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link href="/survey" className="btn btn-primary inline-flex items-center gap-2">
              Take the Free Assessment
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;