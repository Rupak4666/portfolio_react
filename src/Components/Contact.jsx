/**
 * File: Contact.jsx
 * Student's Name: Rupak Paudel
 * Student ID: 301399650
 * Date: September 28, 2024
 */
export default function Contact() {
    return (
    
        <div>
            <div>
                <h1><b>Contact details</b></h1>
                <ul>
                    <li>Phone: +14164599210</li>
                    <li>Mail:rupakpaudel066@gmail.com</li>
                </ul>
            </div>
            
            <p><b>Please fill the form to contact me.</b></p>
            <form>
                <label>First Name</label>
                <input type="text" name="firstname"/>
                <label>Last Name</label>
                <input type="text" name="lastName"/>
                <label>Email</label>
                <input type="email" name="email"/>
                <label>Message</label>
                <textarea name="message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}
