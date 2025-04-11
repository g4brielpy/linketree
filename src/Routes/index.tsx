import { createBrowserRouter } from "react-router-dom";

// Páginas da aplicação
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";
import { Networks } from "../pages/Networks";
import { Private } from "./Private";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <Private>
        <Admin />
      </Private>
    ),
  },
  {
    path: "/admin/networks",
    element: (
      <Private>
        <Networks />
      </Private>
    ),
  },
]);
