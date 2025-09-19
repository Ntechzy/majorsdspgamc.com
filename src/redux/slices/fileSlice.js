// src/redux/slices/fileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axiosInstance"

// ✅ Upload files
export const uploadFiles = createAsyncThunk(
  "files/upload",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await API.post("/files/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // required for file upload
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Upload failed");
    }
  }
);

// ✅ Fetch files by category
export const fetchFilesByCategory = createAsyncThunk(
  "files/fetchByCategory",
  async (category, { rejectWithValue }) => {
    try {
      const res = await API.get(`/files/category/${category}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Fetch failed");
    }
  }
);

// ✅ Delete file
export const deleteFile = createAsyncThunk(
  "files/delete",
  async (fileId, { rejectWithValue }) => {
    try {
      const res = await API.delete(`/files/${fileId}`);
      return { id: fileId, ...res.data };
    } catch (err) {
      return rejectWithValue(err.response?.data || "Delete failed");
    }
  }
);

const fileSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Upload
      .addCase(uploadFiles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = [...state.files, ...action.payload.data];
        state.message = action.payload.message;
      })
      .addCase(uploadFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch
      .addCase(fetchFilesByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilesByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload.data;
      })
      .addCase(fetchFilesByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete
      .addCase(deleteFile.fulfilled, (state, action) => {
        state.files = state.files.filter((f) => f._id !== action.payload.id);
        state.message = action.payload.message || "File deleted";
      })
      .addCase(deleteFile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default fileSlice.reducer;
