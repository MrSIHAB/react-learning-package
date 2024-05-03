import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"

import Homepage from "./pages/Home";
import EditPage from "./pages/Edit";

import "./meme.css";
import { Route, Routes } from "react-router-dom";

const MemeWraper = () => {
  return (
    <div className="memeWraper">
      <div>
        <h1
          style={{
            textAlign: "center",
            fontFamily: "revert",
            textDecoration: "underline",
          }}
        >
          Meme Genarator
        </h1>
      </div>

      <Routes>
        <Route path="" element={<Homepage />} />

        <Route path="edit" element={<EditPage />} />
      </Routes>
    </div>
  );
};

export default MemeWraper;
