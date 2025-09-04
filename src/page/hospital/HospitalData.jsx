import React from 'react';
import PageBanner from '../../components/shared/PageBanner';

// Month headers used in multiple tables
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const HospitalData = () => {
  return (
    <>
      <PageBanner title="Hospital OPD/IPD Data" path={['Hospital OPD/IPD Data']} />

      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-6xl text-center font-semibold mb-12">Year: 2024</h1>

        {/* IPD Data */}
        <Section title="IPD Data (2024)">
          <MonthlyTable
            data={[
              ["1.", "Kayachikitsa", 75, 79, 74, 85, 77, 71, 75, 67, 69, 65, 68, 65, 870],
              ["2.", "Panchakarma", 14, 10, 11, 16, 18, 13, 17, 18, 20, 14, 13, 13, 177],
              ["3.", "Shalya", 71, 72, 70, 80, 76, 74, 74, 69, 64, 67, 69, 67, 853],
              ["4.", "Shalakya", 25, 20, 21, 23, 25, 23, 25, 29, 26, 24, 23, 26, 290],
              ["5.", "Prasuti & Stri Roga", 88, 85, 79, 87, 79, 77, 74, 87, 73, 70, 68, 69, 936],
              ["6.", "Kaumarbhritya (Balrog)", 25, 25, 23, 22, 28, 25, 26, 28, 28, 24, 24, 25, 303],
              ["7.", "Agad Vish Chikitsa", 0, 0, 0, 0, 0, 7, 14, 13, 13, 13, 12, 14, 86],
              ["", "Month Total", 298, 291, 278, 313, 303, 290, 305, 311, 293, 277, 277, 279, 3515]
            ]}
          />
          <p className="text-sm text-right mt-1 font-semibold">Grand Total: 3515</p>
        </Section>

        {/* OPD Data */}
        <Section title="OPD Data (2024)">
          <MonthlyTable
            data={[
              ["1.", "Kayachikitsa", 215, 220, 218, 230, 225, 210, 215, 205, 208, 200, 205, 200, 2551],
              ["2.", "Panchakarma", 45, 40, 42, 50, 55, 48, 52, 55, 60, 45, 42, 40, 574],
              ["3.", "Shalya", 180, 185, 175, 190, 185, 180, 182, 175, 170, 175, 178, 175, 2150],
              ["4.", "Shalakya", 75, 70, 72, 80, 85, 78, 82, 90, 85, 80, 75, 80, 952],
              ["5.", "Prasuti & Stri Roga", 250, 245, 240, 260, 255, 250, 245, 260, 240, 235, 230, 235, 2945],
              ["6.", "Kaumarbhritya (Balrog)", 85, 90, 85, 80, 95, 90, 92, 95, 90, 85, 85, 90, 1068],
              ["7.", "Agad Vish Chikitsa", 10, 8, 5, 12, 15, 25, 40, 38, 42, 45, 40, 35, 315],
              ["", "Month Total", 860, 858, 837, 902, 910, 881, 908, 918, 895, 865, 855, 855, 10555]
            ]}
          />
          <p className="text-sm text-right mt-1 font-semibold">Grand Total: 10555</p>
        </Section>

        {/* Bed Occupied Data */}
        <Section title="Bed Occupied (2024)">
          <MonthlyTable
            data={[
              ["1.", "Kayachikitsa", 846, 849, 721, 719, 778, 705, 678, 726, 703, 733, 576, 721, 8755],
              ["2.", "Panchakarma", 391, 290, 317, 318, 389, 412, 432, 453, 390, 435, 422, 435, 4684],
              ["3.", "Shalya", 401, 520, 516, 672, 694, 704, 728, 730, 708, 729, 597, 717, 7716],
              ["4.", "Shalakya", 145, 136, 149, 132, 151, 169, 185, 181, 169, 178, 174, 170, 1939],
              ["5.", "Prasuti & Stri Roga", 660, 650, 620, 629, 596, 564, 603, 667, 702, 732, 697, 723, 7843],
              ["6.", "Kaumarbhritya (Balrog)", 178, 180, 176, 143, 168, 160, 185, 179, 159, 179, 167, 179, 2053],
              ["7.", "Agad Vish Chikitsa", 0, 0, 0, 0, 0, 27, 62, 62, 60, 62, 59, 63, 395],
              ["", "Month Total", 2621, 2625, 2499, 2613, 2776, 2741, 2873, 2998, 2891, 3048, 2692, 3008, 33385]
            ]}
          />
          <p className="text-sm text-right mt-1 font-semibold">Grand Total: 33385</p>
        </Section>

        {/* Bed Existed Data */}
        <Section title="Bed Existed (2024)">
          <Table>
            <thead>
              <tr>
                <Th>S.No</Th>
                <Th>Name of the Departments</Th>
                <Th>No. of Existing beds for UG</Th>
                <Th>Additional Bed For PG/Clinical Dept (1:4 ratio)</Th>
                <Th>Total no of available beds</Th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1.", "Kayachikitsa", 20, 25, 45],
                ["2.", "Shalya", 20, 25, 45],
                ["3.", "Shalakya", 10, 0, 10],
                ["4.", "Prasuti & Stri Roga", 10, 25, 35],
                ["5.", "Kaumarbhritya (Balrog)", 10, 0, 10],
                ["6.", "Panchakarma", 25, 0, 25],
                ["7.", "Agad Vish Chikitsa", 5, 0, 5]
              ].map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <Td key={j} isBold={j === row.length - 1}>{cell}</Td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="mt-2 space-y-1 text-sm">
            <p className="text-right font-semibold">
              Total Number of Beds Existed (1st Jan 2024 - 31st Dec 2024): 175
            </p>
            <p className="text-right font-semibold">
              Bed Occupancy (%): 52.26
            </p>
          </div>
        </Section>
      </div>
    </>
  );
};

// Reusable Section Component
const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold mb-4 border-b pb-1">{title}</h2>
    <div className="overflow-x-auto">{children}</div>
  </div>
);

// Monthly Table Generator
const MonthlyTable = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <Th>S.No</Th>
        <Th>Name of the Departments</Th>
        {months.map(month => <Th key={month}>{month}</Th>)}
        <Th>Dept. Total</Th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, i) => (
        <tr key={i}>
          {row.map((cell, j) => (
            <Td key={j} isBold={i === data.length - 1 || j === row.length - 1}>{cell}</Td>
          ))}
        </tr>
      ))}
    </tbody>
  </Table>
);

// Basic Table, Th, Td Components
const Table = ({ children }) => (
  <table className="min-w-full table-auto border border-gray-300 text-sm">
    {children}
  </table>
);

const Th = ({ children }) => (
  <th className="border border-gray-300 px-2 py-1 bg-gray-100 text-xs font-semibold text-center">
    {children}
  </th>
);

const Td = ({ children, isBold = false }) => (
  <td className={`border border-gray-300 px-2 py-1 text-center ${isBold ? 'font-semibold' : ''}`}>
    {children}
  </td>
);

export default HospitalData;
