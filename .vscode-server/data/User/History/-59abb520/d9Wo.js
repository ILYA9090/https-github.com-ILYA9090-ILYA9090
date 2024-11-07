import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";


export const postsApi = createApi({
    reducerPath:'postsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com/posts'}),
    endpoints : (builder) => ({
        getPosts : builder.query({
            query : () => '',
        })
    })
})

export const {useGetPostsQuery} = postsApi;