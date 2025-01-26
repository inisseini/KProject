import React, { useState } from "react";
import { TextWithRuby } from "./TextWithRuby";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

export function ExpandableContent({ selectedNum }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // 表示内容を設定するデータ
  const contentData = {
    1: (
      <>
        <TextWithRuby
          text={
            "・「はかる」世界ー「魂のはかり」から「電気のはかり」までー\n（松本栄寿/著　玉川大学出版部）\n\n・いろいろな地図記号\n（国土交通省 国土地理院）"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "https://www.gsi.go.jp/KIDS/KIDS05_00002.html")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
        <TextWithRuby
          text={
            "・「第４章 計量制度の歴史　江戸時代までの日本の計量制度　計量豆知識 15 銀行の地図記号が江戸時代の分銅の形というのは本当？」\n（東京都計量検定所「探検！計量の世界」）"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() =>
            (window.location.href =
              "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy/documents/tanken-keiryounosekai220328.pdf")
          }
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    2: (
      <>
        <TextWithRuby text={"・岡谷市立岡谷蚕糸博物館"} />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "https://silkfact.jp/")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
        <TextWithRuby
          text={
            "・「第３章 SI（国際単位系）単位　計量豆知識 9 ストッキングやタイツの品質表示のデニールって何？」 \n(東京都計量検定所「探検！計量の世界」)"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() =>
            (window.location.href =
              "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy/documents/tanken-keiryounosekai220328.pdf")
          }
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    3: (
      <>
        <TextWithRuby text={"・岡谷市立岡谷蚕糸博物館"} />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "https://silkfact.jp/")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
        <TextWithRuby
          text={
            "・「第３章 SI（国際単位系）単位　計量豆知識 9 ストッキングやタイツの品質表示のデニールって何？」 \n(東京都計量検定所「探検！計量の世界」)"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() =>
            (window.location.href =
              "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy/documents/tanken-keiryounosekai220328.pdf")
          }
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    4: (
      <>
        <TextWithRuby
          text={"・「はかる」世界ー「魂のはかり」から「電気のはかり」までー\n（松本栄寿/著　玉川大学出版部）"}
        />
        <TextWithRuby
          text={
            "・「特集　定期検査 消費生活情報　ご存知ですか？はかりの検査」\n（一般財団法人日本計量振興協会「計量のひろば」No56）"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "http://www.nikkeishin.or.jp/img/kinenbi_img/No56-1.pdf")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
        <TextWithRuby text={"・Web版「親子はかり教室」\n（東京都計量検定所）"} />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/manabitai/koza/keiryo/")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    6: (
      <>
        <TextWithRuby
          text={
            "「・第７章 計量器の検定制度、基準器検査制度　計量豆知識 24 タクシーの運賃が毎回違うのはなぜ？」\n（東京都計量検定所「探検！計量の世界」）"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() =>
            (window.location.href =
              "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy/documents/tanken-keiryounosekai220328.pdf")
          }
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    7: (
      <>
        <TextWithRuby
          text={
            "「・第３章 SI（国際単位系）単位　計量豆知識 ８ 宝石のカラットは SI 単位じゃないの？」 \n（東京都計量検定所「探検！計量の世界」）"
          }
        />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() =>
            (window.location.href =
              "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/policy/documents/tanken-keiryounosekai220328.pdf")
          }
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    ),
    9: (
      <>
        <TextWithRuby text={"・「一般環境騒音について」\n（環境省）"} />
        <div
          className="husen "
          style={{ margin: "30px auto" }}
          onClick={() => (window.location.href = "https://www.env.go.jp/air/ippan/")}
        >
          <TextWithRuby text={"詳細はこちら"} />
          <span></span>
        </div>
      </>
    )
  };

  // デフォルトメッセージ
  const defaultMessage = "";

  // 現在の表示内容を取得
  const currentContent = contentData[selectedNum] || defaultMessage;

  // 展開/折りたたみをトグルする
  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className="expandable-container">
      <button className="expand-button" onClick={toggleExpand} style={{ width: "100%" }}>
        {isExpanded ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px auto",
              cursor: "pointer"
            }}
          >
            <TextWithRuby text={"/*【　参考資料　】*/　"} />
            <IoIosArrowUp />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px auto",
              cursor: "pointer"
            }}
          >
            <TextWithRuby text={"/*【　参考資料　】*/　"} />
            <IoIosArrowDown />
          </div>
        )}
      </button>

      <div
        className={`expandable-content ${isExpanded ? "expanded" : "collapsed"}`}
        style={{
          maxHeight: isExpanded ? "500px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease"
        }}
      >
        <div>{currentContent}</div>
      </div>
    </div>
  );
}
