'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/effect-fade';  
import 'swiper/css/pagination'; 
import 'swiper/css/navigation';  
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      ratingImage: '/assets/rating.svg',
      text: 'dMACQ DMS offers essential DMS features and more. Its unique architecture and design include user-configurable options, making it user-friendly and scalable. I particularly appreciated the master data management and contract management modules.',
      profileImage: '/assets/profile.svg',
      name: 'Tushar P.',
      position: 'Managing Director',
    },
    {
      ratingImage: '/assets/rating.svg',
      text: 'dMACQ DMS offers essential DMS features and more. Its unique architecture and design include user-configurable options, making it user-friendly and scalable. I particularly appreciated the master data management and contract management modules.',
      profileImage: '/assets/profile.svg',
      name: 'Sharad G.',
      position: 'Operation Manager • Bajaj Auto',
    },
    {
      ratingImage: '/assets/rating.svg',
      text: 'dMACQ DMS offers essential DMS features and more. Its unique architecture and design include user-configurable options, making it user-friendly and scalable. I particularly appreciated the master data management and contract management modules.',
      profileImage: '/assets/profile.svg',
      name: 'Sumesh A.',
      position: 'Operation Manager • Bajaj Auto',
    },
    {
      ratingImage: '/assets/rating.svg',
      text: 'dMACQ DMS offers essential DMS features and more. Its unique architecture and design include user-configurable options, making it user-friendly and scalable. I particularly appreciated the master data management and contract management modules.',
      profileImage: '/assets/profile.svg',
      name: 'Sumesh A.',
      position: 'Operation Manager • Bajaj Auto',
    },
  ];

  return (
    <div className="bg-[#FFDED4] w-full overflow-hidden lg:pl-8 px-4 lg:pr-0">
      <div className="w-full max-w-[1300px] mx-auto lg:ml-auto py-[64px] lg:py-[120px] text-center">
        <h3 className="text-[#CD3609] text-base md:text-lg leading-[19.2px] md:leading-[21.6px] font-bold tracking-[4px] uppercase">
          Testimonials
        </h3>
        <h1 className="text-dark text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-extrabold tracking-[-0.96px] mt-2">
          Hear What Our Clients Have to Say
        </h1>

        <div className="mt-16">
          <Swiper
            spaceBetween={30}   
            slidesPerView={3}  
            loop={true}  
            autoplay={{ delay: 5000 }} 
            className="testimonial-slider"
            breakpoints={{
              320: {
                slidesPerView: 1,   
                spaceBetween: 20,  
              },
              640: {
                slidesPerView: 1,   
                spaceBetween: 20,  
              },
              768: {
                slidesPerView:2,  
                spaceBetween: 30,   
              },
              1024: {
                slidesPerView: 2,   
                centeredSlides: true, 
                spaceBetween: 30,  
              },
              1184: {
                slidesPerView: 3,  
                centeredSlides: true, 
                spaceBetween: 30,   
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="overflow-hidden">
                  <div
                    className=" bg-white rounded-2xl p-8"
                    style={{ boxShadow: '0px 4px 4.7px 0px #7E22221A' }}
                  >
                    <Image
                      src={testimonial.ratingImage}
                      alt="rating"
                      width={192}
                      height={32}
                    />
                    <p className="my-6 text-[#192839] text-[16px] md:text-[18px] leading-[27px] font-normal text-left">
                      {testimonial.text}
                    </p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonial.profileImage}
                        alt="profile"
                        width={44}
                        height={44}
                      />
                      <div className="text-left">
                        <h2 className="text-[#40566D] text-[18px] leading-[21.6px] font-semibold mb-1">
                          {testimonial.name}
                        </h2>
                        <h4 className="text-[#58728D] text-[14px] leading-[16.8px] font-normal">
                          {testimonial.position}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;