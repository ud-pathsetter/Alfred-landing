"use client";

import Image from "next/image";

// Example image imports - Replace with your actual image paths
import Gallery1 from "@/assets/gallery1.jpeg";
import Gallery2 from "@/assets/gallery2.jpeg";
import Gallery3 from "@/assets/gallery3.jpeg";
import Gallery4 from "@/assets/gallery4.jpeg";
import Gallery5 from "@/assets/gallery7.jpeg";
import Gallery6 from "@/assets/gallery6.jpeg";
import Gallery7 from "@/assets/gallery7.jpeg";

export const ImageGallery = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='container'>
        {/* Section Title */}
        <div className='text-center mb-10'>
          <div className='flex justify-center'>
            <div className='tag'>Watch us Grow</div>
          </div>
          <h2
            className='section-title mt-5 tracking-wider'
            style={{ fontFamily: "Mokoto" }}
          >
            Our Gallery
          </h2>
          <p className='section-description mt-5'>
            A collection of stunning visuals that represent our journey and
            inspiration
          </p>
        </div>

        {/* Masonry Grid Gallery */}
        <div className='grid gap-4 grid-cols-3 auto-rows-[200px] md:auto-rows-[300px] lg:auto-rows-[350px]'>
          {/* Large Image */}
          <div className='relative col-span-2 row-span-2'>
            <Image
              src={Gallery1}
              alt='Gallery Image 1'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>

          <div className='relative'>
            <Image
              src={Gallery2}
              alt='Gallery Image 2'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>

          <div className='relative'>
            <Image
              src={Gallery3}
              alt='Gallery Image 3'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>

          {/* Another Large Image */}
          <div className='relative col-span-2'>
            <Image
              src={Gallery4}
              alt='Gallery Image 4'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>

          <div className='relative'>
            <Image
              src={Gallery5}
              alt='Gallery Image 5'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>

          {/* Wide Image at the Bottom */}
          <div className='relative col-span-3'>
            <Image
              src={Gallery6}
              alt='Gallery Image 6'
              fill
              className='object-cover w-full h-full rounded-lg'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
