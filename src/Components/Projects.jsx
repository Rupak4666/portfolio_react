/**
 * File: Projects.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 * Description: This file contains the Projects component which displays project details and images.
 */

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>

            {/* Section: Project 1 - School Management System */}
            <div className="project-item">
                <img src="project1.png" alt="Project 1: School Management System" style={imageStyle} />
                <p>
                    <b>Project 1: School Management System</b><br />
                    This project is a web-based application designed to streamline school administration tasks. It allows users to manage student records, course schedules, and track academic performance efficiently. 
                    Built with C# and SQL Server, the system provides a user-friendly interface that enhances operational efficiency in educational institutions.
                </p>
            </div>

            {/* Section: Project 2 - E-Commerce Platform */}
            <div className="project-item">
                <img src="project2.png" alt="Project 2: E-Commerce Platform" style={imageStyle} />
                <p>
                    <b>Project 2: E-Commerce Platform</b><br />
                    The E-Commerce Platform is an online solution that facilitates seamless shopping experiences for users. It features product browsing, a shopping cart for easy checkout, and secure payment processing. 
                    Developed using React, Node.js, and MongoDB, this platform is designed to provide a smooth user experience with real-time updates and customer interactions.
                </p>
            </div>

            {/* Section: Project 3 - Personal Portfolio Using React */}
            <div className="project-item">
                <img src="project1.png" alt="Project 3: Personal Portfolio" style={imageStyle} />
                <p>
                    <b>Project 3: Personal Portfolio Using React</b><br />
                    The Personal Portfolio Website showcases my skills, projects, and professional journey. It is a fully responsive site that highlights my work and provides potential employers with an overview of my capabilities. 
                    Created with React, HTML, and CSS, and hosted on Netlify, the site also includes sections for contact information and a downloadable resume, making it easy for visitors to connect with me.
                </p>
            </div>
        </div>
    );
}

/**
 * Style: Image Style
 * Purpose: Used for styling project images across the Projects component.
 */
const imageStyle = {
    border: '3px solid red',
    width: '310px',
    justifyContent: 'center',
    alignItems: 'center',
    height: '32vh'
};
