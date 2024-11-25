import Image from "next/image";
import React from "react";

const DocumentManagement = () => {
  const aiSolutionsData = [
    {
      title: "AI-Powered Auto-Tagging",
      description:
        "Automatically classify and organize documents with intelligent tagging that adapts to your content, enhancing retrieval speed and accuracy",
      imageSrc: "/assets/ai-powered-dms.svg",
      imageAlt: "AI-Powered DMS",
    },
    {
      title: "AI-Powered Retrieval",
      description:
        "Effortlessly locate documents with advanced search capabilities that utilize AI algorithms for precise and rapid access to relevant information",
      imageSrc: "/assets/ai-powered-forms.svg",
      imageAlt: "AI-Powered Forms",
    },
    {
      title: "AI-Powered Analytics",
      description:
        "Utilize AI-driven reports to identify missing documents and generate analyses, improving decision-making and optimizing document management",
      imageSrc: "/assets/ai-powered-flow.svg",
      imageAlt: "AI-powered Flow",
    },
  ];

  return (
    <div className="bg-[#0C1927] w-full text-white pb-[74px] lg:px-8 px-4">
      <div className="w-full max-w-[1184px] mx-auto">
        <div className="flex items-center justify-between lg:flex-row flex-col gap-8 lg:gap-10">
          <div className="lg:max-w-[475px] pt-[64px] lg:pt-0">
            <h1 className="text-[#FFFFFFE5] text-[28px] md:text-[40px] leading-[33.6px] md:leading-[48px] font-extrabold tracking-[-0.96px]">
              Document Management made easy with{" "}
              <span className="text-[#FF7A1A]"> AI</span>
            </h1>
            <p className="text-[#90A5BB] text-[16px] leading-[27px] md:text-[18px] md:leading-[30px] tracking-[-0.4px] font-medium mt-2">
              Leverage the power of AI to automate and optimize your document
              management processes, ensuring seamless organization, quick
              retrieval and improved collaboration across your team
            </p>
          </div>
          <div>
            <Image
              src="/assets/image 70.png"
              alt="ai-solutions"
              width={699}
              height={452}
              className="bg-image"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {aiSolutionsData.map((solution, index) => (
            <div key={index} className="bg-[#192839] rounded-lg p-6 md:p-8">
              <Image
                src={solution.imageSrc}
                alt={solution.imageAlt}
                width={56}
                height={56}
              />
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

export default DocumentManagement;
