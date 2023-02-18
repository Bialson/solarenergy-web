import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './routes/dashboard';
import { ErrorPage } from './routes/error';
import './styles/_main.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Test } from './routes/test';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/test',
		element: <Test />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={Router} />
);
