import React from "react";
import ReactDOM from "react-dom/client";
import router from "./routes";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { LoginProvider } from "./manager/auth/authProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <LoginProvider>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </LoginProvider>
  </QueryClientProvider>
);
