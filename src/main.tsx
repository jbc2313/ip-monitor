import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ViteDefault from "./routes/viteDefault";
import CameraOne from "./routes/cameraOne";
import CameraTwo from "./routes/cameraTwo";
import CameraThree from "./routes/cameraThree";
import ErrorPage from "./routes/errorPage";
import "./style.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "vitedefault",
                element: <ViteDefault />,
            },
            {
                path: "cameraone",
                element: <CameraOne />,
            },
            {
                path: "cameratwo",
                element: <CameraTwo />,
            },
            {
                path: "camerathree",
                element: <CameraThree />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
