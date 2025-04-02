import { createBrowserRouter } from "react-router-dom";

// Páginas da aplicação
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { Login } from "../pages/Login";
import { Networks } from "../pages/Networks";

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
    element: <Admin />,
  },
  {
    path: "/admin/networks",
    element: <Networks />,
  },
]);
