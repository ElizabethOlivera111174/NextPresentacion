
import * as React from 'react';
import Link from 'next/link'
const Navbar= ()=>(
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand">Portfolio</a>
            </Link>            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/blog">
                            <a className="nav-link" aria-current="page">Mas Proyectos</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/github">
                        <a className="nav-link">Github</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/blog2">
                        <a className="nav-link">Nifi</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/prueba">
                        <a className="nav-link">Prueba</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/next">
                        <a className="nav-link">Next</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Navbar;