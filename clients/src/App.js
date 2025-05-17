import { 
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Compose from './pages/Compose';
import Home from './pages/Home';
import Post from './pages/Post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './style.scss';

const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/post/:id',
        element: <Post/>
      },
      {
        path: '/compose',
        element: <Compose/>
      },
    ]
  },
  {
    path: '/register',
    element: <Register/>,
  },
  {
    path: '/login',
    element: <Login/>,
    },
  {
    path: '/compose',
    element: <Compose/>,
  },
  {
    path: '/post',
    element: <Post/>,
  },
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>   
    </div>
  );
}

export default App;
