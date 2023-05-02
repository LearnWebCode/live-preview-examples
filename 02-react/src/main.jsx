import React from "react"
import ReactDOM from "react-dom/client"
import HomePage from "./Homepage.jsx"
import AboutPage from "./AboutPage.jsx"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/about",
    element: <AboutPage />
  }
])

import "./styles.css"

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
