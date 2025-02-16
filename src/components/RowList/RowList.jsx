import React from 'react'
import Rows from '../Rows/Rows'
import requests from '../../Utils/requestes'

function RowList() {
  return (
    <>
   <Rows
        title="NETFLIX ORIGINAL"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
     
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovie} />
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Rows title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Rows title="History" fetchUrl={requests.fetchHistory} /> 
   
    </>
  )
}

export default RowList