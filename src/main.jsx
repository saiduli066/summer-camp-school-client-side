import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes.jsx';
import AuthProviders from './Providers/AuthProviders.jsx';
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="max-w-7xl mx-auto ">
        <AuthProviders>
          <RouterProvider router={router} />
        </AuthProviders>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
