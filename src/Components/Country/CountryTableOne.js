import React from "react";
import { Table } from "react-bootstrap";

export const CountryTableOne = ({ countryData }) => {
  return (
    <>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th></th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Total Cases</th>
            <th>{countryData.cases.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Active Cases</th>
            <th>{countryData.active.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Recovered Cases</th>
            <th>{countryData.recovered.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Deaths</th>
            <th>{countryData.deaths.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Critical Cases</th>
            <th>{countryData.critical.toLocaleString()}</th>
          </tr>
          <tr>
            <th>Tests</th>
            <th>{countryData.tests.toLocaleString()}</th>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
