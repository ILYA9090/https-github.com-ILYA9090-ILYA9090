import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



export const commentsApi = createApi({
    reducerPath: 'commentsApi',
    tagTypes: ['Comments'],
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:5000'}),
    endpoints:(builder) => ({
        getComments: builder.query({
            query:() => '/comments',
            providesTags:['Comments']
        }),
        addComments : builder.mutation({
            query:(post) => ({
                url: '/comments',
                method: 'POST',
                body: post
            })
        }),
        deleteComments : builder.mutation({
            query:(id) => ({
                url: `/comments/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {useGetCommentsQuery, useAddCommentsMutation, useDeleteCommentsMutation } = commentsApi;