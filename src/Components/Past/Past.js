import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Header } from "../../Common/Header";
import { PastTable } from "./PastTable";
import "./past.css";
export const Past = ({
  showPast,
  showSearch,
  showCountryName,
  handleSearch,
  countryList,
  handlePastCountry,
  pastData,
}) => {
  console.log(pastData);
  return (
    <>
      <Header
        showCountryName={showCountryName}
        showPast={showPast}
        showSearch={showSearch}
        handleSearch={handleSearch}
        countryList={countryList}
      />
      <div className="container w-50 text-white">
        <Autocomplete
          options={countryList}
          getOptionLabel={(option) => option}
          id="debug"
          onChange={(e, value) => handlePastCountry(value)}
          debug
          renderInput={(params) => (
            <TextField {...params} label="Select Country" margin="normal" />
          )}
        />
      </div>
      <PastTable />
    </>
  );
};
