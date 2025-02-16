// import React from "react";
import "./banner.css";
import { useState, useEffect } from "react";
import requests from "../../Utils/requestes";
import axios from "../../Utils/axios";


const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
      .then((req) => req.json())
      .then((data) => {
        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)]; // select randomly one movie every time it refreshed
        setMovie(randomMovie);
      });
  }, []);
  console.log(movie);
  /*     useEffect(()=>{
(async()=>{
  
  try{
  const request= await axios.get(requests.fetchNetflixOriginals)
  consol.log(request)
 setMove(
  request.data.result[
  math.floor(math.random()*request.data.result.length)]
);
  }
  catch(error){
}})()
},[])*/

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`, // Fallback if backdrop_path is undefined
        // /backgroundPosition: "center",/
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="bannerbutton play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">{truncate(movie.overview, 150)}</h1>
      </div>
      <div className="banner_fadeBottom"></div>
    </div>
  );
};

export default Banner;
