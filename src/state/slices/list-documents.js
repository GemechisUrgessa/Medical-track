import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getFiles from "../../service/list-documents";

const initialState = {
  files: [],
  isLoading: false,
  isLoaded: false,
  errorMessage: null,
};

export const fetchFiles = createAsyncThunk(
  "files/fetch",
  async (_, thunkApi) => {
    try {
      const response = await getFiles();
      const responseData = response.json();
      return responseData.data;
    } catch (error) {
      const errorMessage = error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

let fetchFilesSlice = createSlice({
  name: "files",
  initialState,
  reducers: {
    fetchFilesStart: (state) => {
      state.isLoading = true;
    },
    fetchFilesSuccess: (state, action) => {
      state.isLoading = false;
      state.files = action.payload;
    },
    fetchFilesError: (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchFiles.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchFiles.fulfilled, (state, action) => {
      state.isLoading = false;
      state.files = action.payload;
    });

    builder.addCase(fetchFiles.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});
export const { fetchFilesStart, fetchFilesSuccess, fetchFilesError } =
  fetchFilesSlice.actions;
export default fetchFilesSlice.reducer;
