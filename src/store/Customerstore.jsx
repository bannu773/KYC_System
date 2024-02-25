import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: "",
    email : "",
    phone : "",
    KNN : ""
}

const Customerstore = createSlice({
  name: "customerDetails",
  initialState,
  reducers: {
    addCustomerdetails : (state,action) => {
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.phone = action.payload.phone;
        state.KNN = action.payload.KNN;
        
    },
  }
});

export const {addCustomerdetails} = Customerstore.actions

export default Customerstore.reducer