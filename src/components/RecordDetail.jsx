// RecordDetail.jsx
/* eslint-disable react/prop-types */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./RecordDetail.css";

const RecordDetail = ({ records, setRecords }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const record = records.find((record) => record.id === parseInt(id));

  if (!record) {
    return <p>Record not found</p>;
  }

  const handleSave = () => {
    // Implement save functionality
    console.log("Save button clicked");
    // Example: Update the record's state
    const updatedRecords = records.map((r) =>
      r.id === record.id ? { ...r, recordState: "Updated" } : r
    );
    setRecords(updatedRecords);
  };

  const handleDelete = () => {
    // Implement delete functionality
    console.log("Delete button clicked");
    const updatedRecords = records.filter((r) => r.id !== record.id);
    setRecords(updatedRecords);
    navigate("/"); // Redirect to the collection page after deletion
  };

  return (
    <div className="record-detail">
      <h2>Record Detail</h2>
      <form>
        <div className="form-group">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={record.artist}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            name="album"
            value={record.album}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="label">Label:</label>
          <input
            type="text"
            id="label"
            name="label"
            value={record.label}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Released Date:</label>
          <input
            type="text"
            id="releaseDate"
            name="releaseDate"
            value={record.releaseDate}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="recordNumber">Record Number:</label>
          <input
            type="number"
            id="recordNumber"
            name="recordNumber"
            value={record.recordNumber}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="recordState">State of the Records:</label>
          <input
            type="text"
            id="recordState"
            name="recordState"
            value={record.recordState}
            readOnly
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            value={record.category}
            readOnly
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="save-button" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordDetail;
