import React from "react";
import { Header } from "../../Common/Header";
import { CountryTable } from "./CountryTable";

export const Home = ({
  reverse,
  showPast,
  showSearch,
  showCountryName,
  handleSearch,
  searchValue,
  sortBy,
  handleSort,
  allCountries,
  changeCountry,
}) => {
  return (
    <div>
      <Header
        showCountryName={showCountryName}
        showPast={showPast}
        showSearch={showSearch}
        handleSearch={handleSearch}
        searchValue={searchValue}
      />
      <CountryTable
        reverse={reverse}
        sortBy={sortBy}
        handleSort={handleSort}
        allCountries={allCountries}
        changeCountry={changeCountry}
      />
    </div>
  );
};
