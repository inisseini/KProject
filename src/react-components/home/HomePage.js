import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { TopPage } from "./TopPage/TopPage";
import { Web3D } from "./Web3D/Web3D";
import { WoodenDesk } from "./TopPage/pages/WoodenDesk";

export function HomePage() {
  console.log("homepage");
  console.log(window.location);

  return (
    <>
      <div className="App">
        <TopPage />
      </div>

      <WoodenDesk />
    </>
  );
}
