import About from "../pages/About"
import Posts from "../pages/Posts"
import Error from "../pages/Error"
import PostIdPage from "../pages/PostIdPage"


export const routes = [
    {path: "/about", element: About},
    {path: "/posts", element: Posts},
    {path: "/posts/:id", element: PostIdPage},
    {path: "*", element: Error}
]