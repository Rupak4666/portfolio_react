/**
 * File: About.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 * Description: This file contains the About component, which provides details about the student, their background, and a downloadable resume.
 */

export default function About() {
    return (
        <div style={aboutContainerStyle}>
            {/* Section: Heading */}
            <h1>About Me</h1>

            {/* Section: Profile Image */}
            <img src="picture.jpg" alt="Rupak Paudel" style={imageStyle} />

            {/* Section: About Text */}
            <p style={aboutTextStyle}>
                Hello! I’m Rupak Paudel, a dedicated IT Officer with a strong background in software engineering and information technology. With a passion for problem-solving and optimizing systems, I bring expertise in network management, system administration, database management, and web development using technologies like C#, HTML/CSS, JavaScript, and React.
                <br /><br />
                Currently pursuing my Software Engineering Technician studies at Centennial College, I’m continually expanding my skills in areas like web application development and database design. My professional experience as an IT Officer has equipped me with the ability to manage IT infrastructures, troubleshoot complex technical issues, and implement solutions that drive efficiency and productivity. 
                <br /><br />
                Originally from Nepal, I aim to integrate my global experiences with my passion for technology to contribute to impactful innovations in my home country. I’m always exploring the latest advancements in IT and software engineering, looking for ways to improve processes and develop cutting-edge solutions.
            </p>

            {/* Section: Download Resume */}
            <a href="resume.pdf" download style={downloadLinkStyle}>Download Resume</a>
        </div>
    );
}

/**
 * Style: About Container
 * Purpose: Centralized styling for the main container in the About page.
 */
const aboutContainerStyle = {
    textAlign: 'center',
    padding: '50px',
};

/**
 * Style: Profile Image
 * Purpose: Styles for the profile image in the About section.
 */
const imageStyle = {
    border: '3px solid red',
    width: '310px',
    height: '28vh',
    margin: '20px auto',
    display: 'block',
};

/**
 * Style: About Text
 * Purpose: Styling for the paragraph text in the About section.
 */
const aboutTextStyle = {
    textAlign: 'justify',
    fontSize: '1.1rem',
    lineHeight: '1.6',
    maxWidth: '900px',
    margin: '0 auto',
};

/**
 * Style: Download Resume Link
 * Purpose: Styles for the download resume link.
 */
const downloadLinkStyle = {
    padding: '10px 20px',
    backgroundColor: '#646cff',
    color: '#fff',
    borderRadius: '4px',
    textDecoration: 'none',
    marginTop: '20px',
    display: 'inline-block',
};
