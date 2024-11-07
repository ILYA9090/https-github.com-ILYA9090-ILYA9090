import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath:'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints : (build) => ({
        getPosts : build.query({
            query : () => '',
        })
    })
})

export const {useGetPostsQuery} = postsApi;