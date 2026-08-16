import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import BecomeDonor from "../Component/BecomeDonor";
import Login from "../Component/Login";
import About from "../Component/About";
import Contact from "../Component/Contact";
import Donors from "../Component/Donors";
import BloodStock from "../Component/BloodStock";
import BloodRequests from "../Component/BloodRequests";
import Blog from "../Component/Blog";
import Profile from "../Component/Profile"; 

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
        path: "/blog",
        element: <Blog />,
      },
       {
        path: "Profile", 
        Component: Profile,
      },
      {
        path: "donors", 
        Component: Donors,
      },
      {
        path: "request", 
        Component: BloodRequests,
      }, 
      {
        path: "blood-stock", 
        Component: BloodStock,
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
        path: "contact", 
        Component: Contact, 
      },
    ]
  },
]);