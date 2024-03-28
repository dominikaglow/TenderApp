import './HomePage.css';
import React from 'react';

function HomePage() {
    return (
      <div className="Home">
        <h1>Welcome to the Tender Management System!</h1>
        <h2>About</h2>
        <p>Application allows institutions to announce tenders and enables 
            participation from any institution or individual. With a user-friendly 
            interface and robust functionality, managing and participating in tenders has 
            never been easier.</p>

        <h2>Features</h2>
        <ul>
            <li><strong>Homepage:</strong> Explore the main functionalities of the system 
            with easy navigation tabs.</li>
            <li><strong>Tender List:</strong> View a list of ongoing tenders, including 
            essential details such as title, start and end dates for bid submission.</li>
            <li><strong>Completed Tenders:</strong> Access information on completed tenders, 
            including bid submissions and outcomes.</li>
            <li><strong>Add Tender:</strong> Easily submit new tenders with all necessary 
            details, including the tender's subject, institution name, description, start and 
            end dates, and maximum budget.</li>
        </ul>
      </div>
    );
}
  
export default HomePage;