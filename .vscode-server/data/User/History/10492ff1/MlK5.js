import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postApi",
  tagTypes: ['Posts'],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://127.0.0.1:3001",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts?_limit=15",
      providesTags : ['Posts'],
    }),
    getPostsById : builder.query ({
      query : (id) => `/posts/${id}`,
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
          url: `/posts/${id}`,
          method: 'DELETE',
        }),
        invalidatesTags:['Posts']
      }),
  }),
});

export const { useGetPostsQuery, useAddPostsMutation, useRemovePostsMutation,  useGetPostsByIdQuery } =
  postsApi;
