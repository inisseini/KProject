import React from "react";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";

export function Links() {
  return (
    <div>
      <TextWithRuby
        text={
          "東京都計量検定所から、このサイトとともに自由研究に活用できるページをご案内します。\n\n・「正しい計量」\n計量の歴史から現在の計量制度までわかりやすく解説した「探検！計量の世界」などを掲載しています。"
        }
      />
      <div
        className="husen "
        style={{ margin: "30px auto" }}
        onClick={() => (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy")}
      >
        <TextWithRuby text={"詳細はこちら"} />
        <span></span>
      </div>
      <TextWithRuby
        text={
          "・「計量の普及活動」\n身近な材料を利用した「棒はかりの作り方」について、動画をまじえて紹介する「WEB版親子はかり教室」のほか、「WEB版都民計量のひろば」、計量のパンフレットなどを掲載しています。"
        }
      />
      <div
        className="husen "
        style={{ margin: "30px auto" }}
        onClick={() => (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/work/work8.html")}
      >
        <TextWithRuby text={"詳細はこちら"} />
        <span></span>
      </div>
    </div>
  );
}
