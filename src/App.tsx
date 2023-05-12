import { useState, useEffect } from "react";

import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { RootState } from "./store/store";

// pages and components import :-
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllRoutes from "./AllRoutes/AllRoutes";

function App() {
  const { url } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();
  console.log(url);
  useEffect(() => {
    fetchApiConfig();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <>
      {/* <Header /> */}
      <AllRoutes />
      {/* <Footer /> */}
    </>
  );
}

export default App;
