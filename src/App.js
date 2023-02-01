import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>This is default page</div> },
    { path: '/home', element: <Home></Home> },
    { path: 'about', element: <div>This is about page</div> }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
