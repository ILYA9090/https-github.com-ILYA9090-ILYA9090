import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts?_limit=15",
      providesTags : ['Posts'],
    }),
    addPosts: builder.mutation({
      query: (post) => ({
        url: "/posts",
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
