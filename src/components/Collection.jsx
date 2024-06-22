/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import RecordDetail from "./RecordDetail";
import "./Collection.css"; 

const Collection = ({ records, setRecords }) => {
  return (
    <div className="collection">
      <Link to="/new-record" className="new-button-link">
        New
      </Link>
      <div className="card-list">
        {records.map((record) => (
          <Link
            key={record.id}
            to={`/record-detail/${record.id}`}
            className="card-link"
          >
            <div className="card">
              <div className="card-header">
                <h3>{`${record.artist} - ${record.album} (${record.releaseDate})`}</h3>
                <p>{`${record.label} - Released Date: ${record.releaseDate}`}</p>
              </div>
              <div className="card-body">
                <p>Record Number: {record.recordNumber}</p>
                <p>State of the Records: {record.recordState}</p>
                <p className="category">{record.category}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Routes>
        <Route
          path="/record-detail/:id"
          element={<RecordDetail records={records} setRecords={setRecords} />}
        />
      </Routes>
    </div>
  );
};

export default Collection;
