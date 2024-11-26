import Image from 'next/image';
import React from 'react';

const UnlockingEfficiency = () => {
  const aiSolutionsData = [
    {
      title: 'AI-Powered DMS +',
      description: 'A smart solution that leverages artificial intelligence to enhance document organization, retrieval, and security for efficient information management',
      imageSrc: '/assets/ai-powered-dms.svg',
      imageAlt: 'AI-Powered DMS',
    },
    {
      title: 'AI-Powered Forms +',
      description: 'A smart solution that leverages artificial intelligence to enhance document organization, retrieval, and security for efficient information management',
      imageSrc: '/assets/ai-powered-forms.svg',
      imageAlt: 'AI-Powered Forms',
    },
    {
      title: 'AI-powered Flow +',
      description: 'An automated system that optimizes complex business processes by using AI to streamline tasks, enhance collaboration, and improve overall efficiency',
      imageSrc: '/assets/ai-powered-flow.svg',
      imageAlt: 'AI-powered Flow',
    },
  ];

  return (
    <div className="bg-[#0C1927] w-full text-white pb-[74px] lg:px-8 px-4">
      <div className="w-full max-w-[1184px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-8 lg:gap-10">
          <div className="lg:max-w-[475px] pt-[64px] lg:pt-0">
            <h1 className="text-[#FFFFFFE5] text-[28px] md:text-[40px] leading-[33.6px] md:leading-[48px] font-extrabold tracking-[-0.96px]">
              Unlocking Efficiency with <span className="text-[#FF7A1A]">AI Solutions</span>
            </h1>
            <p className="text-[#90A5BB] text-[16px] leading-[27px] md:text-[18px] md:leading-[30px] tracking-[-0.4px] font-medium mt-2">
              Transforming document management, data collection, and business processes through AI for enhanced accuracy, streamlined workflows, and improved organizational effectiveness
            </p>
          </div>
          <div>
            <Image src="/assets/image 70.png" draggable='false' alt="ai-solutions" width={699} height={452} className="bg-image" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {aiSolutionsData.map((solution, index) => (
            <div key={index} className="bg-[#192839] rounded-lg p-6 md:p-8">
              <Image src={solution.imageSrc} alt={solution.imageAlt} draggable='false' width={56} height={56} />
              <h1 className="text-[#F1F5FA] text-[18px] md:text-[20px] leading-[28px] font-bold mb-2 mt-5">
                {solution.title}
              </h1>
              <p className="text-[#B1C1D2] text-[16px] leading-[21.79px] font-medium">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnlockingEfficiency;
