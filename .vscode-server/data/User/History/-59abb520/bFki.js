import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const postsApi = createApi({
    reducerPath:'posts',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/'}),
    endpoints : (build) => ({
        getPosts : build.query({
            query : () => 'posts',
        })
    })
})

export const {useGetPostsQuery} = postsApi;