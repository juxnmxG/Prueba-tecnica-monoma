import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./Routes.tsx";
import PokemonProvider from "./Contexts/PokemonContext.tsx";
import PaginateContextProvider from "./Contexts/PaginateContext.tsx";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PaginateContextProvider>
      <PokemonProvider>
        <RouterProvider router={router} />
      </PokemonProvider>
    </PaginateContextProvider>
  </React.StrictMode>
);
