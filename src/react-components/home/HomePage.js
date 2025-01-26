import React from "react";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { TopPage } from "./TopPage/TopPage";
import { Web3D } from "./Web3D/Web3D";
import { WoodenDesk } from "./TopPage/pages/WoodenDesk";

export function HomePage() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TopPage} />
            <Route path="/Web3D" component={Web3D} />
          </Switch>
        </BrowserRouter>
      </div>

      <WoodenDesk />
    </>
  );
}
