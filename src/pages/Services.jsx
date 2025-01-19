
import React from "react";
import "./Services.css";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "⚙️", // Replace with an actual icon/image if needed
  },
  {
    title: "Company Secretarial Services",
    description: "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "📊", // Replace with an actual icon/image if needed
  },
  {
    title: "Virtual Office Address",
    description: "Foster customer relationships by effectively serving your market.",
    icon: "🏢", // Replace with an actual icon/image if needed
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: "📅", // Replace with an actual icon/image if needed
  },
  {
    title: "Payroll Services",
    description: "Expand your business across the globe with minimal effort.",
    icon: "🛒", // Replace with an actual icon/image if needed
  },
  {
    title: "Bookkeeping Services",
    description: "Steering user behaviors with creative design, data insights & technology.",
    icon: "📒", // Replace with an actual icon/image if needed
  },
];

const ServiceCard = ({ title, description, icon }) => (
  <div className="service-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href="#" className="learn-more">
      Learn more →
    </a>
  </div>
);

const Services = () => {
  return (
    <section className="services-section">
      <h2>Explore Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
      <button className="see-all-button">See All Services</button>
    </section>
  );
};

export default Services;
