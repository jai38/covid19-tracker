import React from "react";
import { Table } from "react-bootstrap";

export const CountryTableTwo = ({ countryData }) => {
  return (
    <>
      <Table
        className="country-table-two"
        striped
        bordered
        hover
        responsive
        variant="dark"
      >
        <thead>
          <tr>
            <th></th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Today Cases</th>
            <th>{countryData.todayCases.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Today Recovered Cases</th>
            <th>{countryData.todayRecovered.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Today Deaths</th>
            <th>{countryData.todayDeaths.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Active Per Million</th>
            <th>{countryData.activePerOneMillion.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Recovered Per Million</th>
            <th>{countryData.recoveredPerOneMillion.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Deaths Per Million</th>
            <th>{countryData.deathsPerOneMillion.toLocaleString()}</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
