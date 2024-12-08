import React, { useState, useEffect } from "react";
import "./App.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import Name from "./pages/Name";  
import Currency from "./pages/Currency";
import Language from "./pages/Language";
import Capital from "./pages/Capital";
import Region from "./pages/Region";
import DrivingSide from "./pages/DrivingSide";
import Toppopulation from "./pages/Toppopulation";
import Lowestpopulation from "./pages/Lowestpopulation";
import ApiDocs from "./pages/ApiDocs";
 
const Layout = () => (
  <div>
    <Header />
    <main>
      <Outlet />
    </main>
  </div>
);

const AtlasUrl = "https://atlasapi.ut-cphb.dk/api/countries";

function App() {

  const [countries, setCountries ] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");


  useEffect(() => {
    fetch(AtlasUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch Pokémon data");
        }
        return res.json();
      })
      .then((data) => {
        setCountries(data); // Use data directly if no `results` field exists
      })
      .catch((err) => console.error(err));
  }, []);
  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Countries countries={countries } />} />
        <Route path="countries/name/:name" element={<Name countries={countries } />} />
        <Route path="countries/currency/:currency" element={<Currency countries={countries } />} />
        <Route path="countries/language/:language" element={<Language countries={countries } />} />
        <Route path="countries/capital/:capital" element={<Capital countries={countries } />} />
        <Route path="countries/region/:region" element={<Region countries={countries } />} />
        <Route path="countries/drivingside/:drivingside" element={<DrivingSide countries={countries } />} />
        <Route path="countries/top-population" element={<Toppopulation />} />
        <Route path="countries/lowest-population" element={<Lowestpopulation />} />
        <Route path="api-docs" element={<ApiDocs />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App
