import Homepage from "./pages/Homepage";
import Reviews from "./pages/Reviews";
import Errorpage from "./pages/Errorpage";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />,
    },

    {
      path: "Reviews",
      element: <Reviews />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
