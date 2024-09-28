/**
 * File: Layout.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <h1>My Portfolio</h1>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/projects">Projects</Link> | 
                <Link to="/services">Services</Link> | 
                <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </>
    );
}
