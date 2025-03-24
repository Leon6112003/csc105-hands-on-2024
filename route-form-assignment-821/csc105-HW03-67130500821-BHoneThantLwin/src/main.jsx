import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";
import FavouritesPage from "./pages/FavouritesPage";
import FavouriteDetailPage from "./pages/FavouriteDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/fav",
    element: <FavouritesPage />,
  },
  {
    path: "/fav/:id",
    element: <FavouriteDetailPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

export { router };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
