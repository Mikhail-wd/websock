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
      return { ...state, login: true }
    default:
      console.error("Reducer error")
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { loging: false })
  return (
    <ContextLogin.Provider value={{ state: state, dispatch: dispatch }}>
      <RouterProvider router={router} />
    </ContextLogin.Provider>
  );
}

export default App;
