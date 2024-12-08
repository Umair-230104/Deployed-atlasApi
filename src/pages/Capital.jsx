import React, { useState } from "react";
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

const Input = styled.input`
  padding: 10px;
  width: 300px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #2a5298;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
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

function Capital({ countries }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    const capitalName = e.target.value.toLowerCase();
    setSearchTerm(capitalName);

    if (capitalName.trim() === "") {
      setFilteredCountries([]);
      setError("");
      return;
    }

    const results = countries.filter(
      (country) =>
        country.capital &&
        country.capital.some((capital) =>
          capital.toLowerCase().includes(capitalName)
        )
    );

    if (results.length > 0) {
      setFilteredCountries(results);
      setError("");
    } else {
      setFilteredCountries([]);
      setError("No countries found with the specified capital.");
    }
  };

  return (
    <Container>
      <Title>Search by Capital</Title>
      <Input
        type="text"
        placeholder="Enter capital name..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <CountryList>
        {filteredCountries.map((country, index) => (
          <CountryCard key={index}>
            <h3>{country.name.common}</h3>
            <p>
              <strong>Capital:</strong> {country.capital?.join(", ") || "Not Available"}
            </p>
            <p>
              <strong>Region:</strong> {country.region || "Not Available"}
            </p>
            <p>
              <strong>Population:</strong>{" "}
              {country.population ? country.population.toLocaleString() : "Not Available"}
            </p>
          </CountryCard>
        ))}
      </CountryList>
    </Container>
  );
}

export default Capital;
