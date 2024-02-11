import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RestaurantMenu from "./src/components/RestaurantMenu";
import UserContext from "./src/utils/UserContex";
import ProjectContext from "./src/utils/ProjectContext";
// import Grocery from "./src/components/Grocery";
import { Provider } from "react-redux";
import appStore from "./src/utils/AppStore";

const Grocery = lazy(() => import("./src/components/Grocery"));


const AppLaypout = () => {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    setUserName("deva");
  }, []);
  return (
    <Provider store={appStore}>
      <ProjectContext>
        <UserContext.Provider value={{ userName: userName, setUserName }}>
          <div className="app">
            <Header />
            <Outlet />
          </div>
        </UserContext.Provider>
      </ProjectContext>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLaypout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<>Fallbackkk</>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
root.render(<RouterProvider router={appRouter} />);
