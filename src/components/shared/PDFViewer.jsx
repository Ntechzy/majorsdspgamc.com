import React from 'react';
import { Document, Page } from 'react-pdf';

const PDFViewer = ({ file, numPages, setNumPages, loading, setLoading, type }) => {
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setLoading((prev) => ({ ...prev, [type]: false }));
  };

  const onDocumentLoadError = () => {
    setLoading((prev) => ({ ...prev, [type]: false }));
  };

  return (
    <div className="w-full overflow-x-auto flex justify-center items-center min-h-[400px] bg-gray-100">
      {loading ? (
        <p className="text-gray-500 text-center">Loading PDF...</p>
      ) : (
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<p className="text-gray-500 text-center">Loading PDF...</p>}
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={800}
            />
          ))}
        </Document>
      )}
    </div>
  );
};

export default PDFViewer;
