import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CV from './curriculum'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Menu from './menu/menu.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "curriculum",
    element: <CV />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Menu/>
    <RouterProvider router={router} />
  </React.StrictMode>
);