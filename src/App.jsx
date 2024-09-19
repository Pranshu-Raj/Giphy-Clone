
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Applayouts from './layouts/app-layouts'
import Category from './Pages/Category';
import Search from './Pages/search';
import GifPage from './Pages/single-gif';
import Favourites from './Pages/favourites';
import Home from './Pages/home';
import GifProvider from './context/context';

// Homepage
// categories
// search
// single gif
// favorties

const router = createBrowserRouter([
  {
    element: <Applayouts />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:category",
        element: <Category />,
      },
      {
        path: "/search/:query",
        element: <Search />,
      },
      {
        path: "/:type/:slug",
        element: <GifPage />,
      },
      {
        path: "/favourities",
        element: <Favourites />,
      } 
    ],
  },
]);

/**
 * Renders the main application component
 * @returns {JSX.Element} The root component of the application, wrapped in a GifProvider and containing a RouterProvider
 */
function App() {
  return (
    <>
      <GifProvider>
        <RouterProvider router={router} />
      </GifProvider>
    </>
  );
    
}


export default App
