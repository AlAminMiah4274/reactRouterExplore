import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        // route
        { path: '/home', element: <Home></Home> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        { path: 'about', element: <About></About> },
        // to create dynamic route must use (:) in path
        {
          path: '/friend/:friendId',
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: 'posts',
          element: <Posts></Posts>
        }
      ]
    },
    // not found component
    { path: '*', element: <div>This component not found</div> }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
