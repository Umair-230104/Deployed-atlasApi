import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #1c1c1c;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2a5298;
  margin-bottom: 1rem;
`;

const CountryList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CountryCard = styled.div`
  background: #f3f4f6;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  width: 250px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    color: #1e3c72;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 1rem;
  margin-top: 1rem;
`;

function Toppopulation() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTopPopulation = async () => {
      try {
        const response = await fetch("https://atlasapi.ut-cphb.dk/api/countries/top-population");
        if (!response.ok) {
          throw new Error("Failed to fetch top population data");
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchTopPopulation();
  }, []);

  return (
    <Container>
      <Title>Top 10 Populated Countries</Title>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <CountryList>
        {countries.map((country, index) => (
          <CountryCard key={index}>
            <h3>{country.name.common}</h3>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Region:</strong> {country.region || "Not Available"}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital?.[0] || "Not Available"}
            </p>
          </CountryCard>
        ))}
      </CountryList>
    </Container>
  );
}

export default Toppopulation;
