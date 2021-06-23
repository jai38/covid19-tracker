import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../../Common/Header";
import { Loader } from "../../Common/Loader";
import { CountryTableOne } from "./CountryTableOne";
import { CountryTableTwo } from "./CountryTableTwo";
import "./singleCountry.css";
export const Country = () => {
  const location = useLocation();
  const [countryName, setCountryName] = useState(
    location.state && location.state.countryName
  );
  const [countryData, setCountryData] = useState();
  const fetchCountryData = async () => {
    const res = await fetch(
      `https://corona.lmao.ninja/v2/countries/${countryName}`,
      { method: "GET" }
    );
    const json = await res.json();
    if (json.country) {
      setCountryData(json);
    }
  };
  useEffect(() => {
    fetchCountryData();
  }, []);
  return (
    <>
      <Header
        countryName={countryName}
        showPast={true}
        showSearch={false}
        showCountryName={true}
      />
      {!countryData && <Loader />}
      {countryData && (
        <div className="single-country container d-flex justify-content-around my-4">
          <CountryTableOne countryData={countryData} />
          <CountryTableTwo countryData={countryData} />
        </div>
      )}
    </>
  );
};
