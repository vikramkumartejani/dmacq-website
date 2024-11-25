import Image from "next/image";
import Feature from "../feature";

export default function Features() {
  return (
    <section className="min-h-screen bg-grid-white/[0.02] relative flex items-center justify-center py-20 overflow-hidden">
      <div className="">
        <div className="text-center mb-[4px]">
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
          spacing="py-[60px]"
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
