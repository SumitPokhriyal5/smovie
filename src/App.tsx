import { useEffect } from "react";

import { fetchDataFromApi } from "./utils/api";
import { useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

// pages and components import :-
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AllRoutes from "./AllRoutes/AllRoutes";

type Genre = {
  id: number;
  name: string;
}

const App: React.FC = () => {
  // const { url } = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res:any) => {
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",

      }

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    const promises:object[] = [];
    const endPoints = ["tv", "movie"];
    const allGenres:{[key:number]:Genre}= {};

    endPoints.forEach((url:string) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`)) 
    })

    const data = await Promise.all(promises);

    data.map(({genres}:any)=>{
      return genres.map((item:Genre) => (allGenres[item.id] = item))
    });

    dispatch(getGenres(allGenres));
  }

  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
    </>
  );
}

export default App;
