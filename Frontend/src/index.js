import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./redux/store";

import "./index.css";

import Registration from "./registration-page/Registration";
import Login from "./login-page/Login";
import SelectProfil from "./select-profil-page/SelectProfil";
import Main from "./main-page/Main";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "/selectProfil",
    element: <SelectProfil />,
  },
  {
    path: "/main",
    element: <Main />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
