import React from "react";
import { createRoot } from "react-dom/client";
import { WrappedIntlProvider } from "./react-components/wrapped-intl-provider";
import registerTelemetry from "./telemetry";
import "./utils/theme";
import { HomePage } from "./react-components/home/HomePage";
import { AuthContextProvider } from "./react-components/auth/AuthContext";
{
  /*import "./react-components/styles/global.scss";*/
}
import { ThemeProvider } from "./react-components/styles/theme";
import { store } from "./utils/store-instance";

registerTelemetry("/home", "Hubs Home Page");

window.APP = { store };

const PASSWORD = "20250123keiryoumuseum";

function checkPassword() {
  const userInput = prompt("パスワードを入力してください:");

  if (userInput === PASSWORD) {
    console.log("認証成功！処理を続行します。");
    // 後続の処理を書く

    function HomeRoot() {
      return (
        <WrappedIntlProvider>
          <ThemeProvider store={store}>
            <AuthContextProvider store={store}>
              <HomePage />
            </AuthContextProvider>
          </ThemeProvider>
        </WrappedIntlProvider>
      );
    }

    const container = document.getElementById("home-root");
    const root = createRoot(container);
    root.render(<HomeRoot />);
  } else {
    alert("パスワードが間違っています。");
    return; // 関数の中断
  }
}

checkPassword(); // パスワードチェックを実行
