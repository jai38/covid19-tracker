import React from "react";
import { Table } from "react-bootstrap";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useHistory } from "react-router-dom";
export const CountryTable = ({
  reverse,
  sortBy,
  handleSort,
  allCountries,
  changeCountry,
}) => {
  const history = useHistory();
  const handleCountryClick = (countryName) => {
    changeCountry(countryName);
    history.push("/country", {
      countryName,
      // showPast: true,
      // showSearch: false,
      // showCountryName: true,
    });
  };
  const createRow = (country, index) => {
    return (
      <>
        <tr>
          <th>{index + 1}</th>
          <th
            style={{ cursor: "pointer" }}
            onClick={() => handleCountryClick(country.country)}
          >
            {country.country}
          </th>
          <th>{country.active.toLocaleString()}</th>
          <th>
            {country.todayCases != 0 && (
              <div
                style={{
                  padding: "3%",
                  borderRadius: "30px",
                  textAlign: "center",
                  background: "#ffc107",
                  color: "black",
                }}
              >
                +{country.todayCases.toLocaleString()}
              </div>
            )}
          </th>
          <th>{country.cases.toLocaleString()}</th>
          <th>{country.recovered.toLocaleString()}</th>
          <th>
            {country.todayRecovered != 0 && (
              <div
                style={{
                  padding: "3%",
                  borderRadius: "30px",
                  textAlign: "center",
                  background: "lightgreen",
                  color: "black",
                }}
              >
                +{country.todayRecovered.toLocaleString()}
              </div>
            )}
          </th>
          <th>{country.deaths.toLocaleString()}</th>
          <th>
            {country.todayDeaths != 0 && (
              <div
                style={{
                  padding: "3%",
                  borderRadius: "30px",
                  textAlign: "center",
                  background: "#dc3545",
                  color: "white",
                }}
              >
                +{country.todayDeaths.toLocaleString()}
              </div>
            )}
          </th>
        </tr>
      </>
    );
  };
  return (
    <>
      <Table striped bordered hover responsive variant="dark">
        <thead>
          <tr>
            <th>
              <div>#</div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("Name")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>Name</div>
                {sortBy == "Name" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("Active Cases")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>Active Cases</div>
                {sortBy == "Active Cases" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("New Cases")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>New Cases</div>
                {sortBy == "New Cases" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("Total Cases")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>Total Cases</div>
                {sortBy == "Total Cases" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("Total Recovered")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>Total Recovered</div>
                {sortBy == "Total Recovered" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("New Recovered")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>New Recovered</div>
                {sortBy == "New Recovered" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("Total Deaths")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>Total Deaths</div>
                {sortBy == "Total Deaths" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
            <th
              style={{ cursor: "pointer" }}
              onClick={() => handleSort("New Deaths")}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>New Deaths</div>
                {sortBy == "New Deaths" && (
                  <div>
                    {reverse ? <ArrowDownwardIcon /> : <ArrowUpwardIcon />}
                  </div>
                )}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{allCountries.map(createRow)}</tbody>
      </Table>
    </>
  );
};
