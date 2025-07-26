import React from 'react';
import PageBanner from '../../components/shared/PageBanner';
import pdfDocuments from '../../data/pdfData';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

const ApprovalAffiliation = () => {
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

              {/* Embedded PDF via iframe */}
              <div className="w-full h-[600px]">
                <iframe
                  src={doc.file}
                  title={doc.title}
                  className="w-full h-full"
                  frameBorder="0"
                />
              </div>

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
      {/* Affliating University Details */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/asset/gallery/img21.webp" // Update with actual path
              alt="Students"
              className="rounded shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text + Table */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">
              Affliating University Details Till Batch 2020
            </h2>
            <p className="text-md md:text-lg font-semibold text-gray-800 mb-1">
              Chhatrapati Shahu Ji Maharaj University
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Kalyanpur, Kanpur, Uttar Pradesh, India - 208024
            </p>
            <p className="text-sm text-blue-600 mb-4">
              Website: <a href="http://csjmu.ac.in/" className="underline" target="_blank" rel="noopener noreferrer">http://csjmu.ac.in/</a>
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-black">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-black px-3 py-2 text-left">S.no</th>
                    <th className="border border-black px-3 py-2 text-left">Designation</th>
                    <th className="border border-black px-3 py-2 text-left">Phone No</th>
                    <th className="border border-black px-3 py-2 text-left">Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-3 py-2">1</td>
                    <td className="border border-black px-3 py-2">Dr. Vinay Pathak Vice Chancellor</td>
                    <td className="border border-black px-3 py-2">2581280</td>
                    <td className="border border-black px-3 py-2">vc[at]kanpuruniversity[dot]org</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-3 py-2">2</td>
                    <td className="border border-black px-3 py-2">Dr. Anil Kumar Yadav Registrar</td>
                    <td className="border border-black px-3 py-2">2583280, 2580044</td>
                    <td className="border border-black px-3 py-2">registrar[at]kanpuruniversity[dot]org</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Affiliation2021 */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Left: Text and Table */}
          <div className="w-full md:w-1/2">
            <h2 className="text-xl md:text-2xl font-bold text-[#1e3a8a] mb-2">
              Affiliating university Details from batch-2021
            </h2>
            <p className="text-md md:text-lg font-semibold text-gray-800 mb-1">
              Mahayogi Gorakhnath Ayush University
            </p>
            <p className="text-sm text-gray-600 mb-1">
              Near Transportnagar, Gorakhpur, Uttar Pradesh, India – 273016
            </p>
            <p className="text-sm text-blue-600 mb-4">
              Website: <a href="http://www.mggaugkp.ac.in/" className="underline" target="_blank" rel="noopener noreferrer">http://www.mggaugkp.ac.in/</a>
            </p>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border border-black">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border border-black px-3 py-2 text-left">S.no</th>
                    <th className="border border-black px-3 py-2 text-left">Designation</th>
                    <th className="border border-black px-3 py-2 text-left">Phone No</th>
                    <th className="border border-black px-3 py-2 text-left">Email ID</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-black px-3 py-2">1</td>
                    <td className="border border-black px-3 py-2">Dr. A.K. Singh Vice Chancellor</td>
                    <td className="border border-black px-3 py-2">8810724949</td>
                    <td className="border border-black px-3 py-2">vc@mggaugkp.ac.in</td>
                  </tr>
                  <tr>
                    <td className="border border-black px-3 py-2">2</td>
                    <td className="border border-black px-3 py-2">Dr. R.B. Singh Registrar</td>
                    <td className="border border-black px-3 py-2">8810724948</td>
                    <td className="border border-black px-3 py-2">–</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/asset/gallery/img19.webp" // Replace with actual image path
              alt="Affiliation 2021 Ceremony"
              className="rounded shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApprovalAffiliation;
