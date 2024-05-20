import React from "react"
import { Outlet, useRoutes } from "react-router-dom"
import HomePage from "../pages/HomePage"

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        // <AppLayout>
        <Outlet />
        // </AppLayout>
      ),
      children: [{ element: <HomePage />, index: true }],
    },
  ])

  return routes
}

export default Router
