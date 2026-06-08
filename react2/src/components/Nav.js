import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <Link class="nav-link active" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboute">Aboute</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/props">Props</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link" to="/events">Events</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link" to="/list">Lists</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link" to="/forms">Forms</Link>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </>
    )
}
