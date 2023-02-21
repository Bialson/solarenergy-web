import React from 'react';
import ReactDOM from 'react-dom/client';
import { Dashboard } from './routes/dashboard';
import { ErrorPage } from './routes/error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/_main.scss';

const Router = createBrowserRouter([
	{
		path: '/',
		element: <Dashboard />,
		errorElement: <ErrorPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={Router} />
);
