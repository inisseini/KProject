import React from "react";
import { createRoot } from "react-dom/client";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import registerTelemetry from "./telemetry";
import "./utils/theme";
import { AuthContextProvider } from "./react-components/auth/AuthContext";
import { SignInModalContainer } from "./react-components/auth/SignInModalContainer";
import { PageContainer } from "./react-components/layout/PageContainer";
import "./react-components/styles/global.scss";
import "./assets/stylesheets/globals.scss";
import { Center } from "./react-components/layout/Center";
import { ThemeProvider } from "./react-components/styles/theme";
import { store } from "./utils/store-instance";
import { Web3D } from "./react-components/home/Web3D/Web3D.js";
import "./react-components/home/style.css";
import { WoodenDesk } from "./react-components/home/TopPage/pages/WoodenDesk";

registerTelemetry("/web3d", "Web3D Page");

window.APP = { store };

function Web3DRoot() {
  return (
    <>
      <Web3D />
      <WoodenDesk />
    </>
  );
}
console.log("test");

const container = document.getElementById("ui-root");

const root = createRoot(container);
root.render(<Web3DRoot />);
