import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots.jsx';
import Home from './components/Home/Home.jsx';
import DashBoard from './components/DashBoard/DashBoard.jsx';
import ListedBook from './components/ListedBook/ListedBook.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('booksData.json')
      },
      {
        path: "/bookDetails/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch('booksData.json')
      },
      {
        path: 'listed-book',
        element: <ListedBook></ListedBook>
      },
      {
        path: 'dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
