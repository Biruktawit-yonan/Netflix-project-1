import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/Banner/Banner'
import RowList from '../../components/RowList/RowList'
function home() {
  return (
    <div>
        <Header/>
       <Banner/>
       <RowList/>
        <Footer/>
    </div>
  )
}

export default home