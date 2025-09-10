import React, { useState } from "react";
import { LuPlus, LuMinus, LuPencil, LuUpload, LuDownload, LuSave } from "react-icons/lu";
import * as XLSX from "xlsx";

const UploadTable = () => {
  const [tableTitle, setTableTitle] = useState("Customizable Table"); // ✅ Table title state
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [headers, setHeaders] = useState(["Column 1", "Column 2"]);
  const [data, setData] = useState([["", ""]]);

  const [editingHeader, setEditingHeader] = useState(null);
  const [editingCell, setEditingCell] = useState({ row: null, col: null });

  const [striped, setStriped] = useState(true);
  const [hover, setHover] = useState(true);
  const [bordered, setBordered] = useState(true);
  const [compact, setCompact] = useState(false);

  // Add new row
  const addRow = () => setData([...data, new Array(headers.length).fill("")]);

  // Delete row
  const deleteRow = (rowIndex) => setData(data.filter((_, i) => i !== rowIndex));

  // Add new column
  const addColumn = () => {
    setHeaders([...headers, `Column ${headers.length + 1}`]);
    setData(data.map((row) => [...row, ""]));
  };

  // Delete column
  const deleteColumn = (colIndex) => {
    if (headers.length === 1) return;
    setHeaders(headers.filter((_, i) => i !== colIndex));
    setData(data.map((row) => row.filter((_, i) => i !== colIndex)));
  };

  // Update header
  const updateHeader = (colIndex, value) => {
    const newHeaders = [...headers];
    newHeaders[colIndex] = value;
    setHeaders(newHeaders);
  };

  // Update cell
  const updateCell = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  // Handle Excel Upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      if (sheetData.length > 0) {
        const newHeaders = sheetData[0];
        const newData = sheetData.slice(1);
        setHeaders(newHeaders);
        setData(newData);
      }
    };
    reader.readAsBinaryString(file);
  };

  // Handle Excel Download
  const handleExcelDownload = () => {
    const wsData = [headers, ...data]; // combine headers + rows
    const worksheet = XLSX.utils.aoa_to_sheet(wsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${tableTitle.replace(/\s+/g, "_")}.xlsx`);
  };

  // Handle Submit
  const handleSubmit = () => {
    console.log("📊 Submitted Table Data:", {
      title: tableTitle,
      headers,
      data,
    });
    alert("Table submitted! Check console for data.");
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-200">
      {/* Title + Upload/Download */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        {/* Editable Title */}
        {isEditingTitle ? (
          <input
            value={tableTitle}
            autoFocus
            onBlur={() => setIsEditingTitle(false)}
            onChange={(e) => setTableTitle(e.target.value)}
            className="text-lg sm:text-xl font-bold border-b border-gray-400 focus:outline-none"
          />
        ) : (
          <h2
            className="text-lg sm:text-xl font-bold text-black cursor-pointer flex items-center gap-2"
            onClick={() => setIsEditingTitle(true)}
          >
            {tableTitle} <LuPencil size={16} className="text-gray-500" />
          </h2>
        )}

        {/* Upload & Download */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <label className="cursor-pointer px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#f8a713] hover:opacity-90 transition text-sm sm:text-base">
            <LuUpload size={18} />
            <span>Upload</span>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleExcelDownload}
            className="px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#287e18] hover:opacity-90 transition text-sm sm:text-base"
          >
            <LuDownload size={18} />
            <span>Download</span>
          </button>
        </div>
      </div>

      {/* Table Customization Options */}
      <div className="flex flex-wrap gap-3 mb-6 text-xs sm:text-sm text-black">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={striped} onChange={() => setStriped(!striped)} />
          Striped
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hover} onChange={() => setHover(!hover)} />
          Hover
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={bordered} onChange={() => setBordered(!bordered)} />
          Bordered
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={compact} onChange={() => setCompact(!compact)} />
          Compact
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className={`min-w-full rounded-lg ${bordered ? "border border-gray-300" : ""} ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          <thead className="bg-[#f8a713] text-white">
            <tr>
              {headers.map((header, colIndex) => (
                <th
                  key={colIndex}
                  className={`px-2 sm:px-4 py-2 relative font-semibold ${
                    bordered ? "border border-gray-300" : ""
                  }`}
                >
                  {editingHeader === colIndex ? (
                    <input
                      value={header}
                      autoFocus
                      onBlur={() => setEditingHeader(null)}
                      onChange={(e) => updateHeader(colIndex, e.target.value)}
                      className="bg-white text-black border-b border-dashed border-gray-400 focus:outline-none w-full"
                    />
                  ) : (
                    <div className="flex items-center justify-between gap-2">
                      <span className="truncate">{header}</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setEditingHeader(colIndex)}
                          className="text-white hover:text-black"
                        >
                          <LuPencil size={16} />
                        </button>
                        <button
                          onClick={() => deleteColumn(colIndex)}
                          className="text-black hover:text-red-600"
                        >
                          <LuMinus size={16} />
                        </button>
                      </div>
                    </div>
                  )}
                </th>
              ))}
              <th className="px-2 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={`${striped && rowIndex % 2 === 1 ? "bg-gray-100" : ""} ${
                  hover ? "hover:bg-[#f8f8f8]" : ""
                }`}
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-2 sm:px-4 py-2 ${bordered ? "border border-gray-300" : ""}`}
                  >
                    {editingCell.row === rowIndex && editingCell.col === colIndex ? (
                      <input
                        value={cell}
                        autoFocus
                        onBlur={() => setEditingCell({ row: null, col: null })}
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        className="w-full bg-transparent focus:outline-none text-black"
                      />
                    ) : (
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate">{cell || <span className="text-gray-400">Empty</span>}</span>
                        <button
                          onClick={() => setEditingCell({ row: rowIndex, col: colIndex })}
                          className="text-gray-600 hover:text-black"
                        >
                          <LuPencil size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                ))}
                <td className="px-2 py-2 text-center">
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => deleteRow(rowIndex)}
                  >
                    <LuMinus size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Controls + Submit */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6">
        <button
          className="px-3 sm:px-4 py-2 bg-[#287e18] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base"
          onClick={addRow}
        >
          <LuPlus /> Add Row
        </button>
        <button
          className="px-3 sm:px-4 py-2 bg-[#f8a713] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base"
          onClick={addColumn}
        >
          <LuPlus /> Add Column
        </button>
        <button
          className="px-3 sm:px-4 py-2 bg-[#1d4ed8] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base"
          onClick={handleSubmit}
        >
          <LuSave /> Submit
        </button>
      </div>
    </div>
  );
};

export default UploadTable;
