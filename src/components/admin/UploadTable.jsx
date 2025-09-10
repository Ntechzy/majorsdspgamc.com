import React, { useState } from "react";
import {
  LuPlus,
  LuMinus,
  LuPencil,
  LuUpload,
  LuDownload,
  LuSave,
  LuFile,
  LuFileText,
  LuMusic,
  LuVideo,
  LuX,
} from "react-icons/lu";
import * as XLSX from "xlsx";
import axios from "axios";

const UploadTable = ({ api }) => {
  const [tableTitle, setTableTitle] = useState("Customizable Table");
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const [headers, setHeaders] = useState(["Column 1", "Column 2"]);
  const [data, setData] = useState([["", ""]]);

  const [editingHeader, setEditingHeader] = useState(null);
  const [editingCell, setEditingCell] = useState({ row: null, col: null });

  const [striped, setStriped] = useState(true);
  const [hover, setHover] = useState(true);
  const [bordered, setBordered] = useState(true);
  const [compact, setCompact] = useState(false);

  // File Upload State
  const [files, setFiles] = useState([]);

  // ➕ Row/Column Handling
  const addRow = () => setData([...data, new Array(headers.length).fill("")]);
  const deleteRow = (rowIndex) => setData(data.filter((_, i) => i !== rowIndex));
  const addColumn = () => {
    setHeaders([...headers, `Column ${headers.length + 1}`]);
    setData(data.map((row) => [...row, ""]));
  };
  const deleteColumn = (colIndex) => {
    if (headers.length === 1) return;
    setHeaders(headers.filter((_, i) => i !== colIndex));
    setData(data.map((row) => row.filter((_, i) => i !== colIndex)));
  };

  // ✏️ Updates
  const updateHeader = (colIndex, value) => {
    const newHeaders = [...headers];
    newHeaders[colIndex] = value;
    setHeaders(newHeaders);
  };
  const updateCell = (rowIndex, colIndex, value) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  // 📤 Excel Upload
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      const binaryStr = event.target.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const sheet = workbook.Sheets[workbook.SheetNames[0]];
      const sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      if (sheetData.length > 0) {
        setHeaders(sheetData[0]);
        setData(sheetData.slice(1));
      }
    };
    reader.readAsBinaryString(file);
  };

  // 📥 Excel Download
  const handleExcelDownload = () => {
    const wsData = [headers, ...data];
    const worksheet = XLSX.utils.aoa_to_sheet(wsData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, `${tableTitle.replace(/\s+/g, "_")}.xlsx`);
  };

  // 🚀 Submit to backend (table + files)
  const handleSubmit = async () => {
    try {
      // Submit table
      await axios.post(`http://localhost:5000${api}`, {
        title: tableTitle,
        headers,
        data,
      });

      // Log uploaded files
      console.log("Submitted files:", files.map((f) => f.file));
      alert(
        `✅ Table data submitted! Also submitted ${files.length} file(s) (check console).`
      );
    } catch (error) {
      console.error("Error submitting table:", error);
      alert("❌ Failed to submit table data");
    }
  };

  // File Handling
  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    const mapped = selected.map((file) => ({
      file,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const removeFile = (index) => {
    const updated = [...files];
    if (updated[index].preview) {
      URL.revokeObjectURL(updated[index].preview);
    }
    updated.splice(index, 1);
    setFiles(updated);
  };

  const renderPreview = (fileObj) => {
    const { file, preview } = fileObj;
    if (file.type.startsWith("image/")) {
      return <img src={preview} alt={file.name} className="w-full h-32 object-cover rounded-md" />;
    }
    if (file.type === "application/pdf") {
      return (
        <div className="flex flex-col items-center justify-center text-red-600">
          <LuFileText size={40} />
          <span className="text-xs mt-1">PDF</span>
        </div>
      );
    }
    if (file.type.startsWith("video/")) {
      return (
        <div className="flex flex-col items-center justify-center text-blue-600">
          <LuVideo size={40} />
          <span className="text-xs mt-1">Video</span>
        </div>
      );
    }
    if (file.type.startsWith("audio/")) {
      return (
        <div className="flex flex-col items-center justify-center text-green-600">
          <LuMusic size={40} />
          <span className="text-xs mt-1">Audio</span>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-center justify-center text-gray-600">
        <LuFile size={40} />
        <span className="text-xs mt-1">File</span>
      </div>
    );
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-xl shadow-md border border-gray-200">
      {/* Title + Upload/Download */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
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

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <label className="cursor-pointer px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#f8a713] hover:opacity-90 transition text-sm sm:text-base">
            <LuUpload size={18} />
            <span>Upload Excel</span>
            <input type="file" accept=".xlsx,.xls" onChange={handleExcelUpload} className="hidden" />
          </label>
          <button
            onClick={handleExcelDownload}
            className="px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#287e18] hover:opacity-90 transition text-sm sm:text-base"
          >
            <LuDownload size={18} />
            <span>Download Excel</span>
          </button>
          <label className="cursor-pointer px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#1d4ed8] hover:opacity-90 transition text-sm sm:text-base">
            <LuUpload size={18} />
            <span>Upload Files</span>
            <input type="file" multiple onChange={handleFiles} className="hidden" />
          </label>
        </div>
      </div>

      {/* Table Customization Options */}
      <div className="flex flex-wrap gap-3 mb-6 text-xs sm:text-sm text-black">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={striped} onChange={() => setStriped(!striped)} /> Striped
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hover} onChange={() => setHover(!hover)} /> Hover
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={bordered} onChange={() => setBordered(!bordered)} /> Bordered
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={compact} onChange={() => setCompact(!compact)} /> Compact
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className={`min-w-full rounded-lg ${bordered ? "border border-gray-300" : ""} ${compact ? "text-xs" : "text-sm"}`}
        >
          <thead className="bg-[#f8a713] text-white">
            <tr>
              {headers.map((header, colIndex) => (
                <th key={colIndex} className={`px-2 sm:px-4 py-2 relative font-semibold ${bordered ? "border border-gray-300" : ""}`}>
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
                        <button onClick={() => setEditingHeader(colIndex)} className="text-white hover:text-black">
                          <LuPencil size={16} />
                        </button>
                        <button onClick={() => deleteColumn(colIndex)} className="text-black hover:text-red-600">
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
              <tr key={rowIndex} className={`${striped && rowIndex % 2 === 1 ? "bg-gray-100" : ""} ${hover ? "hover:bg-[#f8f8f8]" : ""}`}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex} className={`px-2 sm:px-4 py-2 ${bordered ? "border border-gray-300" : ""}`}>
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
                        <button onClick={() => setEditingCell({ row: rowIndex, col: colIndex })} className="text-gray-600 hover:text-black">
                          <LuPencil size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                ))}
                <td className="px-2 py-2 text-center">
                  <button className="text-red-600 hover:text-red-800" onClick={() => deleteRow(rowIndex)}>
                    <LuMinus size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* File Preview Section */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {files.map((fileObj, index) => (
            <div key={index} className="relative bg-gray-100 p-2 rounded-lg shadow-sm border border-gray-200">
              {renderPreview(fileObj)}
              <p className="text-xs mt-2 truncate text-center text-black">{fileObj.file.name}</p>
              <button
                onClick={() => removeFile(index)}
                className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
              >
                <LuX size={14} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Controls + Submit */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-6">
        <button className="px-3 sm:px-4 py-2 bg-[#287e18] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base" onClick={addRow}>
          <LuPlus /> Add Row
        </button>
        <button className="px-3 sm:px-4 py-2 bg-[#f8a713] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base" onClick={addColumn}>
          <LuPlus /> Add Column
        </button>
        <button className="px-3 sm:px-4 py-2 bg-[#1d4ed8] text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition text-sm sm:text-base" onClick={handleSubmit}>
          <LuSave /> Submit
        </button>
      </div>
    </div>
  );
};

export default UploadTable;
