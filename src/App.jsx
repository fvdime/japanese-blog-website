import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <Blog />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

return <RouterProvider router={router} />;
}

export default App;
