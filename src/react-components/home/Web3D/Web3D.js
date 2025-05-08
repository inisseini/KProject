import React from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { Suspense, useState, useEffect, useRef } from "react";
import { RyougaeTenbin } from "./components/RyougaeTenbin";
import { Bouhakari } from "./components/Bouhakari";
import { StatsComponent } from "./components/StatsComponent";
import { Ukihyou } from "./components/Ukihyou";
import { Detail } from "./components/Detail";
import { Title } from "./components/Title";
import { Quiz } from "./components/Quiz";
import "../style.css";
import { ResearchSupport } from "./components/ResearchSupport";
import Logo from "../../../assets/images/keiryou logo.png";
import Goal from "../../../assets/images/keiryou-hakase-goal.png";
import Clear from "../../../assets/images/keiryou-hakase-clear.png";
import PleaseFeedback from "../../../assets/images/pleasefeedback.png";
import { useAnimateOnScroll } from "../TopPage/hook/useAnimateOnScroll";
import { TextWithRuby } from "./components/TextWithRuby";
import { Kensyakuki } from "./components/Kensyakuki";
import { Kennikou } from "./components/Kennikou";
import { Taximetor } from "./components/Taximetor";
import { KeitaisikiHousekiyouTenbin } from "./components/KeitaisikiHousekiyouTenbin";
import { SitsusikiGusmetor } from "./components/SitsusikiGusmetor";
import { Souonkei } from "./components/Souonkei";
import { Sindourevelkei } from "./components/sindourevelkei";
import { ScrollToSection } from "../generalAssets/components/ScrollToSection";
import { CustomModal } from "../generalAssets/components/CustomModal";
import { MdOutlineTouchApp } from "react-icons/md";
import { SubPage } from "../TopPage/pages/SubPage";

import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { SubContents } from "../generalAssets/components/SubContents";

import ninnteijou from "../../../assets/images/認定状.pdf";
import { Model } from "./components/Model";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

const Controls = props => {
  const { camera, gl } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 10); // カメラの初期位置
    camera.lookAt(0, 0, 0); // カメラの向きをリセット
    camera.updateProjectionMatrix(); // 投影行列を更新
  }, [props.selectedNum]);
  const controlsRef = useRef();

  useFrame(() => {
    if (controlsRef.current) {
      controlsRef.current.update(); // Update controls on every frame
    }
  });

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableDamping
      dampingFactor={0.1}
      target={[0, 0, 0]}
    />
  );
};

