import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import { HelmetProvider } from "react-helmet-async";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className="max-w-7xl mx-auto ">
          <AuthProviders>
            <RouterProvider router={router} />
          </AuthProviders>
        </div>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
