import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => '/posts',
      providesTags : ['Posts'],
    }),
    getComments: builder.query({
      query : () => '/comments',
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
          url: `/posts/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      }),
      removeAllPosts: builder.mutation({
        query:(data) => ({
          url:`/posts${data}`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      })
  }),
});

export const { useGetPostsQuery, useAddPostsMutation, useRemovePostsMutation, useRemoveAllPostsMutation} =
  postsApi;
