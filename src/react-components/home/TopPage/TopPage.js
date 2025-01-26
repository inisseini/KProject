import React from "react";
import { useState, useEffect, useRef } from "react";
import { useAnimateOnScroll } from "./hook/useAnimateOnScroll";
import Logo from "../../../assets/images/keiryou logo.png";
import Goal from "../../../assets/images/keiryou-hakase-goal.png";
import Clear from "../../../assets/images/keiryou-hakase-clear.png";
import topImg1 from "../../../assets/images/Parts1.png";
import topImg2 from "../../../assets/images/Parts2.png";
import topImg3 from "../../../assets/images/Parts3.png";
import topImg4 from "../../../assets/images/Parts4.png";
import topImg5 from "../../../assets/images/Parts5.png";
import topImg6 from "../../../assets/images/Parts6.png";
import topImg7 from "../../../assets/images/Parts7.png";
import topImg8 from "../../../assets/images/Parts8.png";
import topImg9 from "../../../assets/images/Parts9.png";
import topImg10 from "../../../assets/images/Parts10.png";
import topImg11 from "../../../assets/images/Parts11.png";
import hakarun from "../../../assets/images/hakarunLogo.png";
import metaverseThumbnail from "../../../assets/images/MetaverseImage.png";
import web3DThumbnail from "../../../assets/images/WEB3DImage.png";
import { LuMenu } from "react-icons/lu";
import { MdOutlineClose } from "react-icons/md";
import { SubPage } from "./pages/SubPage";
import { FAQ } from "./pages/FAQ";
import "../style.css";
import { TextWithRuby } from "../Web3D/components/TextWithRuby";
import { Kenteijo } from "./pages/Kenteijo";
import { ScrollToSection } from "../generalAssets/components/ScrollToSection";
import { SubContents } from "../generalAssets/components/SubContents";
import ninnteijou from "../../../assets/images/認定状.pdf";

