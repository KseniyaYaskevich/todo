import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import { Layout } from './layouts/Layout';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { HomePage } from './pages/HomePage';
import { ItemDescription } from './pages/ItemDescription';
import { ToDoListPage } from './pages/ToDoListPage';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое действие',
    isDone: false
  },
  {
    id: 1,
    text: '2 действие',
    isDone: true
  },
  {
    id: 2,
    text: '3 действие',
    isDone: false
  },
  {
    id: 3,
    text: '4 действие',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], {basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
