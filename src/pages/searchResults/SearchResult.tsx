import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from 'react';
import "./style.scss";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import MovieCard from "../../components/movieCard/MovieCard";

export interface ISearchResults {
  adult: boolean;
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
  title:string;
  release_date:string;
}

export interface ISearch {
  page: number;
  results: ISearchResults[];
  total_pages: number;
  total_results: number;
}

function SearchResult() {
  const [data, setData] = useState<ISearch | null>(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res: ISearch) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };

  useEffect(() => {
    setPageNum(1)
    fetchInitialData();
  }, [query]);

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res: ISearch) => {
      console.log(res);
      if (data?.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  };

  return (
    <div className="searchResultsPage">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data && data.results.length > 0 ? (
            <>
            <div className="pageTitle">
              {data && `Search ${data.total_results > 1 ? "results" : "result"} of '${query}'`}
            </div>
            <InfiniteScroll className="content" dataLength={data?.results?.length || 0} next={fetchNextPageData} hasMore={pageNum <= data?.total_pages} loader={<Spinner />} >
              {data?.results.map((item , index) => {
                if(item.media_type === "person")return;

                return(
                  <MovieCard key={index} data={item} fromSearch={true} />
                )
              })}
            </InfiniteScroll>
            </>
          ):(
            <span className="resultNotFound">
              Sorry, Results not found!
            </span>
          )}
        </ContentWrapper>
      )}
    </div>
  );
}

export default SearchResult;
