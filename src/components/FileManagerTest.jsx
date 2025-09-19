import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadFiles,
  fetchFilesByCategory,
  deleteFile,
} from "../redux/slices/fileSlice";

const FileManager = () => {
  const dispatch = useDispatch();
  const { files, loading, error, message } = useSelector((state) => state.files);
  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    // 👇 Change category if needed: "image", "pdf", etc.
    dispatch(fetchFilesByCategory("image"));
  }, [dispatch]);

  const handleUpload = (e) => {
    e.preventDefault();
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("files", file); // backend expects "files"
    });
    formData.append("title", "Affilation letter");
    formData.append("page", "affilations");
    formData.append("category", "images");

    dispatch(uploadFiles(formData));
    setSelectedFiles([]);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">📂 File Manager</h2>

      {/* Alerts */}
      {loading && (
        <p className="text-blue-500 text-center mb-3 font-medium">
          Uploading / Fetching...
        </p>
      )}
      {error && (
        <p className="text-red-500 text-center mb-3 font-medium">{error}</p>
      )}
      {message && (
        <p className="text-green-600 text-center mb-3 font-medium">{message}</p>
      )}

      {/* Upload Form */}
      <form
        onSubmit={handleUpload}
        className="flex flex-col items-center gap-4 mb-10"
      >
        <input
          type="file"
          multiple
          className="border rounded-md p-2 w-full md:w-1/2"
          onChange={(e) => setSelectedFiles([...e.target.files])}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded-md shadow hover:bg-blue-700 transition"
        >
          Upload
        </button>
      </form>

      {/* Files Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {files.map((file) => (
          <div
            key={file._id}
            className="bg-white rounded-lg shadow-md overflow-hidden border hover:shadow-lg transition"
          >
            {/* Preview */}
            {file.type.includes("image") ? (
              <img
                src={file.url}
                alt={file.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-500">
                📄 {file.type}
              </div>
            )}

            {/* Info */}
            <div className="p-4 flex flex-col justify-between">
              <h3 className="font-semibold text-gray-800 truncate">
                {file.title}
              </h3>
              <p className="text-sm text-gray-500">{file.page}</p>

              <div className="mt-4 flex justify-between items-center">
                <a
                  href={file.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline text-sm"
                >
                  View
                </a>
                <button
                  onClick={() => dispatch(deleteFile(file._id))}
                  className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Data */}
      {!loading && files.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          No files found in this category.
        </p>
      )}
    </div>
  );
};

export default FileManager;

