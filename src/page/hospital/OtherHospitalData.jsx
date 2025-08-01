import React from 'react';
import PageBanner from '../../components/shared/PageBanner';

// ─── Main Component ─────────────────────────────────────────────────────────────
const OtherHospitalData = () => {
  return (
    <>
      <PageBanner title="Other Hospital Data" path={['Other Hospital Data']} />
      <div className="px-4 py-8 max-w-7xl mx-auto">

        {/* Labour Room */}
        <Section title="Labour Room Facilities (2024)">
          <SimpleTable
            headers={["Facility", "Status/Count"]}
            rows={[
              ["Is Labour Room available", "Yes"],
              ["Is Antenatal Room with attached Toilet functional", "Yes"],
              ["Are Facilities for Neonatal care available", "Yes"],
              ["Are other facilities, Equipments, Instruments available", "Yes"],
              ["Total number of Deliveries conducted in 2024", "163"],
              ["Number of other procedures conducted in 2024", "414"]
            ]}
            boldCondition={(i, j) => j === 1 && i >= 4}
          />
        </Section>

        {/* Operation Theatre */}
        <Section title="Operation Theatre Details (2024)">
          <SimpleTable
            headers={["Facility", "Status/Count"]}
            rows={[
              ["Is Minor Operation Theatre Available", "Yes"],
              ["Does Air Conditioning exist", "Yes"],
              ["Does Pre-Operative Room with attached toilet exist", "Yes"],
              ["Does Sterilization Room exist", "Yes"],
              ["Does Changing and Wash Room with attached toilet exist", "Yes"],
              ["Are other Facilities, Equipments, Instruments available", "Yes"],
              ["Is Fumigation Facility available", "Yes"],
              ["Total Number of operations done in 2024", "97"],
              ["Kshar sutra applications in 2024", "398"]
            ]}
            boldCondition={(i, j) => j === 1 && i >= 7}
          />
        </Section>

        {/* Investigations */}
        <Section title="Diagnostic Investigations (2024)">
          <SimpleTable
            headers={["Investigation Type", "Count"]}
            rows={[
              ["Total number of X-rays done", "1,396"],
              ["Total number of ECG done", "1,016"],
              ["Total number of USG done", "2,843"]
            ]}
            boldCondition={(i, j) => j === 1}
          />
        </Section>

        {/* Clinical Lab */}
        <Section title="Clinical Laboratory Statistics (2024)">
          <SimpleTable
            headers={["Test Type", "Count"]}
            rows={[
              ["Total Number of Hematological Tests", "12,963"],
              ["Total Number of Bio-Chemical Tests", "4,297"],
              ["Total Number of Serological Test", "3,887"],
              ["Total Number of Microbiological Tests", "72"],
              ["Total Investigations in 2024", "21,219"]
            ]}
            boldCondition={() => true}
          />
        </Section>

        {/* Karmas Carried Out */}
        <Section title="Details of Karmas Carried Out (2024)">
          <SimpleTable
            headers={["S.No.", "Karmas Carried Out", "From OPD", "From IPD", "Total"]}
            rows={[
              ["1.", "Snehan", 559, 1489, 2048],
              ["2.", "Swedan", 856, 2007, 2863],
              ["3.", "Vaman", 197, 4, 201],
              ["4.", "Virechan", 263, 6, 269],
              ["5.", "Basti", 324, 669, 993],
              ["6.", "Nasya", 327, 671, 998],
              ["7.", "Rakimokshan", 94, 15, 109],
              ["8.", "Shirodhara", 329, 518, 847],
              ["9.", "Shirobasti", 130, 90, 220],
              ["10.", "Others", 949, 1754, 2703],
              ["", "Total number of Karmas carried out", 4028, 7223, 11251]
            ]}
            boldCondition={(i, j, row) => i === 10 || j === row.length - 1}
          />
        </Section>

      </div>
    </>
  );
};

export default OtherHospitalData;

//
// ─── Reusable Components ────────────────────────────────────────────────────────
//

const Section = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold mb-4 border-b pb-1">{title}</h2>
    <div className="overflow-x-auto">{children}</div>
  </div>
);

const SimpleTable = ({ headers, rows, boldCondition }) => (
  <table className="min-w-full table-auto border border-gray-300 text-sm">
    <thead>
      <tr>
        {headers.map((header, i) => (
          <Th key={i}>{header}</Th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <Td
              key={cellIndex}
              isBold={boldCondition(rowIndex, cellIndex, row)}
            >
              {cell}
            </Td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const Th = ({ children }) => (
  <th className="border border-gray-300 px-2 py-1 bg-gray-100 text-xs font-semibold text-center">
    {children}
  </th>
);

const Td = ({ children, isBold = false }) => (
  <td
    className={`border border-gray-300 px-2 py-1 text-center ${
      isBold ? 'font-semibold' : ''
    }`}
  >
    {children}
  </td>
);
