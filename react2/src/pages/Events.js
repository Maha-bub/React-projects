import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Events() {

    const welcome = () => {
        alert ("Welcome to React");
    }

  return (
    <>
    <Header/>
    <Nav/>
    <h3>Hello customer, please visit our site.</h3>
    <button onClick={welcome}>Click here</button>
    <Footer/>
    
    
    </>
  )
}
