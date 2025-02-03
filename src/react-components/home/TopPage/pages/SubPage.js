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

  // Safari かつ Chrome でない場合に 'safari' クラスを <html> に追加
  if (navigator.userAgent.indexOf("Safari") !== -1 && navigator.userAgent.indexOf("Chrome") === -1) {
    document.documentElement.classList.add("safari");
  }

  return (
    <div className={props.isOpen ? "SubPage open" : props.firstView ? "SubPage" : "SubPage close"}>
      <div className="subpageContainer">
        <header>
          <img src={Logo} alt="ロゴ" className="Logo item1 animatedItem vertical" />

          {isPassed ? (
            <div className="item4">
              <img
                src={Clear}
                alt="ロゴ"
                className="HakaseGoal animatedItem vertical PC"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
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
              <LuMenu style={{ fontSize: "30px", margin: "0 auto" }} />
              <p className="PC" style={{ fontSize: "10px" }}>
                メニュー
              </p>
            </div>

            <div
              className="tag tagToMetaverse PC verticalText"
              onClick={() => {
                const xhr = new XMLHttpRequest();
                xhr.open("POST", "https://movwsffowtrsunmnpfoq4yn2uu0rftrn.lambda-url.ap-northeast-1.on.aws/", true);
                xhr.setRequestHeader("content-type", "text/plain");
                const request = `from=${window.location.href}`;
                xhr.send(request);
                window.location.href =
                  "https://keiryomuseum.metro.tokyo.lg.jp/BEY8thH/%E8%A8%88%E9%87%8F%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0-%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E5%88%A5%E9%A4%A8";
              }}
            >
              <p className="PC" style={{ fontSize: "15px" }}>
                メタバ<span className="safari-dash">ー</span>ス
              </p>
            </div>

            <div className="tag tagToWeb3D PC verticalText" onClick={() => handleNavigate("?page=web3d")}>
              <p className="PC" style={{ fontSize: "15px" }}>
                ウ<span className="tag-website-margin">ェ</span>ブサイト
              </p>
            </div>
            <div className="tag tagToQuiz PC verticalText" onClick={() => handleNavigate("?page=web3d#QuizAnchor")}>
              <p className="PC" style={{ fontSize: "15px" }}>
                クイズ
              </p>
            </div>
          </>
        )}
        {props.isOpen && (
          <div className="tag close PC" onClick={() => setMenu()}>
            <MdOutlineClose style={{ fontSize: "30px", margin: "0 auto" }} />
            <p className="PC" style={{ fontSize: "10px" }}>
              <TextWithRuby text={"閉じる"} margin={"0 auto"} textAlign="center" />
            </p>
          </div>
        )}
        <footer>
          <SubContents setMenu={setMenu} />
        </footer>
      </div>
    </div>
  );
}
