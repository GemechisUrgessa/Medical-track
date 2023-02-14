import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import  upload from '../../service/new-document';
import { getUserData } from "./user";

const initialState = {
    uploadData: {
        pendingUploads: false,
        errorMessage: '',
        successUploads: false,
    }
}

export const uploadData = createAsyncThunk(
    'newDocument/upload',
    async ({document, documentTitle, documentType, description, enqueueSnackbar, dispatch}, thunkApi) => {
        try {
            console.log(document, documentTitle, documentType, description)
            let response = await upload(document, documentTitle, documentType, description)
            console.log(response);
            console.log("2upload")
            const variant = 'success'
            enqueueSnackbar('Document Successfully Added!', {variant})
            dispatch(getUserData());
            return response.data;

        } catch (error) {
            console.log(error, "error");
            const errorMessage = error.message
            return thunkApi.rejectWithValue(errorMessage);
        }
    }
)
let addDocumentSlice = createSlice({
    name: 'newDocument',
    initialState,
    reducers: {
        resetStatus:(state)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=false
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadData.pending, (state)=>{
            state.uploadData.pendingUploads=true
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=true
        })

        builder.addCase(uploadData.fulfilled, (state,action)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=''
            state.uploadData.successUploads=true
        })

        builder.addCase(uploadData.rejected, (state,action)=>{
            state.uploadData.pendingUploads=false
            state.uploadData.errorMessage=action.payload
            state.uploadData.successUploads=false
        })
    }
})
export const {resetStatus} = addDocumentSlice.actions
export default addDocumentSlice.reducer
