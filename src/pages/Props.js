import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom';

export default function Props() {

    const person = {
        name: "Mahabub", age:23, address:"Dhaka,dhanmondi" 
    }


    //destructuring
    const {name, age}= person;
  return (
    <>
    <Nav/>
    <Header/>
    <h4>Object property o/p</h4>
    <p>
        Name: {person.name} <br/>
        Age: {person.age} <br/>
        Address: {person.address}
    </p>


    <h5>Destructuring o/p</h5>
    <p> 
        Name: {name} <br/>
        Age: {age} 
    </p>
    <Footer/>
    </>
  )
}




