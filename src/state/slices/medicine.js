import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  medicineAddAPI,
  medicineDeleteAPI,
  medicinesListAPI,
} from "../../service/medicine";

export let fetchMedicines = createAsyncThunk(
  "list/medicines",
  async ({ name = "" }, thunkApi) => {
    try {
      let response = await medicinesListAPI(name);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let addMedicine = createAsyncThunk(
  "add/medicine",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await medicineAddAPI(id);
      return response.data;
    } catch (error) {
      let errorMsg = error.response.data?.message;
      return thunkApi.rejectWithValue(errorMsg ? errorMsg : error.message);
    }
  }
);
export let deleteMedicine = createAsyncThunk(
  "delete/medicine",
  async ({ id = "" }, thunkApi) => {
    try {
      let response = await medicineDeleteAPI(id);
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
  medicinesList: [],
};

let medicineSlice = createSlice({
  name: "allrgy",
  initialState,
  reducers: {
    resetAllMedicineStatus: (state) => {
      state.medicinesList = [];
      state.errorMsg = "";
      state.loading = false;
      state.successMsg = "";
    },
  },
  extraReducers: (builder) => {
    // medicines list fetch reducer
    builder.addCase(fetchMedicines.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
      state.medicinesList = [];
    });

    builder.addCase(fetchMedicines.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "medicines Fetched";
      state.medicinesList = action.payload;
    });

    builder.addCase(fetchMedicines.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
      state.medicinesList = [];
    });

    // medicine add reducer
    builder.addCase(addMedicine.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(addMedicine.fulfilled, (state, action) => {
      // console.log(action.payload,'in medice add')
      // state.medicinesList.push(action.payload.medicines[0])
      // state.medicinesList=state.medicinesList
      // console.log(action.payload.medicines,'med list')
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Added";
    });

    builder.addCase(addMedicine.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });

    // medicine remove reducer
    builder.addCase(deleteMedicine.pending, (state) => {
      state.loading = true;
      state.errorMsg = "";
      state.successMsg = "";
    });

    builder.addCase(deleteMedicine.fulfilled, (state, action) => {
      state.loading = false;
      state.errorMsg = "";
      state.successMsg = "Medicine deleted";
    });

    builder.addCase(deleteMedicine.rejected, (state, action) => {
      state.loading = false;
      state.errorMsg = action.payload;
      state.successMsg = "";
    });
  },
});

let medicineReducer = medicineSlice.reducer;
export let { resetAllMedicineStatus } = medicineSlice.actions;
export default medicineReducer;
