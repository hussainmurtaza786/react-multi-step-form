import { createSlice } from "@reduxjs/toolkit";


const initialState = { step: 1 }
const stepSlice = createSlice({
    name: 'step',
    initialState: initialState,
    reducers: {
        moveToNextStep(state, action) {
            const nextStep = state.step + 1;
            if (nextStep > 3) {
                state.step = 3;
            } else {
                state.step = nextStep;
            }
        },

        moveToPreviousStep(state, action) {
            const prevStep = state.step - 1;
            if (prevStep < 1) {
                state.step = 1;
            } else {
                state.step = prevStep;
            }
        }

    }
})
export const stepAction = stepSlice.actions
export default stepSlice