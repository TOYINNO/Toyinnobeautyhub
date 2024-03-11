import { createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../../type";

interface StoreState {
  productData: ProductProps[];
}

const initialState: StoreState = {
  productData: [],
};

export const beautyhubSlice = createSlice({
  name: "toyinnobeautyhub",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.productData.find((item: ProductProps) => {
        item?._id === action?.payload?._id;
      });
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    increasingQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      existingProduct && existingProduct.quantity++;
    },
    decreasingQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: ProductProps) => item._id === action.payload._id
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1;
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item._id !== action.payload
      );
    },

    resetCart: (state, action) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  increasingQuantity,
  decreasingQuantity,
  resetCart,
  deleteProduct,
} = beautyhubSlice.actions;
export default beautyhubSlice.reducer;
