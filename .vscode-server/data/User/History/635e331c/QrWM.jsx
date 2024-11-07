import React from 'react'
import {Route,  Navigate, Routes } from "react-router-dom";
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/postsApp" element={<PostsApp />} />
        <Route path="/postsJson" element={<PostsJson />} />
        <Route path="/commentsList" element={<CommentsList />} />
        <Route path="*" element={<Navigate to="/header" replace />} />
      </Routes>
    </div>
  )
}

export default AppRouter
