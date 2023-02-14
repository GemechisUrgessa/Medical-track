import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import deleteFile from '../../service/delete-document';
import { getUserData } from "./user";


const initialState = {
    isDeleted: false,
    errorMessage: null,
}

export const deleteFileById = createAsyncThunk(
    'deleteFileById',
    async ({Id, enqueueSnackbar, dispatch},thunkApi) => {
        try {
            const response = await deleteFile(Id)
            const variant = 'success';
            enqueueSnackbar('Document Successfully Deleted!', {variant} );
            dispatch(getUserData())
            return response.data;

        } catch (error) {
            const variant = 'error';
            enqueueSnackbar('Document not Successfully Deleted!', {variant} );
   
            return thunkApi.rejectWithValue(error.message);
        }
    }
)

let deleteFileSlice = createSlice({
    name: 'delete-file',
    initialState,
    reducers: {
        
    },

    extraReducers: (builder) => {
        builder.addCase(deleteFileById.pending, (state) => {
            state.isDeleted = false;
        })

        builder.addCase(deleteFileById.fulfilled, (state, action) => {
            state.isDeleted = true;
        })

        builder.addCase(deleteFileById.rejected, (state, action) => {
            state.isDeleted = false;
            state.errorMessage = action.payload;
        })
    }
})
// export const { fetchFilesStart, fetchFilesSuccess, fetchFilesError } = fetchFilesSlice.actions
export default deleteFileSlice.reducer