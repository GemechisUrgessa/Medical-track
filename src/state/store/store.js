import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/user";
import addDocumentSlice from "../slices/new-document";
import fetchFilesSlice from "../slices/list-documents";
import editFileSlice from "../slices/edit-document";
import deleteFileSlice from "../slices/delete-document";
import allergyReducer from "../slices/allergy";
import medicineReducer from "../slices/medicine";
import diagnosesReducer from "../slices/diagnoses";
import vaccineReducer from "../slices/vaccine";

let rootReducer = combineReducers({
  user: userReducer,
  addDocument: addDocumentSlice,
  files: fetchFilesSlice,
  editDocument: editFileSlice,
  deleteDocument: deleteFileSlice,
  allergy: allergyReducer,
  vaccine: vaccineReducer,
  medicine: medicineReducer,
  diagnoses: diagnosesReducer,
});

let store = configureStore({
  reducer: rootReducer,
});

export default store;
