import React, { useState } from 'react';
import PageBanner from '../../components/shared/PageBanner';
import  pdfDocuments  from '../../data/pdfData';
import PDFViewer from '../../components/shared/PDFViewer'; // Move PDFViewer into shared if reused
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const ApprovalAffiliation = () => {
  const [numPages, setNumPages] = useState({});
  const [pdfLoading, setPdfLoading] = useState({
    ayush: true,
    affiliation: true,
  });

  return (
    <>
      <PageBanner title="Approval/Affiliation" path={['Approval/Affiliation']} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {pdfDocuments.map((doc) => (
          <section key={doc.id} className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e]">
              {doc.title}
            </h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-700">{doc.subtitle}</h3>
              </div>

              <PDFViewer
                file={doc.file}
                numPages={numPages[doc.id]}
                setNumPages={(pages) => setNumPages((prev) => ({ ...prev, [doc.id]: pages }))}
                loading={pdfLoading[doc.id]}
                setLoading={setPdfLoading}
                type={doc.id}
              />

              <div className="p-4 bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
                <a
                  href={doc.download}
                  download
                  className="text-[#fbb20e] hover:text-[#e6a00d] font-medium flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {doc.downloadText}
                </a>
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ApprovalAffiliation;
