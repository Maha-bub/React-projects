import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Nav from '../components/Nav'


export default function DisplayDataApi() {
    const [users, setUsers] = useState([])

    useEffect(
        () => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => setUsers(data));
        }, [])

    console.log(users)
    return (
        <>
            <Nav />
            <Header />
            <h4>Display Api data using axios</h4>
            <div className='row'>
                {
                    users.map(user => (
                        <div key={user.id} className='col-md-3 mb-4'>
                            <div className='card h-100 shadow-sm'>
                                <div className='card-body'>
                                    <p><strong>Name:</strong> {user.name}</p>
                                    <p><strong>Email:</strong> {user.email}</p>
                                    <p><strong>Organization:</strong> {user.company.name}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />


        </>
    )
}
