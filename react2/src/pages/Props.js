import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom';

export default function props() {
  return (
    <>
    <Header/>
    <Nav/>
    <h1>all about the props</h1>
    <p>Lorem ipsum dolor sit amet.</p>
    <Footer/>
    </>
  )
}
