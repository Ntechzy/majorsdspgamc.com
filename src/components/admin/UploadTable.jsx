import React, { useState } from "react";
import { LuPlus, LuMinus, LuPencil } from "react-icons/lu";
import * as XLSX from "xlsx";

const UploadTable = () => {
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

  return (
    <div className="p-6 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Customizable Table</h2>

      {/* Upload Excel */}
      <div className="mb-4">
        <input type="file" accept=".xlsx,.xls" onChange={handleExcelUpload} />
      </div>

      {/* Table Customization Options */}
      <div className="flex flex-wrap gap-3 mb-6">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={striped} onChange={() => setStriped(!striped)} />
          Striped Rows
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={hover} onChange={() => setHover(!hover)} />
          Hover Effect
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={bordered} onChange={() => setBordered(!bordered)} />
          Bordered
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={compact} onChange={() => setCompact(!compact)} />
          Compact View
        </label>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table
          className={`w-full rounded-lg ${bordered ? "border border-gray-300" : ""} ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          <thead className="bg-gray-200">
            <tr>
              {headers.map((header, colIndex) => (
                <th
                  key={colIndex}
                  className={`px-4 py-2 relative ${bordered ? "border border-gray-300" : ""}`}
                >
                  {editingHeader === colIndex ? (
                    <input
                      value={header}
                      autoFocus
                      onBlur={() => setEditingHeader(null)}
                      onChange={(e) => updateHeader(colIndex, e.target.value)}
                      className="bg-transparent border-b border-dashed border-gray-400 focus:outline-none"
                    />
                  ) : (
                    <div className="flex items-center justify-between">
                      <span>{header}</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setEditingHeader(colIndex)}
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <LuPencil size={16} />
                        </button>
                        <button
                          onClick={() => deleteColumn(colIndex)}
                          className="text-red-500 hover:text-red-700"
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
                  hover ? "hover:bg-blue-50" : ""
                }`}
              >
                {row.map((cell, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-4 py-2 ${bordered ? "border border-gray-300" : ""}`}
                  >
                    {editingCell.row === rowIndex && editingCell.col === colIndex ? (
                      <input
                        value={cell}
                        autoFocus
                        onBlur={() => setEditingCell({ row: null, col: null })}
                        onChange={(e) => updateCell(rowIndex, colIndex, e.target.value)}
                        className="w-full bg-transparent focus:outline-none"
                      />
                    ) : (
                      <div className="flex items-center justify-between">
                        <span>{cell || <span className="text-gray-400">Empty</span>}</span>
                        <button
                          onClick={() => setEditingCell({ row: rowIndex, col: colIndex })}
                          className="text-gray-500 hover:text-gray-800"
                        >
                          <LuPencil size={14} />
                        </button>
                      </div>
                    )}
                  </td>
                ))}
                <td className="px-2 py-2">
                  <button
                    className="text-red-500 hover:text-red-700"
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

      {/* Controls */}
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2"
          onClick={addRow}
        >
          <LuPlus /> Add Row
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2"
          onClick={addColumn}
        >
          <LuPlus /> Add Column
        </button>
      </div>
    </div>
  );
};

export default UploadTable;
