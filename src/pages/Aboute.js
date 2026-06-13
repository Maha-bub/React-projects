import React from 'react'
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { Route } from 'react-router-dom';

export default function Aboute() {
    return (
        <>
            <Nav />
            <Header />
            <div>Welcome to Our community</div>
            <Footer />
        </>
    )
}
