import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

export default function MyCars() {

    const cars = ['Ford', 'BMW', 'Audi'];
    const style = {
        textAlign: 'center'

    }
    return (
        <>
            <Nav />
            <Header />
            <div style={style}>
                <h1>My Cars List:</h1>
                <ul>
                    {cars.map((car) => <li key={car}>{car} is one of the most expensive collection of mine </li>)}
                </ul>

            </div>


            <Footer />
        </>
    );
}



