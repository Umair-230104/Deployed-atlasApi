import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import remarkGfm from "remark-gfm"; // For GitHub-flavored Markdown
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const Container = styled.div`
  padding: 20px;
  font-family: "Roboto", sans-serif;
  color: #1c1c1c;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2a5298;
  text-align: center;
  margin-bottom: 20px;
`;

const markdownContent = `
# API Documentation for AtlasAPI

AtlasAPI is a RESTful API designed to fetch and manage country-related data. It provides endpoints to retrieve
information about countries based on criteria like name, region, currency, language, and capital city.

---

## Endpoints

| **Method** | **URL**                                       | **Description**                               |
|------------|-----------------------------------------------|-----------------------------------------------|
| GET        | \`/api/countries/name/{name}\`                | Fetch details of a country by its name.       |
| GET        | \`/api/countries/currency/{currency}\`        | Fetch countries using a specific currency.    |
| GET        | \`/api/countries/language/{language}\`        | Fetch countries where a language is spoken.   |
| GET        | \`/api/countries/capital/{capital}\`          | Fetch a country by its capital city.          |
| GET        | \`/api/countries/region/{region}\`            | Fetch countries in a specific region.         |
| GET        | \`/api/countries/top-population\`             | Fetch the top 10 most populated countries.    |
| GET        | \`/api/countries/lowest-population\`          | Fetch the 10 least populated countries.       |
| GET        | \`/api/countries/car/drivingside/{drivingside}\` | Fetch countries by driving side (left/right). |
| GET        | \`/api/countries\`| Fetch a list of countries. |

---

## Examples

### Fetch Country by Name:
**Request:**
\`\`\`http
GET /api/countries/name/Denmark HTTP/1.1
Host: atlasapi.example.com
\`\`\`

**Response:**
\`\`\`json
{
  "name": { "common": "Denmark", "official": "Kingdom of Denmark" },
  "capital": ["Copenhagen"],
  "region": "Europe",
  "population": 5831404,
  "languages": { "dan": "Danish" },
  "currencies": { "currency": { "name": "Danish krone", "symbol": "kr" } },
  "car": { "side": "right" }
}
\`\`\`
`;

const ApiDocs = () => {
  return (
    <Container>
      <Title>API Documentation</Title>
      <ReactMarkdown
        children={markdownContent}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          table: ({ children }) => (
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                margin: "20px 0",
              }}
            >
              {children}
            </table>
          ),
          th: ({ children }) => (
            <th
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                backgroundColor: "#f3f4f6",
                textAlign: "left",
              }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              style={{
                border: "1px solid #ddd",
                padding: "8px",
              }}
            >
              {children}
            </td>
          ),
        }}
      />
    </Container>
  );
};

export default ApiDocs;
