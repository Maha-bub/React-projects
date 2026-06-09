import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function Events() {

    const welcome = (x) => {
        alert ("Welcome to React");
    }

    const Greatings=(message)=>{
      alert(message);
    }

  return (
    <>
    <Header/>
    <Nav/>
    <h3>Hello customer, please visit our site.</h3>
    <button onClick={welcome}>Click here</button>
    <button onClick={()=>welcome()}>Click here</button>
    <button onClick={()=>Greatings('You are very good person')}>Click here</button>
    <Footer/>
    
    
    </>
  )
}
