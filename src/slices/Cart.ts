import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interface/product/product";

const initialState = {
    items: []
} as { items: any[] }

const CartSlice = createSlice({
    name: "cart", 
    initialState,
    reducers: {
        add: (state, action: PayloadAction<{ newProduct: IProduct, quantity: number}>) => {
            const { newProduct, quantity } = action.payload
            // const quantity = action.payload;
            // const newProduct  = action.payload;
           
            const existProductIndex = state.items.findIndex(item => item.id == item.newProduct.id)
            if(existProductIndex < 1){
                state.items.push({ newProduct, quantity})
            }else{
                state.items[existProductIndex].quantity+=quantity;
            }
        },
        increase: (state, action: PayloadAction<number>) => {
            state.items.find((item: any) => item.id === action.payload).quantity++
        },
        decrease: (state, action: PayloadAction<number>) => {
            const currentProduct = state.items.find((item: any) => item.id === action.payload)
            currentProduct.quantity--;
            if (currentProduct.quantity < 1) {
                const confirm = window.confirm('Are you sure?');
                if (confirm) state.items = state.items.filter((item) => item.id !== action.payload)
                currentProduct.quantity = 1
            }
        }
    }
})

export const { add, increase, decrease } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;