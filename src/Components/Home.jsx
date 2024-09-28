/**
 * File: Home.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 * Description: This file contains the Home component, which serves as the landing page of the portfolio website.
 */

  
 export default function Home() {
    return (
        <div style={homeContainerStyle}>
            {/* Section: Welcome Message */}
            <header>
                <h1>Welcome to My Portfolio</h1>
                <p>
                    I’m thrilled to have you here. As a passionate Software Engineering Technician, I’m dedicated to creating innovative solutions 
                    that make a difference. Explore my work and discover how I leverage technology to solve real-world problems.
                </p>
            </header>

            {/* Section: Mission Statement */}
            <section>
                <h3>Mission Statement</h3>
                <p>
                    My mission is to harness the power of technology to create impactful and user-friendly applications. I strive to continuously learn and 
                    grow in my field, focusing on delivering high-quality solutions that enhance productivity and provide exceptional user experiences.
                </p>
            </section>

            {/* Section: About Me Link */}
            <a href="/about" style={aboutLinkStyle}>About Me</a>
        </div>
    );
}

/**
 * Style: Home Container
 * Purpose: Centralized styling for the home page layout.
 */
const homeContainerStyle = {
    textAlign: 'center',
    padding: '50px',
};

/**
 * Style: About Me Link
 * Purpose: Styling for the link to the About Me page.
 */
const aboutLinkStyle = {
    padding: '10px 20px',
    backgroundColor: '#646cff',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '20px',
    display: 'inline-block'
};
