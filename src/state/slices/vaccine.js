import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  vaccineAddAPI,
  vaccineDeleteAPI,
  vaccinesListAPI,
} from "../../service/vaccine";

export let fetchVaccines = createAsyncThunk(
  "list/vaccines",
  async ({ name = "" }, thunkApi) => {
    try {
      let response = await vaccinesListAPI(name);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let addVaccine = createAsyncThunk(
  "add/vaccine",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await vaccineAddAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let deleteVaccine = createAsyncThunk(
  "delete/vaccine",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await vaccineDeleteAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);

let initialState = {
  loading: false,
  successMsg: "",
  errorMsg: "",
  vaccinesList: [],
};

let vaccineSlice = createSlice({
  name: "allrgy",
  initialState,
  reducers: {
    resetAllVaccineStatus: (state) => {
      state.vaccinesList = [];
      state.errorMsg = "";
      state.loading = false;
      state.successMsg = "";
    },
  },
  extraReducers: (builder) => {
    // vaccines list fetch reducer
    builder.addCase(fetchVaccines.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
      state.vaccinesList = [];
    });

    builder.addCase(fetchVaccines.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Vaccines Fetched";
      state.vaccinesList = action.payload;
    });

    builder.addCase(fetchVaccines.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
      state.vaccinesList = [];
    });

    // vaccine add reducer
    builder.addCase(addVaccine.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(addVaccine.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Added";
    });

    builder.addCase(addVaccine.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });

    // vaccine remove reducer
    builder.addCase(deleteVaccine.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(deleteVaccine.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Vaccine deleted";
    });

    builder.addCase(deleteVaccine.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });
  },
});

let vaccineReducer = vaccineSlice.reducer;
export let { resetAllVaccineStatus } = vaccineSlice.actions;
export default vaccineReducer;
