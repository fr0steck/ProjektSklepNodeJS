import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link to = {'http://localhost:9000'}>Homepage</Link>
        </div>
    )
}
