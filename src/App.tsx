import React from 'react';
import { Homepage } from "../src/components/Homepage/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
            </Routes>
        </Router>
    );
}

export default App;