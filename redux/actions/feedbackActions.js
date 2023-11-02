import axios from "axios";

import { newContact UsFailed, newContact UsRequest, newContact UsSuccess } from "../reducers/Contact UsReducer";


// 1. New Contact Us
export const createContact Us = (formData) => async (dispatch) => {
    dispatch(newContact UsRequest());

    try {
        const { data } = await axios.post(
            "/api/Contact Us/create", formData
        );

        dispatch(newContact UsSuccess(data));
    } catch (error) {
        dispatch(
            newContact UsFailed(
                error?.response?.data.message ||
                error.message ||
                "Something went wrong !"
            )
        );
    }
};