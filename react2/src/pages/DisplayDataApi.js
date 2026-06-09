import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


export default function DisplayDataApi() {
    return (
        <>
            <Header />
            <Nav />
            <h4>Display Api data using axios</h4>
            <Footer />

        </>
    )
}