export function Web3D(props) {
  const [selectedNum, setNum] = useState(1);
  const [isPassed, setIsPassed] = useState(JSON.parse(localStorage.getItem("quizPassed")) || false);
  const [isOpen, setOpen] = useState(false);
  const [firstView, setView] = useState(true);

  const setMenu = () => {
    setOpen(!isOpen);
    if (firstView) setView(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isOpen]);

  const list = [
    "①両替天びん",
    "②検尺器",
    "③検位衡",
    "④棒はかり",
    "⑤浮ひょう",
    "⑥タクシーメーター",
    "⑦携帯式宝石用天びん",
    "⑧湿式ガスメーター",
    "⑨普通騒音計",
    "⑩振動レベル計"
  ];

  const [currentDate, setCurrentDate] = useState(" / / ");
  const [stickerInit, setStickerInit] = useState(false);

  useEffect(() => {
    // 現在の日付を取得
    const now = new Date();
    const formattedDate = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    // 日付をステートにセット
    setCurrentDate(formattedDate);

    if (!stickerInit && window.Sticker) {
      window.Sticker.init(".sticker", {
        hover: true, // マウスホバーで効果を発動
        offset: 5, // 効果の強さ
        perspective: 1000 // 3D効果の深さ
      });
      setStickerInit(true);
    }

    const hash = window.location.hash;
    if (hash !== "" && hash.startsWith("#")) {
      const path = hash.slice(1);
      if (path === "feedback") {
        document.getElementById("feedbackContainer")?.click();
      } else {
        scrollToSectionTop(hash.slice(1));
      }
    }

    // Lambda Function URL
    const lambdaUrl = "https://fg3szbcjeinq353h4uniiwy4qy0sqriz.lambda-url.ap-northeast-1.on.aws/";

    // データ送信用の関数
    async function sendVisitorData() {
      try {
        const response = await fetch(lambdaUrl, {
          method: "POST", // POST リクエストを使用
          headers: {
            "Content-Type": "application/json" // リクエストのコンテンツタイプ
          },
          body: JSON.stringify({}) // 空のボディ (今回は送信データ不要)
        });

        // レスポンスを確認
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("成功:", data);
      } catch (error) {
        console.error("エラー:", error);
      }
    }

    // 関数を実行
    sendVisitorData();
  }, []);

  const animateRef = useAnimateOnScroll("animatedItem");

  const { scrollToSectionTop, scrollPastSection } = ScrollToSection({
    offset: 20
  });

  const triggerRef = useRef(null);
  const handleControlsClick = () => {
    if (triggerRef.current && !document.getElementById("modal")) {
      triggerRef.current.click(); // トリガーボタンのクリックを発火
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
    <>
      {!isOpen && (
        <div className="fixTag open MOBILE" onClick={() => setMenu()}>
          <LuMenu style={{ fontSize: "30px", margin: "0 auto" }} />
        </div>
      )}
      {isOpen && (
        <div className="fixTag close MOBILE" onClick={() => setMenu()}>
          <MdOutlineClose style={{ fontSize: "30px", margin: "0 auto" }} />
        </div>
      )}
      <SubPage
        currentDate={currentDate}
        isOpen={isOpen}
        setOpen={setOpen}
        firstView={firstView}
        setView={setView}
        isWeb3D={true}
      />
      <div className="Web3D">
        <div style={{ position: "relative", zIndex: "0" }} className="Web3DContentscontainer">
          <div className="objectsContainer">
            {/*<StatsComponent />*/}
            <header>
              <img
                src={Logo}
                alt="ロゴ"
                className="Logo item1 animatedItem vertical"
                onClick={() => {
                  window.location.href = "/";
                }}
              />
              <div className="Name PC item2 fs">
                Name:　<span className="fm">はかるん</span>
              </div>
              <div className="Date PC item3 fs">
                Date:　<span className="fm">{currentDate} </span>
              </div>

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
            </header>
            <div className="Web3Ddescription taped">
              <TextWithRuby
                text={
                  "このページでは計量器ひとつひとつについてとても詳しく紹介されているよ！\nじっくり眺めたり/*アニメーションさせたり*/解説を読むことでキミの計量の知識が深まるんだ！\n\nさらに/*クイズに挑戦*/して「計量はかせ」の称号をゲットしてみよう！\nまちがえたって何度でも挑戦してみよう！\n\n/*学習のまとめ用紙*/も用意しているから自由研究で計量をテーマにしたいみんなも目を通してみよう！\n\n/*満足度アンケート*/も書いてくれると嬉しいな！"
                }
              />
            </div>
            <ul className="info">
              <li
                className="husen bottom animatedItem horizon"
                onClick={() => {
                  handleNavigate("?page=web3d#Web3DAnchor");
                }}
              >
                <TextWithRuby text={"計量器を動かしてみよう！"} />
                <span></span>
              </li>
              <li
                className="husen bottom animatedItem horizon"
                onClick={() => {
                  handleNavigate("?page=web3d#QuizAnchor");
                }}
              >
                <TextWithRuby text={"クイズに挑戦しよう！"} />
                <span></span>
              </li>
              <li
                className="husen green bottom animatedItem horizon"
                onClick={() => {
                  handleNavigate("?page=web3d#SupportAnchor");
                }}
              >
                <TextWithRuby text={"まとめ用紙を活用しよう！"} />
                <span></span>
              </li>
            </ul>

            <div className="diviner"></div>

            <div>
              <div className="titleContainer" id="Web3DAnchor">
                <div className="sticker hakarun1"></div>
                <h1 className="marker red">
                  <TextWithRuby text={"計量器を動かしてみよう！"} />
                </h1>

                <div className="sticker hakarun2"></div>
              </div>
              <div className="UI-top">
                <div
                  className="switchObjects husen-reverse PC center"
                  onClick={() => {
                    if (selectedNum - 1 > 0) {
                      setNum(selectedNum - 1);
                    } else {
                      setNum(10);
                    }
                  }}
                >
                  <TextWithRuby
                    text={`${selectedNum - 1 === 0 ? list[9] : list[selectedNum - 2]}`}
                    anotherRuby={{ 浮: "ふ" }}
                    textAlign="center"
                  />
                  <span></span>
                </div>
                <Title selectedNum={selectedNum} setNum={setNum} />
                <div
                  className="switchObjects husen PC center"
                  onClick={() => {
                    if (selectedNum + 1 <= 10) {
                      setNum(selectedNum + 1);
                    } else {
                      setNum(1);
                    }
                  }}
                >
                  <TextWithRuby
                    text={`${selectedNum === 10 ? list[0] : list[selectedNum]}`}
                    anotherRuby={{ 浮: "ふ" }}
                    textAlign="center"
                  />

                  <span></span>
                </div>

                <div className="controls" onClick={() => handleControlsClick()}>
                  <MdOutlineTouchApp />
                  <CustomModal triggerText="操作方法" triggerRef={triggerRef}>
                    <h1>
                      <TextWithRuby text={"操作方法"} />
                    </h1>
                    <h2 className="PC">
                      <TextWithRuby text={"【　PCの場合　】"} />
                    </h2>

                    <p className="PC">
                      <TextWithRuby
                        text={
                          "・ズームイン/ズームアウト：\nマウススクロールで拡大・縮小できます。\n\n・回転： \n3Dモデルをドラッグすると回転させることができます。\n\n・アニメーション：「クリック」と表示されているボタンをクリックするとアニメーションの説明文が出現するので「動かす」ボタンをクリックするとアニメーションがスタートします。"
                        }
                      />
                    </p>
                    <h2 className="PC">
                      <TextWithRuby text={"【　スマホ・タブレットの場合　】"} />
                    </h2>
                    <p className="PC">
                      <TextWithRuby
                        text={
                          "・ズームイン/ズームアウト：\n指で画面をつまむようにすると縮小し画面を広げるようにすると拡大します。\n\n・回転： \n画面をスワイプすると回転させることができます。\n\n・アニメーション：「クリック」と表示されているボタンをタップするとアニメーションの説明文が出現するので「動かす」ボタンをタップするとアニメーションがスタートします。"
                        }
                      />
                    </p>
                    <h2 className="MOBILE">
                      <TextWithRuby text={"【　スマホ・タブレットの場合　】"} />
                    </h2>
                    <p className="MOBILE">
                      <TextWithRuby
                        text={
                          "・ズームイン/ズームアウト：\n指で画面をつまむようにすると縮小し画面を広げるようにすると拡大します。\n\n・回転： \n画面をスワイプすると回転させることができます。\n\n・アニメーション：「クリック」と表示されているボタンをタップするとアニメーションの説明文が出現するので「動かす」ボタンをタップするとアニメーションがスタートします。"
                        }
                      />
                    </p>
                    <h2 className="MOBILE">
                      <TextWithRuby text={"【　PCの場合　】"} />
                    </h2>
                    <p className="MOBILE">
                      <TextWithRuby
                        text={
                          "・ズームイン/ズームアウト：\nマウススクロールで拡大・縮小できます。\n\n・回転： \n3Dモデルをドラッグすると回転させることができます。\n\n・アニメーション：「クリック」と表示されているボタンをクリックするとアニメーションの説明文が出現するので「動かす」ボタンをクリックするとアニメーションがスタートします。"
                        }
                      />
                    </p>
                  </CustomModal>
                </div>
              </div>

              <Canvas
                gl={{ logarithmicDepthBuffer: false }}
                className="Canvas marker-box-green"
                camera={{ position: [0, 0, 10], fov: 50 }}
              >
                {/*
              <OrbitControls
                maxDistance={10}
                minDistance={1}
                enableZoom={true}
                enablePan={true}
                rotation={[0, 0, 0]}
                makeDefault
              />
              <Environment>
                <group>
                  <Lightformer
                    intensity={2}
                    position={[0, 5, 5]}
                    scale={[10, 10, 1]}
                  />

                  <Lightformer
                    intensity={2}
                    position={[0, 1, 1]}
                    scale={[10, 10, 1]}
                  />
                  <Lightformer
                    intensity={2}
                    position={[0, 5, -5]}
                    scale={[10, 10, 1]}
                  />
                </group>
              </Environment>
              <ambientLight intensity={1.5} />
               */}
                <Suspense fallback={null}>
                  {selectedNum === 1 && <RyougaeTenbin />}
                  {selectedNum === 2 && <Kensyakuki />}
                  {selectedNum === 3 && <Kennikou />}
                  {selectedNum === 4 && <Bouhakari />}
                  {selectedNum === 5 && <Ukihyou />}
                  {selectedNum === 6 && <Taximetor />}
                  {selectedNum === 7 && <KeitaisikiHousekiyouTenbin />}
                  {selectedNum === 8 && <SitsusikiGusmetor />}
                  {selectedNum === 9 && <Souonkei />}
                  {selectedNum === 10 && <Sindourevelkei />}
                </Suspense>
                <ambientLight intensity={2} />
                <directionalLight position={[5, 10, 5]} intensity={2} />
                <directionalLight position={[-5, -10, -5]} intensity={2} />
                <directionalLight position={[10, 5, -10]} intensity={2} />
                {/* OrbitControls */}
                <Controls selectedNum={selectedNum} />
              </Canvas>

              <div className="UI-bottom">
                <Detail selectedNum={selectedNum} />
              </div>
            </div>
          </div>

          <div className="diviner"></div>

          {!JSON.parse(localStorage.getItem("getFeedback")) && (
            <div
              onClick={() => {
                document.getElementById("feedbackContainer")?.click();
              }}
              className="pleaseFeedback"
            >
              <img src={PleaseFeedback} alt="アンケートのお願い" />
            </div>
          )}

          <div className="titleContainer" id="QuizAnchor">
            <div className="sticker hakarun3"></div>
            <h1 className="marker red">
              <TextWithRuby text={"クイズに挑戦しよう！"} />
            </h1>
            <div className="sticker hakarun4"></div>
          </div>
          <Quiz setIsPassed={setIsPassed} />

          <div className="diviner"></div>

          <div className="titleContainer" id="SupportAnchor">
            <div className="sticker hakarun5"></div>
            <h1 className="marker red">
              <TextWithRuby text={"まとめ用紙を活用しよう！"} />
            </h1>

            <div className="sticker hakarun6"></div>
          </div>
          <div className="animatedItem horizon">
            <ResearchSupport />
          </div>

          <div className="diviner large"></div>

          <footer>
            <SubContents setOpen={setOpen} />
          </footer>
        </div>
      </div>
    </>
  );
}
