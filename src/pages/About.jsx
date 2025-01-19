import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <h2>About <span>Register Karo</span></h2>
        <p>
          We have been using Intelegencia as our DevOps vendor for our field service 
          applications over the last couple of years and I’m extremely pleased with 
          their performance, ability to execute, and willingness to adapt in our ever 
          changing environment. Perry is an outstanding leader who is fanatical about 
          customer satisfaction. He has built a solid team which has consistently delivered 
          on projects thereby exceeding everyone’s expectations.
        </p>
        <p>
          I would strongly recommend their services to any organization that is looking for 
          solid, reliable, and predictable outcomes.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="about-image">
        <img
          src="your-image-url.jpg" // Replace with the actual image URL or import a local image
          alt="Register Karo Team"
        />
      </div>
    </section>
  );
};

export default About;
