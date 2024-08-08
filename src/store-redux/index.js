import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "./step-slice";
import valueSlice from "./value-slice";

const store = configureStore({
    reducer: {step:stepSlice.reducer , form:valueSlice.reducer}
})


export default store