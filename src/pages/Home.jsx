import React from "react";

function Home() {
  const pageStyle = {
    background: "linear-gradient(180deg, #1e3c72, #2a5298)", // Atlas-themed gradient
    color: "#ffffff", // Contrasting white text
    minHeight: "100vh",
    padding: "20px",
    fontFamily: "'Roboto', sans-serif", // Professional font
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "1.5rem",
    textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", // Adds depth to the heading
  };

  const paragraphStyle = {
    marginTop: "1rem",
    fontSize: "1rem",
    maxWidth: "800px",
    lineHeight: "1.8",
    textAlign: "justify",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Adds depth to the paragraph box
    backdropFilter: "blur(10px)", // Blur effect for a modern look
  };

  const listStyle = {
    textAlign: "left",
    margin: "1rem 0",
    paddingLeft: "40px",
    lineHeight: "1.8",
  };

  const imageStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    marginBottom: "1.5rem",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Adds depth
  };

  const mediaQueryStyles = `
    @media (max-width: 768px) {
      img {
        width: 150px;
        height: 150px;
      }
      h1 {
        font-size: 1.8rem;
      }
      p {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      img {
        width: 120px;
        height: 120px;
      }
      h1 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <div style={pageStyle}>
        <img src="/image.png" alt="AtlasAPI Logo" style={imageStyle} />
        <h1 style={headingStyle}>Welcome to AtlasAPI</h1>
        <p style={paragraphStyle}>
          The vision of the AtlasAPI is to provide a robust, user-friendly, and
          efficient platform for accessing and managing country-related data. It
          aims to serve as a comprehensive resource for developers, researchers,
          and organizations by enabling easy integration of global geographic,
          demographic, and cultural information into their applications or
          workflows.
        </p>
        <p style={paragraphStyle}>
          <strong>Vision and Purpose:</strong>
        </p>
        <ul style={listStyle}>
          <li>Global Accessibility of Data</li>
          <li>Streamlined Integration</li>
          <li>Data-Driven Insights</li>
          <li>Customizability and Flexibility</li>
          <li>Promoting Open Access</li>
          <li>Enhanced User Experience</li>
          <li>Security and Scalability</li>
        </ul>
        <p style={paragraphStyle}>
          By focusing on simplicity, accessibility, and functionality, AtlasAPI
          aligns with the broader vision of creating a globally connected and
          data-informed world.
        </p>
      </div>
    </>
  );
}

export default Home;
