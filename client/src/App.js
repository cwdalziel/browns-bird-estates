import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const user = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products/:category",
      element: <ProductList />,
    },
    {
      path: "/product/:id",
      element: <Product />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/login",
      element: <Login />,
      loader: () => {
        if (user) {
          return redirect("/");
        }
        return null;
      },
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
