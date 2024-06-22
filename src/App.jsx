// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Collection from "./components/Collection";
import NewRecordForm from "./components/NewRecordForm";
import Category from "./components/Category";
import RecordDetail from "./components/RecordDetail";
import UserProfile from "./components/UserProfil";
import Login from "./components/Login"; // Import the Login component
import "./App.css";

function App() {
  const [records, setRecords] = useState([]);

  const updateRecord = (updatedRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === updatedRecord.id ? updatedRecord : record
      )
    );
  };

  const location = useLocation();
  const showNavbar = location.pathname !== "/login"; // Check if the current path is not '/login'

  return (
    <div>
      {showNavbar && <Navbar />} {/* Conditionally render the Navbar */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collection records={records} />} />
        <Route
          path="/new-record"
          element={<NewRecordForm setRecords={setRecords} />}
        />
        <Route path="/categories" element={<Category records={records} />} />
        <Route path="/profile" element={<UserProfile />} />{" "}
        {/* Use UserProfile component */}
        <Route path="/login" element={<Login />} /> {/* Add Login route */}
        <Route
          path="/record-detail/:id"
          element={
            <RecordDetail records={records} updateRecord={updateRecord} />
          }
        />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
