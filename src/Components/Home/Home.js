import React from "react";
import { Header } from "../../Common/Header";
import { CountryTable } from "./CountryTable";

export const Home = ({
  showPast,
  showSearch,
  showCountryName,
  handleSearch,
  searchValue,
  sortBy,
  handleSort,
  allCountries,
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
        sortBy={sortBy}
        handleSort={handleSort}
        allCountries={allCountries}
      />
    </div>
  );
};
