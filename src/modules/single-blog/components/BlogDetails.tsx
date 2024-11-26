"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const BlogDetails = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "overview",
        "archivalofdocuments",
        "realtimeDocumentaccess",
        "documentaggregation",
        "conclusion",
      ];

      let currentSection = "overview";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = section;
            break;
          }
        }
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <div className="lg:px-8 px-4">
      <div className="w-full max-w-[1184px] mx-auto">
        <div className="flex items-start justify-between gap-5">
          {/* Sections */}
          <div className="lg:max-w-[744px] mt-[33px] mb-[64px] md:mb-[140px] flex flex-col ">
            {/* Overview */}
            <div id="overview" className="pt-[40px] lg:pt-[72px] ">
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                Managing documents efficiently is a core requirement for any HR
                department. A Human Resources Document Management System (HRDMS)
                helps organizations streamline the handling of digital
                documents—whether it's through electronic workflows, document
                search and retrieval or converting physical records into digital
                format. With various legal and compliance regulations, HR
                departments often need specialized HR document management
                software to handle the vast amounts of data.
              </p>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal mt-6">
                In this blog, we will explore three key use cases where an HR
                electronic filing system becomes indispensable: archival,
                real-time document access and document aggregation.
              </p>
            </div>

            {/* Archival of Documents */}
            <div id="archivalofdocuments" className="pt-[40px] lg:pt-[72px]">
              <h1 className="text-dark text-[20px] md:text-[24px] leading-[26px] md:leading-[24px] font-bold mb-2">
                1. Archival of Documents
              </h1>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                One major use case for HR employee file management software is
                archival. The HR filing system serves as a repository for
                documents not needed daily such as employee records of former
                employees, tax documents and completed contracts. Often, these
                documents are stored in paper form and must be converted using
                an HR electronic file management system. Once digitized, they
                can be easily stored and accessed using employee records
                management software.
              </p>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal mt-6">
                Even when documents are digital, they may be scattered across
                network drives or buried in systems like an ERP making them hard
                to locate. HR document storage solutions such as the best HR
                document management software pull these documents into a
                centralized HR document management system where they can be
                indexed and retrieved quickly.
              </p>
              <Image
                src="/assets/blogs/single-blog-post.svg"
                alt="single-blog-post"
                width={744}
                draggable='false'
                height={366}
                className="my-12"
              />
              <h2 className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                <span className="font-bold text-dark">Example:</span> Many
                organizations use HR document software to securely archive
                employee files, tax filings and other sensitive information.
              </h2>
            </div>

            {/* Real-time Document Access */}
            <div id="realtimeDocumentaccess" className="pt-[40px] lg:pt-[72px]">
              <h1 className="text-dark text-[20px] md:text-[24px] leading-[26px] md:leading-[24px] font-bold mb-2">
                2. Real-time Document Access
              </h1>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                One major use case for HR employee file management software is
                archival. The HR filing system serves as a repository for
                documents not needed daily such as employee records of former
                employees, tax documents and completed contracts. Often, these
                documents are stored in paper form and must be converted using
                an HR electronic file management system. Once digitized, they
                can be easily stored and accessed using employee records
                management software.
              </p>
              <Image
                src="/assets/blogs/single-blog-post.svg"
                alt="single-blog-post"
                width={744}
                height={366}
                className="my-12"
              />
              <h2 className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                <span className="font-bold text-dark">Example:</span> Many
                organizations use HR document software to securely archive
                employee files, tax filings and other sensitive information.
              </h2>
            </div>

            {/* Document Aggregation */}
            <div id="documentaggregation" className="pt-[40px] lg:pt-[72px]">
              <h1 className="text-dark text-[20px] md:text-[24px] leading-[26px] md:leading-[24px] font-bold mb-2">
                3. Document Aggregation
              </h1>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                One major use case for HR employee file management software is
                archival. The HR filing system serves as a repository for
                documents not needed daily such as employee records of former
                employees, tax documents and completed contracts. Often, these
                documents are stored in paper form and must be converted using
                an HR electronic file management system. Once digitized, they
                can be easily stored and accessed using employee records
                management software.
              </p>
              <Image
                src="/assets/blogs/single-blog-post.svg"
                alt="single-blog-post"
                width={744}
                height={366}
                className="my-12"
              />
              <h2 className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                <span className="font-bold text-dark">Example:</span> Many
                organizations use HR document software to securely archive
                employee files, tax filings and other sensitive information.
              </h2>
            </div>

            {/* Conclusion */}
            <div id="conclusion" className="pt-[40px] lg:pt-[72px]">
              <h1 className="text-dark text-[20px] md:text-[24px] leading-[26px] md:leading-[24px] font-bold mb-2">
                Conclusion
              </h1>
              <p className="text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                A robust human resources electronic document management system
                not only simplifies document handling but ensures compliance and
                enhances operational efficiency. Whether it's for archival,
                real-time processing or document aggregation, the right HR
                employee file management software can streamline the process and
                support the organization’s digital transformation.
              </p>
              <p className="mt-6 text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[32.4px] font-normal">
                At dMACQ, our HRDMS meets all of these use cases offering
                seamless integration with your existing systems and powerful
                search capabilities. To see it in action, check out our video{" "}
                <Link
                  href="https://youtu.be/U2XZDc9ampw"
                  className="text-[#2950DA] font-semibold"
                >
                  https://youtu.be/U2XZDc9ampw
                </Link>
              </p>
              <h2 className="mt-6 text-secondary text-[16px] md:text-[18px] leading-[28.8px] md:leading-[30px] font-normal">
                <span className="font-bold text-dark ">Disclaimer:</span> Views
                expressed are personal views of the authors.
              </h2>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:block hidden border-l border-primary-400 min-w-[331px] h-screen sticky top-[72px]">
            <ul className="pt-[64px] w-full flex flex-col gap-4">
              <li className="w-full">
                <Link
                  href="#overview"
                  className={`block pl-[32px] py-2 ${
                    activeSection === "overview"
                      ? "text-[14px] leading-[19.07px] bg-[#F5F8FF] border-l-2  border-[#2243B6] text-[#2243B6] font-semibold"
                      : "text-[#40566D] font-medium text-[14px] leading-[19.07px]"
                  }`}
                >
                  Overview
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="#archivalofdocuments"
                  className={`block pl-[32px] py-2  ${
                    activeSection === "archivalofdocuments"
                      ? "text-[14px] leading-[19.07px] bg-[#F5F8FF] border-l-2  border-[#2243B6] text-[#2243B6] font-semibold"
                      : "text-[#40566D] font-medium text-[14px] leading-[19.07px]"
                  }`}
                >
                  Archival of Documents
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="#realtimeDocumentaccess"
                  className={`block pl-[32px] py-2 ${
                    activeSection === "realtimeDocumentaccess"
                      ? "text-[14px] leading-[19.07px] bg-[#F5F8FF] border-l-2  border-[#2243B6] text-[#2243B6] font-semibold"
                      : "text-[#40566D] font-medium text-[14px] leading-[19.07px]"
                  }`}
                >
                  Real-time Document Access
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="#documentaggregation"
                  className={`block pl-[32px] py-2  ${
                    activeSection === "documentaggregation"
                      ? "text-[14px] leading-[19.07px] bg-[#F5F8FF] border-l-2  border-[#2243B6] text-[#2243B6] font-semibold"
                      : "text-[#40566D] font-medium text-[14px] leading-[19.07px]"
                  }`}
                >
                  Document Aggregation
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="#conclusion"
                  className={`block pl-[32px] py-2 ${
                    activeSection === "conclusion"
                      ? "text-[14px] leading-[19.07px] bg-[#F5F8FF] border-l-2  border-[#2243B6] text-[#2243B6] font-semibold"
                      : "text-[#40566D] font-medium text-[14px] leading-[19.07px]"
                  }`}
                >
                  Conclusion
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
