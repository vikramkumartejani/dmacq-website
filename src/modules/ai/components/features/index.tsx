import Feature from "../feature";

export default function Features() {
  return (
    <section className="min-h-screen w-full bg-grid-white/[0.02] relative flex items-center justify-center overflow-hidden">
      
      <div className="">
        <Feature
          title="Auto-Classification"
          description="AI can automatically classify documents based on their content, eliminating the need for manual sorting. This feature scans the document's text, metadata."
          imageSrc="/assets/ai/auto-classification.png"
          altText="auto classification"
          spacing="py-[60px]"
          bgImageSrc="/assets/ai/grid-2.png"
          heading={true}
        />
        <Feature
          title="Optical Character Recognition (OCR)"
          description="OCR technology is powered by AI to convert scanned images or PDFs into searchable and editable text. It recognizes printed or handwritten text within digital documents"
          imageSrc="/assets/ai/ocr.png"
          altText="data extraction"
          reverse={true}
          bgImageSrc="/assets/ai/grid-3.png"
        />
        <Feature
          title="Document Data Extraction"
          description="AI can extract specific data fields from documents, such as names, dates, or invoice totals. This process uses machine learning to identify patterns in document formats and pull out essential"
          imageSrc="/assets/ai/data-extraction.png"
          altText="data extraction"
          bgImageSrc="/assets/ai/grid-4.png"
        />
        <Feature
          title="Intelligent Search"
          description="Saves time by improving search accuracy and making it easier to retrieve relevant documents even when exact keywords are unknown"
          imageSrc="/assets/ai/intelligent search.png"
          altText="Intelligent Search"
          reverse={true}
          bgImageSrc="/assets/ai/grid-5.png"
        />
      </div>
    </section>
  );
}
