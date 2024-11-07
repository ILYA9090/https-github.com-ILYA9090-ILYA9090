import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "",
      providesTags : ['Posts'],
    }),
    addPosts: builder.mutation({
      query: (post) => ({
        url: '',
        method: "POST",
        body: post,
      }),
      invalidatesTags:['Posts']
    }),
    removePosts: builder.mutation({
        query: (id) => ({
          url: id,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation, useRemovePostsMutation } =
  postsApi;
