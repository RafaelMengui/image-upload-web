import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FileUpload from "./FileUpload";
import HomePage from "./HomePage";
import Navbar from "./Navbar.js";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/upload" element={<FileUpload />} />
            </Routes>
        </Router>
    );
}

export default App;
