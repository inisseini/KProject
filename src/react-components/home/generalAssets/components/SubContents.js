import React from "react";
import { useRef } from "react";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";
import { CustomModal } from "./CustomModal";
import { IoMdMail } from "react-icons/io";
import { ContactForm } from "../../TopPage/pages/ContactForm";
import { Policy } from "./Policy";
import { Links } from "./Links";
import { RiSurveyLine } from "react-icons/ri";
import { FeedBack } from "../../Web3D/components/FeedBack";

export function SubContents(props) {
  const triggerRefContact = useRef(null);
  const triggerRefFeedBack = useRef(null);
  const handleControlsClickContact = () => {
    if (triggerRefContact.current && !document.getElementById("modal")) {
      triggerRefContact.current.click(); // トリガーボタンのクリックを発火
    }
  };
  const handleControlsClickFeedBack = () => {
    if (triggerRefContact.current && !document.getElementById("modal")) {
      triggerRefFeedBack.current.click(); // トリガーボタンのクリックを発火
    }
  };

  const triggerRefLink = useRef(null);
  const handleControlsClickLink = () => {
    if (triggerRefLink.current && !document.getElementById("modal")) {
      triggerRefLink.current.click(); // トリガーボタンのクリックを発火
    }
  };

  const handleNavigate = id => {
    // 動的にフル URL を生成
    const targetUrl = `${window.location.origin}${id}`;
    window.location.href = targetUrl; // URL を変更して遷移
    props.setOpen && props.setOpen();
    props.setMenu && props.setMenu();
  };

  return (
    <div style={{ position: "relative", zIndex: "2" }} className="subContainer">
      <div className="menuContainer fm">
        <div className="husen animatedItem horizon fs" style={{ margin: "30px auto" }}>
          メニュー
        </div>
        <div className="forUser">
          <div className="husen animatedItem horizon" onClick={() => handleNavigate("#WhyAnchor")}>
            <TextWithRuby text={"「計量」ってなんで大事なの？"} />
            <span></span>
          </div>
          <div className="husen animatedItem horizon" onClick={() => handleNavigate("#AboutAnchor")}>
            <TextWithRuby text={"計量ミュージアムとは"} />
            <span></span>
          </div>
          <div className="husen animatedItem horizon" onClick={() => handleNavigate("#HowAnchor")}>
            <TextWithRuby text={"楽しみ方いっぱい！"} />
            <span></span>
          </div>
          <div className="husen animatedItem horizon" onClick={() => handleNavigate("#ResearchAnchor")}>
            <TextWithRuby text={"自由研究におすすめ！"} /> <span></span>
          </div>
          <div className="husen animatedItem horizon" onClick={() => handleNavigate("#FAQ")}>
            <TextWithRuby text={"サービスの利用について"} /> <span></span>
          </div>
          <div className="husen green animatedItem horizon" onClick={() => handleNavigate("#forParentsAnchor")}>
            <TextWithRuby text={"保護者の方へ"} />
            <span></span>
          </div>
          <div className="husen green animatedItem horizon" onClick={() => handleControlsClickLink()}>
            <CustomModal triggerText={"リンク集"} triggerRef={triggerRefLink}>
              <Links />
            </CustomModal>

            <span></span>
          </div>
        </div>
        <br />
        <ul className="info">
          <li
            className="husen bottom"
            onClick={() => {
              handleNavigate("?page=web3d#Web3DAnchor");
            }}
          >
            <TextWithRuby text={"計量器を動かしてみよう！"} />
            <span></span>
          </li>
          <li
            className="husen bottom"
            onClick={() => {
              handleNavigate("?page=web3d#QuizAnchor");
            }}
          >
            <TextWithRuby text={"クイズに挑戦しよう！"} />
            <span></span>
          </li>
          <li
            className="husen green bottom"
            onClick={() => {
              handleNavigate("?page=web3d#SupportAnchor");
            }}
          >
            <TextWithRuby text={"まとめ用紙を活用しよう！"} />
            <span></span>
          </li>
          <br />
          <br />

          <li
            className="husen "
            onClick={() => {
              window.location.href =
                "https://keiryomuseum.metro.tokyo.lg.jp/BEY8thH/%E8%A8%88%E9%87%8F%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0-%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E5%88%A5%E9%A4%A8";
            }}
          >
            <TextWithRuby text={"メタバースで江戸時代体験"} />
            <span></span>
          </li>
        </ul>
      </div>

      <div className="diviner"></div>

      <div className="contactAndFeedBack">
        <div className="contactForm animatedItem vertical fm" onClick={() => handleControlsClickContact()}>
          <IoMdMail />
          <CustomModal triggerText="お問い合わせはこちら" triggerRef={triggerRefContact}>
            <ContactForm />
          </CustomModal>
        </div>

        {!JSON.parse(localStorage.getItem("getFeedback")) && (
          <div
            className="contactForm animatedItem vertical fm"
            onClick={() => handleControlsClickFeedBack()}
            id="feedbackContainer"
          >
            <RiSurveyLine />
            <CustomModal triggerText="アンケートのお願い" triggerRef={triggerRefFeedBack}>
              <FeedBack />
            </CustomModal>
          </div>
        )}
      </div>

      <div className="diviner"></div>
      <br />

      <div
        style={{
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline"
        }}
        className="detail fm"
      >
        <TextWithRuby text={"© 2024 東京都計量検定所　|"} />
        <CustomModal triggerText={"　サイトポリシー"}>
          <Policy />
        </CustomModal>
      </div>
    </div>
  );
}
