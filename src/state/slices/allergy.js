import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  allergiesListAPI,
  allergyAddAPI,
  allergyDeleteAPI,
} from "../../service/allergy";

let initialState = {
  loading: false,
  successMsg: "",
  errorMsg: "",
  allergiesList: [],
};

export let fetchAllergies = createAsyncThunk(
  "list/allergies",
  async ({ name = "" }, thunkApi) => {
    try {
      let response = await allergiesListAPI(name);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let addAllergy = createAsyncThunk(
  "add/allergy",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await allergyAddAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let deleteAllergy = createAsyncThunk(
  "delete/allergy",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await allergyDeleteAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);

let allergySlice = createSlice({
  name: "allrgy",
  initialState,
  reducers: {
    resetAllAllegyStatus: (state) => {
      state.allergiesList = [];
      state.errorMsg = "";
      state.loading = false;
      state.successMsg = "";
    },
  },
  extraReducers: (builder) => {
    // allergies list fetch reducer
    builder.addCase(fetchAllergies.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
      state.allergiesList = [];
    });

    builder.addCase(fetchAllergies.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Allergies Fetched";
      state.allergiesList = action.payload;
    });

    builder.addCase(fetchAllergies.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
      state.allergiesList = [];
    });
    // allery add reducer
    builder.addCase(addAllergy.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(addAllergy.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Added";
    });

    builder.addCase(addAllergy.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });

    // allergy remove reducer
    builder.addCase(deleteAllergy.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(deleteAllergy.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Allergy deleted";
    });

    builder.addCase(deleteAllergy.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });
  },
});

let allergyReducer = allergySlice.reducer;
export let { resetAllAllegyStatus } = allergySlice.actions;
export default allergyReducer;
