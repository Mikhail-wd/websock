import * as React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
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
function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
