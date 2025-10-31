import type { RouteObject } from "react-router-dom"
import MovieList from "../components/PrintMovie/MovieList"
import UserForm from "../components/userForm/UserForm"
import PrintMovieWrapper from "../components/PrintMovie/PrintMovieWrapper"
import Main from "../layout/Main"
import PageNotFound from "../layout/PageNotFound"
import HomePage from "../layout/HomePage"

export const appRoutes : RouteObject[] = [
    {
        path: "/",
        element: <Main/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/movies",
                element:<MovieList/>
            },
            {
                path: "/movies/:id",
                element: <PrintMovieWrapper/>
            },
            {
                path: "/user-form",
                element: <UserForm/>
            },
            {
                path: "*",
                element: <PageNotFound/>
            }
        ]
    },

]