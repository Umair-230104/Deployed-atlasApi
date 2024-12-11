import styled from "styled-components";

// Styled components
const Container = styled.div`
  padding: 20px;
  font-family: 'Roboto', sans-serif;
  color: #1c1c1c;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #2a5298; /* Matches the atlas theme */
  text-align: center;
  margin-bottom: 1.5rem;
`;

const CountryList = styled.div`
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
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  h3 {
    color: #1e3c72;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    line-height: 1.4;
  }

  img {
    width: 100%;
    max-height: 150px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
`;

const ErrorMessage = styled.p`
  color: #ff0000;
  text-align: center;
  font-size: 1rem;
`;

function Countries({ countries }) {
  if (!countries || countries.length === 0) {
    return (
      <Container>
        <Title>No Countries Found</Title>
        <ErrorMessage>Please check the data or API connection.</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Countries</Title>
      <CountryList>
        {countries.map((country, index) => (
          <CountryCard key={index}>
            {/* Show Flag */}
            <img src={country.flag} alt={`Flag of ${country.name.common}`} />
            <h3>{country.name.common}</h3>
            <p>
              <strong>Official Name:</strong> {country.name.official || "Not Available"}
            </p>
            <p>
              <strong>Capital:</strong> {country.capital?.[0] || "Not Available"}
            </p>
            <p>
              <strong>Region:</strong> {country.region || "Not Available"}
            </p>
            <p>
              <strong>Population:</strong> {country.population.toLocaleString()}
            </p>
            <p>
              <strong>Language(s):</strong>{" "}
              {country.languages
                ? Object.values(country.languages).join(", ")
                : "Not Available"}
            </p>
            <p>
              <strong>Currency:</strong>{" "}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => `${currency.name} (${currency.symbol || "N/A"})`)
                    .join(", ")
                : "Not Available"}
            </p>
            <p>
              <strong>Driving Side:</strong> {country.car?.side || "Not Available"}
            </p>
          </CountryCard>
        ))}
      </CountryList>
    </Container>
  );
}

export default Countries;
