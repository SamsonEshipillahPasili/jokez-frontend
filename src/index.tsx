import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import SignUpView from "./views/SignUpView";
import SignInView from "./views/SignInView";
import ErrorPage from "./views/ErrorPage";
import MyJokes from "./views/dashboard/MyJokes";
import AllJokes from "./views/dashboard/AllJokes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MyJokes />,
                index: true
            },
            {
                path: '/my_jokes',
                element: <MyJokes />,
            },
            {
                path: '/all_jokes',
                element: <AllJokes />
            }
        ]
    },
    {
        path: '/sign_up',
        element: <SignUpView />,
        errorElement: <ErrorPage />
    },
    {
        path: '/sign_in',
        element: <SignInView />,
        errorElement: <ErrorPage />
    }
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <RouterProvider router={routes} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
