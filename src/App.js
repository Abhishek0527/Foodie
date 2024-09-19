import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import RestaurantMenuComponent from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { useState, useContext, useEffect } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(() =>
  import("./components/Grocery")
);

const AppComponent = () => {
  // for Authentication how can we consume the data from the
  
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = "Abhi Ray"
    setUserName(data);
  }, []
  )
 
  return (
    <Provider store={store}>
    <UserContext.Provider value={{loginUser:userName, setUserName}}>
    <div className="parent">
      <HeaderComponent />
      <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
  );
};

const approute = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurat/:resId",
        element: <RestaurantMenuComponent />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}> <Grocery /></Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approute} />);
