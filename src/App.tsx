
import { Outlet, RouterProvider, createBrowserRouter, useLocation } from 'react-router-dom';
import './App.css'
import Vows from './pages/Vows';
import Home from './pages/Home';
import { useEffect } from 'react';

function App() {

  const HomeLayout = () => {
    const path = useLocation().pathname;

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [path]);
    return (
      <div className="">
        <Outlet />
      </div>
    );
  };

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/vows",
          element: <Vows />,
        },
      ],
      }
  ]);



  return <RouterProvider router={router} />;
}

export default App
