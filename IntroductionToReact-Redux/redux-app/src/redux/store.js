import { configureStore} from "@reduxjs/toolkit";
import messageSlice from "./slice/messageSlice";
import productReducer from "./slice/productSlice";

export default configureStore({
    reducer: {
        // messageReducer: messageSlice
        productReducer
    }
})