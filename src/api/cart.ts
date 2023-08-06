import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../interface/product/product';
import { pause } from '../utils/pause';

const cartApi = createApi({
    reducerPath: "cart",
    tagTypes: ['Cart'],
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL, fetchFn: async (...arg) => {
            await pause(1000);
            return await fetch(...arg)
        }
    }),
    endpoints: (builder) => ({
        getCart: builder.query<any, void>({
            query: () => `/cart`,
            providesTags: ['Cart']
        }),
        getCarttById: builder.query<any, number | string>({
            query: (id) => `/cart/${id}`,
            providesTags: ['Cart']
        }),
        addCart: builder.mutation<any, any>({
            query: (cart) => ({
                url: `/cart/:id`,
                method: "POST",
                body: cart
            }),
            invalidatesTags: ['Cart']
        }),
        // removeProduct: builder.mutation<void, number | string>({
        //     query: (id) => ({
        //         url: `/products/${id}`,
        //         method: "DELETE",
        //     }),
        //     invalidatesTags: ['Product']
        // }),
        // updateProduct: builder.mutation<IProduct, IProduct>({
        //     query: (product) => ({
        //         url: `/products/${product.id}`,
        //         method: "PATCH",
        //         body: product
        //     }),
        //     invalidatesTags: ['Product']
        // })
    })
});
export const {
    useGetCartQuery,
    useGetCarttByIdQuery,
    useAddCartMutation,
    // useUpdateProductMutation,
    // useRemoveProductMutation
} = cartApi;
export const productReducer = cartApi.reducer;
export default cartApi;