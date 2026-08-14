import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import BecomeDonor from "../Component/BecomeDonor";
import Login from "../Component/Login";
import About from "../Component/About";
import Contact from "../Component/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "become-donor", 
        Component: BecomeDonor, 
      },
      {
        path: "login", 
        Component: Login, 
      },
      {
        path: "about", 
        Component: About,
      }, 
      {
        path: "Contact", 
        Component: Contact,
      }, 
    ]
  },
]);