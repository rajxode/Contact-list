
// for creating store
import { configureStore } from "@reduxjs/toolkit";

import { contactReducer } from "../Reducers/contactReducer";

// creating store from reducers
export const store = configureStore({
    reducer:{
        contactReducer
    }
})