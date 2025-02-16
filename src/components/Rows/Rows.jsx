import React, { useEffect, useState } from 'react'
import axios from '../../Utils/axios'
import movieTrailer from "movie-trailer"
import Youtube from "react-youtube"
import "./Rows.css"
function Rows({fetchUrl,title,isLargeRow}) {
    const[movie,setMovie]= useState ([])
    const[trailerUrl,setTrailerUrl]= useState("")
     const base_Url = "https://image.tmdb.org/t/p/original"
     useEffect(()=>{
        (async()=>{
        try {
            const request = await axios.get(fetchUrl);
console.log(request);
setMovie(request.data.results)
        } catch (error) {
            console.log(error);
        }

        })()



     },[fetchUrl])
     const handelClick=(movie)=>{
        if(trailerUrl){
          setTrailerUrl("");
        }else{
movieTrailer(movie?.title || movie.name || movie?.original_name).then((url)=>{
const urlParams = new URLSearchParams(new URL(url).search)
const videoId=urlParams.get("v")
console.log(videoId);
setTrailerUrl(videoId)
})
}
}
const opts={
    hight:'390',
    width:'100%',
    playerVars:{
autoplay:1,

    },
};
  return (
    <>
      <div className="row">
        <h4>{title}</h4>
        <div className="row_posters">
          {movie?.map((movie, i) => (
            <img
              onClick={() => handelClick(movie)}
              key={i}
              src={`${base_Url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path // when mapping if there isLargeRow is true use the poster card image if not use th backdrop image
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`} // if isLargeRow is true or passed as propes use the css class name "row_posterLarge" this will change the hight of the poster
            />
          ))}
        </div>
        <div style={{ padding: "10px" }}>
          {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
      </div>
    </>
  );
}

export default Rows