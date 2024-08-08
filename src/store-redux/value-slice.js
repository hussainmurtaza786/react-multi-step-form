import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    personal: {
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
    },
    demographic: {
        dateOfBirth: "",
        gender: "",
        mobileNo: "",
        city: "",
        address: "",
        country: "",

    },

}

const valueSlice = createSlice({
    name: 'form',
    initialState: initialState,
    reducers: {
        personalValue(state, action) {
            state.personal.email = action.payload.email;
            state.personal.userName = action.payload.userName;
            state.personal.password = action.payload.password;
            state.personal.confirmPassword = action.payload.confirmPassword;
        },
        demographicValue(state, action) {
            state.demographic.dateOfBirth = action.payload.dateOfBirth;
            state.demographic.gender = action.payload.gender;
            state.demographic.mobileNo = action.payload.mobileNo;
            state.demographic.city = action.payload.city;
            state.demographic.address = action.payload.address;
            state.demographic.country = action.payload.country;
        }

    }
})

export const valueAction = valueSlice.actions
export default valueSlice
