import React from "react";
import { Table } from "react-bootstrap";

export const PastTable = ({ pastData }) => {
  const createTable = (data, index) => {
    let [month, day, year] = data.date.split("/");
    year = "20" + year;
    let date = new Date(year + "-" + month + "-" + day);
    console.log(date);
    let dateString = date.toDateString();
    return (
      <>
        <tr>
          <th>{index + 1}</th>
          <th>{dateString}</th>
          <th>{data.cases.toLocaleString()}</th>
          <th>{data.recovered.toLocaleString()}</th>
          <th>{data.deaths.toLocaleString()}</th>
        </tr>
      </>
    );
  };
  return (
    <>
      {!pastData && (
        <div className="container w-25 my-4 text-white">
          Please select country from above to view data
        </div>
      )}
      {pastData && (
        <Table
          className="container my-5"
          style={{ width: "90%" }}
          striped
          bordered
          hover
          responsive
          variant="dark"
        >
          <thead className="table-head">
            <tr>
              <th className="my-2">#</th>
              <th className="my-2">Date</th>
              <th className="my-2">Cases</th>
              <th className="my-2">Recovered</th>
              <th className="my-2">Deaths</th>
            </tr>
          </thead>
          <tbody>{pastData.map(createTable)}</tbody>
        </Table>
      )}
    </>
  );
};
