import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer.jsx"
import CardGrid from './components/CardGrid/CardGrid'
import GridItem from "./components/CardGrid/GridItem"

export default function App() {
    return (
      <div className='page'>
      <Header />
      <CardGrid> 
        <GridItem />
        <GridItem />
        <GridItem />
        <GridItem />
      </CardGrid>
      <Footer />
      </div>
    )
  }
  