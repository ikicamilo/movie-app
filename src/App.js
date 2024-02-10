import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Movie from "./components/pages/Movie/Movie";
import { DataProvider } from "./contexts/DataContext";
import Navbar from "./components/features/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar title="Movie App" />
        <DataProvider>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movie/:id" element={<Movie />} />
          </Routes>
        </DataProvider>
      </Router>
    </div>
  );
}

export default App;
