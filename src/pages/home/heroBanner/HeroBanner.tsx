import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";

function HeroBanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = data?.results?.[Math.floor(Math.random()*20)]?.backdrop_path;
    setBackground(bg)
  },[data])

  const searchQueryHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subtitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onKeyUp={searchQueryHandler}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(e.target.value)
              }
            />
            <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
