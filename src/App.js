import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import ImagesList from "./components/imagesList";
import Header from "./components/header";
import Navigation from "./components/navigation";
import ImageContextProvider from "./context/imageContext";

import "./App.css";
import NotFound from "./components/notFound";

function App() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSearchButton = (searchInput) => {
    let url = `/search/${searchInput}`;
    navigate(url);
    setQuery(searchInput);
  };

  return (
    <div className="container">
      <ImageContextProvider>
        <Header handleSearchButton={handleSearchButton} />
        <Navigation />
        <ToastContainer />

        <div className="content">
          <Routes>
            <Route path="/" element={<ImagesList topic="mountain" />} />
            <Route
              path="/snapshot-gallery"
              element={<ImagesList topic="mountain" />}
            />
            <Route path="/mountain" element={<ImagesList topic="mountain" />} />
            <Route path="/birds" element={<ImagesList topic="bird" />} />
            <Route path="/beaches" element={<ImagesList topic="beach" />} />
            <Route path="/food" element={<ImagesList topic="food" />} />
            <Route
              path="/search/:searchInput"
              element={<ImagesList topic={query} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ImageContextProvider>
    </div>
  );
}

export default App;
