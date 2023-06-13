import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getUserAccount: builder.query({
      query: () => "account",
      providesTags: ["account"],
    }),
    addUserAccount: builder.mutation({
      query: (ammount, id) => ({
        url: "account",
        method: "POST",
        body: { ammount, id },
      }),
      invalidatesTags: ["account"],
    }),
    deleteUserAccount: builder.mutation({
      query: (id) => ({
        url: `account/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["account"],
    }),
    updateUserAccount: builder.mutation({
      query: ({id,ammount}) => ({
        url: `account/${id}`,
        method: "PATCH",
        body: { ammount },
      }),
      invalidatesTags : ['account']
    }),
  }),
});
export const {
  useGetUserAccountQuery,
  useAddUserAccountMutation,
  useDeleteUserAccountMutation,
  useUpdateUserAccountMutation,
} = adminApi;
