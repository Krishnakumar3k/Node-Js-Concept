import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <div><NavBar/></div>
     <div>
        <Card/>
        <Card/>
        <Card/>
     </div>
      <div><Footer/></div>

    </>
  )
}
