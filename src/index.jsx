import { createRoot } from 'react-dom/client';
import { HomePage } from './pages/HomePage';
import { createBrowserRouter, RouterProvider, Link, Outlet } from 'react-router-dom';
import './global.css';
import React from "react";
import Registration from "./components/Registration";

const App = () => {
  return (
    <div>
      <Registration />
    </div>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
