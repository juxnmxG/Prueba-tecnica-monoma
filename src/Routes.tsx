import Login from "./Pages/Auth/Login";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import RoutePrivate from "./components/RoutePrivate";

export const routes: object[] = [
  {
    path: "/",
    element: <RoutePrivate Component={Home} />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
];
