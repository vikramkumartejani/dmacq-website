import Image from "next/image";
import Feature from "../feature";

export default function Features() {
  return (
    <section className="min-h-screen bg-grid-white/[0.02] relative flex items-center justify-center py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-[64px]">
          <h2 className="text-[#75A3FF] text-[18px] font-[600] tracking-[4px]">
            FEATURES
          </h2>
          <h3 className="text-white text-[36px] font-[800]">
            AI-Powered Features
          </h3>
        </div>

        <Feature
          title="Auto-Classification"
          description="AI can automatically classify documents based on their content, eliminating the need for manual sorting. This feature scans the document's text, metadata."
          imageSrc="/assets/ai/auto-classification.png"
          altText="auto classification"
        />
        <Feature
          title="Optical Character Recognition (OCR)"
          description="OCR technology is powered by AI to convert scanned images or PDFs into searchable and editable text. It recognizes printed or handwritten text within digital documents"
          imageSrc="/assets/ai/ocr.png"
          altText="data extraction"
          reverse={true}
        />
        <Feature
          title="Document Data Extraction"
          description="AI can extract specific data fields from documents, such as names, dates, or invoice totals. This process uses machine learning to identify patterns in document formats and pull out essential"
          imageSrc="/assets/ai/data-extraction.png"
          altText="data extraction"
        />
        <Feature
          title="Intelligent Search"
          description="Saves time by improving search accuracy and making it easier to retrieve relevant documents even when exact keywords are unknown"
          imageSrc="/assets/ai/intelligent search.png"
          altText="Intelligent Search"
          reverse={true}
        />
      </div>
    </section>
  );
}

function IllustrationSvg() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Base document */}
      <path
        d="M100 100 L250 100 L250 300 L100 300 Z"
        fill="#ffffff"
        opacity="0.1"
        stroke="#ffffff"
        strokeWidth="2"
      />

      {/* Green overlay */}
      <path
        d="M120 120 L270 120 L270 320 L120 320 Z"
        fill="#4ade80"
        opacity="0.2"
        stroke="#4ade80"
        strokeWidth="2"
      />

      {/* Coins */}
      <circle cx="180" cy="260" r="20" fill="#4ade80" />
      <circle cx="220" cy="260" r="20" fill="#4ade80" />

      {/* Medical cross */}
      <path
        d="M300 150 L320 150 L320 130 L340 130 L340 150 L360 150 L360 170 L340 170 L340 190 L320 190 L320 170 L300 170 Z"
        fill="#4ade80"
      />
    </svg>
  );
}
