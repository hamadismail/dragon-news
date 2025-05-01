import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Spinner from '../components/ui/Spinner';
import News from '../components/News';
import Error from '../pages/Error';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: HomeLayout,
    children: [
      { index: true, Component: Home },
      {
        path: '/category/:catId',
        loader: () => fetch('/news.json'),
        hydrateFallbackElement: <Spinner />,
        Component: News,
      },
    ],
  },
  {
    path: 'news-details/:newsId',
    loader: () => fetch('/news.json'),
    hydrateFallbackElement: <Spinner />,
    element: (
      <PrivateRoutes>
        <NewsDetails />
      </PrivateRoutes>
    ),
  },
  {
    path: 'auth',
    Component: AuthLayout,
    children: [
      { path: '/auth/login', Component: Login },
      { path: '/auth/signup', Component: SignUp },
    ],
  },
  {
    path: '*',
    Component: Error,
  },
]);

export default router;
