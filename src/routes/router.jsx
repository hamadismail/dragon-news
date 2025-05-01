import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';
import Spinner from '../components/ui/Spinner';
import News from '../components/News';
import Error from '../pages/Error';

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
    path: '*',
    Component: Error,
  },
]);

export default router;
