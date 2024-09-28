/**
 * File: MainRouter.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Layout from './Components/Layout';

const MainRouter = () => {
    return (
        <div>
            <Layout />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/projects" element={<Projects />} />
                <Route exact path="/services" element={<Services />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    );
};

export default MainRouter;
