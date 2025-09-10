import React, { useState } from "react";
import { LuUpload, LuFile, LuFileText, LuMusic, LuVideo, LuX } from "react-icons/lu";

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

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
      return (
        <img
          src={preview}
          alt={file.name}
          className="w-full h-32 object-cover rounded-md border border-gray-300"
        />
      );
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

  const handleSubmit = () => {
    if (files.length === 0) {
      alert("Please select at least one file before submitting.");
      return;
    }
    console.log("Submitted files:", files.map((f) => f.file));
    alert(`You submitted ${files.length} file(s)!`);
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Files</h2>

      {/* Upload button */}
      <label className="cursor-pointer px-5 py-3 rounded-lg flex items-center justify-center gap-3 text-white bg-gradient-to-r from-yellow-400 to-orange-500 hover:opacity-90 transition shadow-md">
        <LuUpload size={22} />
        <span>Select Files</span>
        <input type="file" multiple onChange={handleFiles} className="hidden" />
      </label>

      {/* Preview Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mt-6 w-full">
        {files.map((fileObj, index) => (
          <div
            key={index}
            className="relative bg-gray-50 p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition"
          >
            {renderPreview(fileObj)}
            <p className="text-xs mt-2 truncate text-center text-gray-800">{fileObj.file.name}</p>
            <button
              onClick={() => removeFile(index)}
              className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700 transition"
            >
              <LuX size={14} />
            </button>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      {files.length > 0 && (
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-md transition"
          >
            Submit Files
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
