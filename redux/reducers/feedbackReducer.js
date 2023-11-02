import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    Contact UsCreated: false,
    loading: false,
    error: null
}

const Contact UsSlice = createSlice({
    name: "Contact Us",
    initialState,
    reducers: {
        newContact UsRequest: (state) => {
            state.loading = true
        },
        newContact UsSuccess: (state, action) => {
            state.loading = false;
            state.Contact UsCreated = action.payload.success
        },
        newContact UsFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload
        },
        resetContact Us: (state) => {
            state.Contact UsCreated = false;
            state.Contact UsUpdated = false
        },
        clearErrors: (state) => {
            state.error = null
        }
    }
})

export const {
    newContact UsRequest,
    newContact UsSuccess,
    newContact UsFailed,
    resetContact Us,
    clearErrors
} = Contact UsSlice.actions

export default Contact UsSlice.reducer