import { React, useState, useEffect } from "react";
import "./assets/css/variabili.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Faq } from "./components/FAQ/Faq";
import Login from "./components/Dashboard/Form/Login";
import Register from "./components/Dashboard/Form/Register";
import { CareerHome } from "./components/Careers/Career";
import { Immerse } from "./components/Immerse/immerse";
import Pricing from "./components/Pricing/Pricing";
import { OurStory } from "./components/OurStory/OurStory";
import { GeneralQn } from "./components/Support/subSupport/Pages/GeneralQn";
import { MyMembership } from "./components/Support/subSupport/Pages/MyMember";
import { Support } from "./components/Support/Support";
import { Page } from "./components/Support/subSupport/Pages/Page";
import { Feedback } from "./components/Support/subSupport/Pages/Feedback";
import { Domanda } from "./components/Support/subSupport/Pages/randomQn";
import { Partner } from "./components/Partner/Partner";
import UserLogin from "./components/Dashboard/UserLogin";
import Blog from "./components/Blog/Blog";
import AddEditBlog from "./components/Blog/subBlog/pageEditLogin/AddEditBlog";
import { signOut } from "firebase/auth";
import { auth } from "./components/Blog/subBlog/firebase";
import Auth from "./components/Blog/subBlog/pageEditLogin/Auth";
import NotFound from "./components/Blog/subBlog/NotFound";
import Detail from "./components/Blog/subBlog/Detail";



function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setActive("login");
     
    });
  };
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Immerse />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/career",
      element: <CareerHome />,
    },
    {
      path: "/support",
      element: <Support />,
    },
    {
      path: "/support/general-qn",
      element: <Page page={<GeneralQn />} />,
    },
    {
      path: "/support/my-membership",
      element: <Page page={<MyMembership />} />,
    },
    
    {
      path: "/support/feedback",
      element: <Page page={<Feedback />} />,
    },
    {
      path: "/support/question",
      element: <Page page={<Domanda />} />,
    },
    {
      path: "/faq",
      element: <Faq />,
    },
    {
      path: "/ourStory",
      element: <OurStory />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Partner",
      element: <Partner />,
    },
    {
      path: '/user',
      element: <UserLogin />
    },
    {
      path: '/blog',
      element: <Blog />
    },
    {
      path: '/detail/:id',
      element: <Detail />
    },
    {
      path: '/auth',
      element: <Auth setActive={setActive} setUser={setUser} />
    }, 
    {
      path: '/update/:id',
      element:  user?.uid ? <AddEditBlog user={user} setActive={setActive} /> : <Navigate to="/" />
    },
    {
      path: '/create',
      element:  user?.uid ? <AddEditBlog user={user} /> : <Navigate to="/blog" />
    },
    {
      path: '*',
      element:  <NotFound />
    }
  
    // Creare nuovo oggetto con path: "/Nome della pagina" e element: "Nome del Component"
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;