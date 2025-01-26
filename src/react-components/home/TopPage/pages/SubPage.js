import React from "react";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import Logo from "../../../../assets/images/keiryou logo.png";
import Clear from "../../../../assets/images/keiryou-hakase-clear.png";
import Goal from "../../../../assets/images/keiryou-hakase-goal.png";
import { SubContents } from "../../generalAssets/components/SubContents";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";
import ninnteijou from "../../../../assets/images/認定状.pdf";

export function SubPage(props) {
  const setMenu = () => {
    props.setOpen(!props.isOpen);
    if (props.firstView) props.setView(false);
  };

  const [isPassed, setIsPassed] = useState(JSON.parse(localStorage.getItem("quizPassed")) || false);

  const handleNavigate = id => {
    // 動的にフル URL を生成
    const targetUrl = `${window.location.origin}${id}`;
    window.location.href = targetUrl; // URL を変更して遷移
    props.setOpen && props.setOpen();
    props.setMenu && props.setMenu();
  };

  useEffect(() => {
    setIsPassed(JSON.parse(localStorage.getItem("quizPassed")) || false);
  }, [props.isOpen]);

  return (
    <div className={props.isOpen ? "SubPage open" : props.firstView ? "SubPage" : "SubPage close"}>
      <header>
        <img src={Logo} alt="ロゴ" className="Logo item1 animatedItem vertical" />

        {isPassed ? (
          <div className="item4">
            <img src={Clear} alt="ロゴ" className="HakaseGoal animatedItem vertical PC" />
            <a href={ninnteijou} download className="husen animatedItem horizon PC">
              <TextWithRuby text={"認定状をダウンロードする"} />
              <span></span>
            </a>
          </div>
        ) : (
          <img src={Goal} alt="ロゴ" className="HakaseGoal item4 animatedItem vertical PC" />
        )}
        <div className="Name PC item2 fs">
          Name:　<span className="fm">はかるん</span>
        </div>
        <div className="Date PC item3 fs">
          Date:　<span className="fm">{props.currentDate} </span>
        </div>
      </header>

      {!props.isOpen && (
        <>
          <div className="tag open PC" onClick={() => setMenu()}>
            <LuMenu style={{ fontSize: "30px" }} />
            <p className="PC" style={{ fontSize: "10px" }}>
              メニュー
            </p>
          </div>

          <div
            className="tag tagToMetaverse PC verticalText"
            onClick={() =>
              (window.location.href =
                "https://keiryomuseum.metro.tokyo.lg.jp/crh2VVj/%E8%A8%88%E9%87%8F%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0%E3%80%80%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E5%88%86%E9%A4%A8")
            }
          >
            <p className="PC" style={{ fontSize: "15px" }}>
              メタバース
            </p>
          </div>

          <div className="tag tagToWeb3D PC verticalText" onClick={() => handleNavigate("/Web3D")}>
            <p className="PC" style={{ fontSize: "15px" }}>
              <span style={{ marginBottom: "0.3em" }}>ウ</span>
              <span style={{ marginBottom: "-0.2em" }}>ェ</span>ブサイト
            </p>
          </div>
          <div className="tag tagToQuiz PC verticalText" onClick={() => handleNavigate("/Web3D#QuizAnchor")}>
            <p className="PC" style={{ fontSize: "15px" }}>
              クイズ
            </p>
          </div>
        </>
      )}
      {props.isOpen && (
        <div className="tag close PC" onClick={() => setMenu()}>
          <MdOutlineClose style={{ fontSize: "30px" }} />
          <p className="PC" style={{ fontSize: "10px" }}>
            <TextWithRuby text={"閉じる"} margin={"0 auto"} textAlign="center" />
          </p>
        </div>
      )}
      <footer>
        <SubContents setMenu={setMenu} />
      </footer>
    </div>
  );
}
