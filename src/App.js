import * as React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { createContext, useReducer } from "react";
import MarketPage from "./pages/MarketPage";
import MainPage from "./pages/MainPage"
import LoginPage from "./pages/LoginPage"

let loginEmail = ""

if (localStorage.getItem("LoginValue") === null) {
  localStorage.setItem("LoginValue", "")
}
if (localStorage.getItem("LoginValue") !== null) {
  loginEmail = localStorage.getItem("LoginValue")
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/market",
    element: <MarketPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
]);

export const ContextLogin = createContext(null)

function reducer(state, action) {
  switch (action.type) {
    case "login":
      localStorage.setItem("LoginValue", action.payload)
      return { ...state, login: true }
    case "logout":
      localStorage.setItem("LoginValue", "")
      return { ...state, login: false }
    default:
      console.error("Reducer error")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { login: loginEmail.length > 0 ? true : false })
  return (
    <ContextLogin.Provider value={{ state: state, dispatch: dispatch }}>
      <RouterProvider router={router} />
    </ContextLogin.Provider>
  );
}

export default App;