export function TopPage(props) {
  const [currentDate, setCurrentDate] = useState(" / / ");
  const [stickerInit, setStickerInit] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [firstView, setView] = useState(true);

  const [isPassed, setIsPassed] = useState(JSON.parse(localStorage.getItem("quizPassed")) || false);

  const { scrollToSectionTop, scrollPastSection } = ScrollToSection({
    offset: 20
  });

  const setMenu = () => {
    setOpen(!isOpen);
    if (firstView) setView(false);
  };
  useEffect(() => {
    // 現在の日付を取得
    const now = new Date();
    const formattedDate = `${now.getFullYear()}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now
      .getDate()
      .toString()
      .padStart(2, "0")}`;

    // 日付をステートにセット
    setCurrentDate(formattedDate);

    {
      /** 
    if (!stickerInit) {
      window.Sticker.init(".sticker", {
        hover: true, // マウスホバーで効果を発動
        offset: 5, // 効果の強さ
        perspective: 1000 // 3D効果の深さ
      });
      setStickerInit(true);
    }
*/
    }
    const hash = window.location.hash;
    if (hash !== "" && hash.startsWith("#")) {
      scrollToSectionTop(hash.slice(1));
    }

    generateRandomNumbers();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [isOpen]);

  const animateRef = useAnimateOnScroll("animatedItem");

  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // ランダムに1〜8の重複しない2つの数字を選択してstateにセット
  const generateRandomNumbers = () => {
    const numbers = Array.from({ length: 8 }, (_, i) => i + 1); // [1, 2, 3, ..., 8]
    const shuffled = numbers.sort(() => 0.5 - Math.random());
    setSelectedNumbers(shuffled.slice(0, 2)); // 最初の2つを取得
  };

  return (
    <>
      <SubPage currentDate={currentDate} isOpen={isOpen} setOpen={setOpen} firstView={firstView} setView={setView} />
      <div className="TopPage">
        {!isOpen && (
          <div className="tag open MOBILE" onClick={() => setMenu()}>
            <LuMenu />
            <p className="fs">メニュー</p>
          </div>
        )}
        {isOpen && (
          <div className="tag close MOBILE" onClick={() => setMenu()}>
            <MdOutlineClose />
            <p className="">閉じる</p>
          </div>
        )}

        <div className="section section1" id="TopAnchor">
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
              Date:　<span className="fm">{currentDate} </span>
            </div>
          </header>
          <div className="contentsContainer fm">
            <div className="column">
              <div className="column1 left">
                <div className="marker-box concept">
                  <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around"
                      }}
                    >
                      <h1
                        style={{
                          whiteSpace: "nowrap"
                        }}
                      >
                        <TextWithRuby text={"計量ってなんだろう？"} />
                      </h1>

                      <TextWithRuby
                        text={
                          "気づきにくいけれど、計量は昔からいろいろなところで、私たちのくらしを支えている大事なものなんだ！"
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        flexShrink: "0",
                        flexGrow: "0"
                      }}
                      className="fs"
                    >
                      <img src={hakarun} alt="はかるん" style={{ width: "150px", maxWidth: "25dvw" }} />
                      <TextWithRuby text={"東京都計量検定所\n公式キャラクター「はかるん」"} />
                    </div>
                  </div>

                  <div className="fm">
                    <TextWithRuby text={"そんな計量のことを"} />・
                    <span className="marker green">
                      <TextWithRuby text={"メタバースで体験"} />
                    </span>
                    して
                    <br />・
                    <span className="marker green">
                      <TextWithRuby text={"ウェブサイトで楽しく学習"} />
                    </span>
                    しよう！！
                  </div>
                  <div className="topImgContainer">
                    <img src={topImg1} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-110" }} />
                    <img src={topImg2} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-100" }} />
                    <img src={topImg3} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-90" }} />
                    <img src={topImg4} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-80" }} />
                    <img src={topImg5} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-70" }} />
                    <img src={topImg6} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-60" }} />
                    <img src={topImg7} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-50" }} />
                    <img src={topImg8} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-40" }} />
                    <img src={topImg9} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-30" }} />
                    <img src={topImg10} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-20" }} />
                    <img src={topImg11} alt="topImg" className="animatedItem vertical" style={{ zIndex: "-10" }} />
                  </div>
                </div>
              </div>

              <div className="linkContainer fm">
                <div className="sticker-box green toMetaverse taped animatedItem vertical">
                  <TextWithRuby
                    text={"メタバースで江戸時代にタイムスリップして\n計量を体験してみよう！"}
                    textAlign="center"
                  />
                  <div className="linkImg">
                    <img src={metaverseThumbnail} alt="メタバースサムネイル" />
                  </div>
                  <div
                    className="husen animatedItem horizon"
                    style={{ margin: "0 auto" }}
                    onClick={() =>
                      (window.location.href =
                        "https://keiryomuseum.metro.tokyo.lg.jp/crh2VVj/%E8%A8%88%E9%87%8F%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0%E3%80%80%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E5%88%86%E9%A4%A8")
                    }
                  >
                    こちらをクリック
                    <span></span>
                  </div>
                </div>
                <div className="sticker-box green toWeb3D taped animatedItem vertical">
                  <TextWithRuby
                    text={"ウェブサイトでいろいろな計量器を\n動かしながら学んでみよう！"}
                    textAlign="center"
                  />

                  <div className="linkImg">
                    <img src={web3DThumbnail} alt="WEB3Dサムネイル" />
                  </div>
                  <div
                    className="husen animatedItem horizon"
                    style={{ margin: "0 auto" }}
                    onClick={() => (window.location.href = "/Web3D")}
                  >
                    <a href="/Web3D">こちらをクリック</a>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="forUser fm">
              <div className="husen animatedItem horizon" onClick={() => scrollToSectionTop("WhyAnchor")}>
                <TextWithRuby text={"「計量」ってなんで大事なの？"} />
                <span></span>
              </div>
              <div className="husen animatedItem horizon" onClick={() => scrollToSectionTop("AboutAnchor")}>
                <TextWithRuby text={"計量ミュージアムとは"} />
                <span></span>
              </div>
              <div className="husen animatedItem horizon" onClick={() => scrollToSectionTop("HowAnchor")}>
                <TextWithRuby text={"楽しみ方いっぱい！"} />
                <span></span>
              </div>
              <div className="husen animatedItem horizon" onClick={() => scrollToSectionTop("ResearchAnchor")}>
                <TextWithRuby text={"自由研究におすすめ！"} /> <span></span>
              </div>
              <div className="husen animatedItem horizon" onClick={() => scrollToSectionTop("FAQ")}>
                サービスの利用について <span></span>
              </div>
              <div className="husen green animatedItem horizon" onClick={() => scrollToSectionTop("forParentsAnchor")}>
                <TextWithRuby text={"保護者の方へ"} />
                <span></span>
              </div>
            </div>
          </div>
        </div>

        <div className="diviner" id="WhyAnchor"></div>

        <div className="section section2">
          <div className="Why text">
            <div className="titleContainer">
              <div className={`sticker hakarun${selectedNumbers[0]}`}></div>
              <h1 className="marker red fl">
                <TextWithRuby text={"「計量」ってなんで大事なの？"} />
              </h1>

              <div className={`sticker hakarun${selectedNumbers[1]}`}></div>
            </div>
            <br />
            <div className="ruby fm" style={{ marginTop: "0.8em" }}>
              <TextWithRuby
                text={
                  "　・・・「考えたこともないな」「正しくはかれるのは当たり前だよね」なんて思うかな？\n　/*みんなが学校にいく日の一日をいっしょに考えてみよう！*/\n\n　朝、目ざまし時計のアラームで起きて時間を確認して、したくを開始！\n　天気予報で今日の気温を見て着ていく服を決めたり、出かける時間を見ながら朝ごはんを食べて、歯をみがいたりして大忙し！\n\n　学校にいったら、授業は時間で決められているよね。\n　体育の時間で100ｍ走をしたことはないかな？100ｍってどうやって決まっているんだろう？\n　健康診断では身長や体重をはかるし、給食は材料・調味料の重さや体積をはかって作られているんだよね。\n\n　朝起きて「ちょっとかぜをひいたかな？」と感じたら、体温をはかったりしたことはないかな？\n\n　/*・・・時間、温度、重さ、長さ、体積などわたしたちの日常は「はかること＝計量」であふれているんだ。*/\n　それ以外にもテレビや冷蔵庫、自動車、建物など身の回りにあるものの多くは、それをつくる過程でいろいろなものをはかっているんだ。\n\n　だから、/*「計量」ってとっても身近で大事*/なんだよね！\n　そんな計量について、これからいっしょに学んでみよう！"
                }
                anotherRuby={{ 日: "ひ", 出: "で" }}
                margin={"0 auto"}
              />
            </div>
          </div>
        </div>

        <div className="diviner" id="AboutAnchor"></div>

        <div className="section">
          <div className="About text">
            <div className="titleContainer">
              <div className="sticker hakarun1"></div>
              <h1 className="marker red fl">
                <TextWithRuby text={"計量ミュージアムとは"} />
              </h1>
              <div className="sticker hakarun2"></div>
            </div>
            <br />
            <div className="ruby fm" style={{ marginTop: "0.5em" }}>
              <TextWithRuby
                text={
                  "計量ミュージアムは/*東京都計量検定所が運営*/するウェブサイトだよ。\n 「計量」をもっと身近で楽しいものだと感じてもらうためにたくさんのコンテンツを用意しているんだ。\n\n日常生活のいろいろな場面に関わっている/*計量を、体験・学習*/することができるよ。\n 楽しみながら計量のプロフェッショナル、「計量はかせ」になろう！！"
                }
                margin={"0 auto"}
              />
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TextWithRuby text={"【東京都計量検定所ってどんなところ？】"} />
              </div>
              <br />
              <Kenteijo />
            </div>
          </div>
        </div>
        <div className="diviner"></div>
        <div className="section">
          <div className="How text">
            <div className="titleContainer" id="HowAnchor">
              <div className="sticker hakarun3"></div>
              <h1 className="marker red fl">
                <TextWithRuby text={"楽しみ方いっぱい！"} />
              </h1>
              <div className="sticker hakarun4"></div>
            </div>
            <div className="HowContainer fm" style={{ marginTop: "3.5em", textAlign: "center" }}>
              <TextWithRuby
                text={
                  "計量ミュージアムはさまざまなコンテンツで計量の魅力を発信します。\n\n①メタバース：/*江戸時代を再現*/したメタバース空間で両替商(お金の両替を職業にしていた人々)として/*実際に計量器を操作*/することができます。見るだけでなく体験することでより深い理解を得ましょう！\n\n②ウェブサイト：さまざまな時代の/*計量器の3Dモデル(全１０種類)*/に、ウェブサイト上で触れることができます。アップにしたり回転させたりアニメーションさせたり、満足するまで動かしまくろう！\n\n③クイズ：①と②で計量に詳しくなったら/*計量はかせクイズに挑戦*/だ！全5問のクイズに回答して/*4問正解したら計量はかせに認定*/されます。計量はかせになると、東京都計量検定所の/*はかるんから「計量はかせ」の認定状をもらえるよ*/！"
                }
                anotherRuby={{ 金: "かね", 上: "じょう" }}
                margin={"0 auto"}
              />

              <div className="recommendContainer">
                <div
                  className="husen animatedItem horizon"
                  onClick={() =>
                    (window.location.href =
                      "https://keiryomuseum.metro.tokyo.lg.jp/crh2VVj/%E8%A8%88%E9%87%8F%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%A0%E3%80%80%E3%83%A1%E3%82%BF%E3%83%90%E3%83%BC%E3%82%B9%E5%88%86%E9%A4%A8")
                  }
                >
                  <TextWithRuby text={"①メタバースはこちら"} />
                  <span></span>
                </div>
                <div className="husen animatedItem horizon" onClick={() => (window.location.href = "/Web3D")}>
                  <TextWithRuby text={"②ウェブサイトはこちら"} />
                  <span></span>
                </div>
                <div
                  className="husen animatedItem horizon"
                  onClick={() => (window.location.href = "/Web3D#QuizAnchor")}
                >
                  <TextWithRuby text={"③クイズはこちら"} />
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="diviner" id="ResearchAnchor"></div>

        <div className="section">
          <div className="Reseach text">
            <div className="titleContainer">
              <div className="sticker hakarun5"></div>
              <h1 className="marker red fl">
                <TextWithRuby text={"自由研究におすすめ！"} />
              </h1>
              <div className="sticker hakarun6"></div>
            </div>
            <div className="ResearchContainer fm" style={{ marginTop: "4.3em" }}>
              <TextWithRuby
                text={
                  "計量ミュージアムは自由研究にもピッタリ！\n\nメタバース・ウェブサイト・クイズで計量器に詳しくなれるし、/*学んだことを見やすくまとめるシートもあるんだ！シートに書いてみることで、理解が深まるし、いろいろ気づくことがあるかもしれないね！むずかしく考えずにどんどんチャレンジしてみよう！！*/"
                }
                anotherRuby={{ 分: "わ" }}
                margin={"0 auto"}
              />

              <div
                className="husen animatedItem horizon"
                style={{ margin: "30px auto" }}
                onClick={() => (window.location.href = "/Web3D#SupportAnchor")}
              >
                <TextWithRuby text={"詳細はこちら"} />
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className="diviner" id="FAQ"></div>
        <div className="section">
          <div className="FAQ text">
            <div className="titleContainer">
              <h1 className="marker red fl">サービスの利用について</h1>
            </div>
            <TextWithRuby
              text={
                "本サービスは/*6歳以上のお子様から、無料でご利用いただけます。*/\nそのほかサービスの利用については、以下のFAQをご参照ください。"
              }
              margin={"0 auto"}
            />
            <br />
            <div className="ResearchContainer fm">
              <FAQ />
            </div>
          </div>
        </div>

        <div className="diviner" id="forParentsAnchor"></div>

        <div className="section">
          <div className="forParentsAndGuardians text">
            <div className="titleContainer fm">
              <h1 className="marker green fl">
                <TextWithRuby text={"保護者の方へ"} />
              </h1>
            </div>
            <div className="container fm" style={{ marginTop: "3.4em" }}>
              <TextWithRuby
                text={
                  "お子様の学習に際し以下の点をご留意ください。\n\n①/*利用時間*/：お子様とあらかじめ1日○時間までといったルールを決めておきましょう\n②/*アバター*/：アバターを操作している人とアバターを同一視しないように注意しましょう。"
                }
                margin={"0 auto"}
              />
            </div>
            <br />
          </div>
        </div>

        <div className="diviner large"></div>

        <footer className="section">
          <SubContents setOpen={setOpen} />
        </footer>
      </div>
    </>
  );
}
