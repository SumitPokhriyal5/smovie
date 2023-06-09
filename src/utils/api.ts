import axios from 'axios';
import { ISearch } from '../pages/searchResults/SearchResult';

const BASE_URL = "https://api.themoviedb.org/3";

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN
}



export const fetchDataFromApi = async ( url : string , params? : object ) : Promise<ISearch> => {
    try{
        const {data} = await axios.get(BASE_URL + url , {
            headers,
            params,
        })
        return data
    }catch(err:any){
        console.log(err)
        return err;
    }
}