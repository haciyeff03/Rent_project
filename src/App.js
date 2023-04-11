import React from "react";
import { Routes, Route, useLocation  } from "react-router-dom";
import router from "./router";
import Layout from "./components/Layout/Layout";
import ScrollToTop from "./components/ScrollToTop"
const App = () => {
  const location = useLocation();
  console.log(`location`, location);
  // location.pathname.includes(router.path) === false
  return (
    <>
    <ScrollToTop />
      {location.pathname === "/signin" || location.pathname === "/signup" ? (
        <Routes>
          
          {router.length > 0 &&
            router.map((el, index) => (
              <Route index element={el.element} key={index} path={el.path} />
            ))}
        </Routes>
      ) : (
     
        <Layout>
          <Routes>
            {router.length > 0 &&
              router.map((el, index) => (
                <Route index element={el.element} key={index} path={el.path} />
              ))}
          </Routes>
        </Layout>
      )}
    </>
  );
};

export default App;