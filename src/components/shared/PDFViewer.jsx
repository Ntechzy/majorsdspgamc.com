"use client";

const PdfViewer = ({ title = "PDF Viewer", src, height = "600px" }) => {
  if (!src) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl w-[80vw] shadow-md p-6 text-center">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {title}
        </h2>
        <p className="text-gray-500">No PDF source provided</p>
      </div>
    );
  }

  return (
    <section className="bg-white border border-gray-200/70 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden mb-8">
      {/* Title */}
      <header className="p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
        <h2 className="text-base sm:text-lg md:text-2xl font-semibold text-gray-800 text-center">
          {title}
        </h2>
      </header>

      {/* PDF iframe */}
      <div className="w-full">
        <iframe
          src={src}
          title={title}
          className="w-full"
          style={{
            height: height,
            border: "none",
          }}
        />
      </div>

      {/* Fallback download option */}
      <div className="p-4 bg-gray-50 flex justify-center">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm sm:text-base px-4 py-2 bg-[#f8a81c] text-white rounded-lg shadow hover:bg-[#e69500] transition-colors"
        >
          Open / Download PDF
        </a>
      </div>
    </section>
  );
};

export default PdfViewer;
