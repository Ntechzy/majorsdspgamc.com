import React, { useState } from "react";
import {
  LuUpload,
  LuFile,
  LuImage,
  LuFileText,
  LuMusic,
  LuVideo,
  LuX,
} from "react-icons/lu";

const UploadFiles = () => {
  const [files, setFiles] = useState([]);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    const mapped = selected.map((file) => ({
      file,
      preview:
        file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
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
          className="w-full h-32 object-cover rounded-md"
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

  // Handle Submit
  const handleSubmit = () => {
    if (files.length === 0) {
      alert("Please select at least one file before submitting.");
      return;
    }

    // Example: log files to console
    console.log("Submitted files:", files.map((f) => f.file));

    // Here you can call an API to upload files to backend
    alert(`You submitted ${files.length} file(s)!`);
  };

  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200">
      <h2 className="text-xl font-bold text-black mb-4">Upload Files</h2>

      {/* Upload button */}
      <label className="cursor-pointer px-4 py-2 rounded-lg flex items-center justify-center gap-2 text-white bg-[#f8a713] hover:opacity-90 transition w-fit">
        <LuUpload size={20} />
        <span>Select Files</span>
        <input type="file" multiple onChange={handleFiles} className="hidden" />
      </label>

      {/* Preview Section */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
        {files.map((fileObj, index) => (
          <div
            key={index}
            className="relative bg-gray-100 p-2 rounded-lg shadow-sm border border-gray-200"
          >
            {renderPreview(fileObj)}
            <p className="text-xs mt-2 truncate text-center text-black">
              {fileObj.file.name}
            </p>
            <button
              onClick={() => removeFile(index)}
              className="absolute top-1 right-1 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
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
            className="px-5 py-2 bg-[#287e18] text-white rounded-lg font-medium hover:opacity-90 transition"
          >
            Submit Files
          </button>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
