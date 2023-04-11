import { v4 as uuidv4 } from "uuid";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Fax from "./components/Pages/Fax/Fax";
import News from "./components/Pages/News/News";
import Blog from "./components/Pages/Blog/Blog";
import Detail from "./components/Pages/Detail/Detail";

const router = [
  {
    id: uuidv4(),
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    id: uuidv4(),
    name: "About",
    path: "/about",
    element: <About />,
  },
  {
    id: uuidv4(),
    name: "Fax",
    path: "/fax",
    element: <Fax />,
  },
  {
    id: uuidv4(),
    name: "News",
    path: "/news",
    element: <News />,
  },
  {
    id: uuidv4(),
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    id: uuidv4(),
    name: "Detail",
    path: "/detail",
    element: <Detail />,
  },

];

export default router;
