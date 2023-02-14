import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  diagnosesAddAPI,
  diagnosesDeleteAPI,
  diagnosesListAPI,
} from "../../service/diagnoses";

export let fetchDiagnoses = createAsyncThunk(
  "list/diagnosis",
  async ({ name = "" }, thunkApi) => {
    try {
      let response = await diagnosesListAPI(name);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let addDiagnoses = createAsyncThunk(
  "add/diagnoses",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await diagnosesAddAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let deleteDiagnoses = createAsyncThunk(
  "delete/diagnoses",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await diagnosesDeleteAPI(id);

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
  diagnosesList: [],
};

let DiagnosesSlice = createSlice({
  name: "diagnoses",
  initialState,
  reducers: {
    resetAllDiagnosesStatus: (state) => {
      state.diagnosesList = [];
      state.errorMsg = "";
      state.loading = false;
      state.successMsg = "";
    },
  },
  extraReducers: (builder) => {
    // diagnoses list fetch reducer
    builder.addCase(fetchDiagnoses.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
      state.diagnosesList = [];
    });

    builder.addCase(fetchDiagnoses.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Dignosis Fetched";
      state.diagnosesList = action.payload;
    });

    builder.addCase(fetchDiagnoses.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
      state.diagnosesList = [];
    });

    // diagnoses add reducer
    builder.addCase(addDiagnoses.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(addDiagnoses.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Added";
    });

    builder.addCase(addDiagnoses.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });

    // diagnoses remove reducer
    builder.addCase(deleteDiagnoses.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

        builder.addCase(deleteDiagnoses.fulfilled, (state, action) => {
            state.loading = false
            state.errorMsg = ''
            state.successMsg = 'Diagnoses deleted'
        })

    builder.addCase(deleteDiagnoses.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });
  },
});

let diagnosesReducer = DiagnosesSlice.reducer;
export let { resetAllDiagnosesStatus } = DiagnosesSlice.actions;
export default diagnosesReducer;