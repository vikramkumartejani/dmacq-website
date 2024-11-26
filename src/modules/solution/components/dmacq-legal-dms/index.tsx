import Image from "next/image";
import React from "react";
import Link from "next/link";

type UseCase = {
  image: string;
  title: string;
  description: string;
  link: string;
  alt: string;
};

const DMACQLegalDMS: React.FC = () => {
  const useCases: UseCase[] = [
    {
      image: "/assets/solution/admission-processes.svg",
      title: "Admission Processes",
      description:
        "The DMS software provides a centralized location for all contracts, making it easy to store, access, and manage them.",
      link: "/admission-processes",
      alt: "Admission Processes",
    },
    {
      image: "/assets/solution/staff-collaboration.svg",
      title: "Staff Collaboration",
      description:
        "The DMS software provides a centralized location for all contracts, making it easy to store, access, and manage them. The DMS software provides a centralized location for all contracts, making it easy to store, access, and manage them.",
      link: "/staff-collaboration",
      alt: "Staff Collaboration",
    },
    {
      image: "/assets/solution/regulatory-compliance.svg",
      title: "Regulatory Compliance",
      description:
        "The DMS software provides a centralized location for all contracts, making it easy to store, access, and manage them.",
      link: "/regulatory-compliance",
      alt: "Regulatory Compliance",
    },
  ];

  return (
    <div className="w-full md:px-8 px-4 pt-[64px] pb-[48px] md:py-[94px] bg-mint-cream">
      <div className="text-center max-w-[1184px] mx-auto w-full">
        <h3 className="text-green-600 text-base md:text-lg leading-[19.2px] md:leading-[21.6px] font-semibold md:font-bold tracking-[4px]">
          USE CASES
        </h3>
        <h1 className="text-dark text-[28px] md:text-[36px] leading-[33.6px] md:leading-[43.2px] font-extrabold tracking-[-0.96px] mt-2">
          dMACQ Legal DMS
        </h1>

        <div className="mt-12 md:mt-16 flex gap-6 overflow-x-auto scrollbar-none h-full items-stretch">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  flex flex-col min-w-[312px] max-w-[378px] flex-grow"
              style={{ boxShadow: "0px 4px 22.1px 0px #2243B61A" }}
            >
              <Image
                src={useCase.image}
                draggable="false"
                alt={useCase.alt}
                width={378}
                height={224}
                className="rounded-t-lg w-full h-[224px] object-cover"
              />
              <div className="p-6 flex flex-col items-start flex-grow">
                <h2 className="text-dark font-bold md:font-extrabold text-[20px] md:text-[24px] leading-[24px] md:leading-[28.8px] tracking-[-0.95px]">
                  {useCase.title}
                </h2>
                <p className="mt-3 text-primary text-lg leading-[30.6px] font-normal text-left tracking-[-0.4px] flex-grow">
                  {useCase.description}
                </p>
                <Link href={useCase.link}>
                  <button className="mt-2 h-[48px] w-full flex items-center justify-center gap-2 text-green-700 text-base font-semibold leading-[21.79px]">
                    Know more
                    <Image
                      src="/assets/solution/icons/arrow-right.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DMACQLegalDMS;
