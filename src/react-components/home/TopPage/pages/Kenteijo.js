import React, { useState } from "react";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";
import hakarun from "../../generalAssets/images/hakarunLogo.png";

export function Kenteijo() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: <TextWithRuby text={"何をしているところ？"} anotherRuby={{ 何: "なに" }} />,
      answer: (
        <TextWithRuby
          text={
            "・みなさんは、体重計、体温計、水道などのメーター、お店のはかりなどの「計量器」が正しくはかれているか、あまり意識しませんよね？\n\n・法律に基づいて、/*計量器が正しいか、正しく計量しているかを検査して、わたしたちが当たり前だと思っている「正しい計量」を守って、みなさんの安全で安心なくらしを支えている*/のが「計量検定所」です。"
          }
        />
      )
    },
    {
      question: <TextWithRuby text={"施設見学はできないの？"} />,
      answer: (
        <>
          <TextWithRuby
            text={
              "・毎年夏休みに小学生とその保護者の方を対象に/*「親子はかり教室」*/というイベントで、/*計量器の検査を行っている施設や歴史的な計量器の展示を見ながら、検定所の仕事を学んだり、ゲーム感覚で「はかる」体験*/をしていただけます。\n\n・また、簡単な道具で100gまで計量できる「棒はかり」をつくり、実際に身のまわりのものをはかることも行っています。\n\n東京都計量検定所「講座・イベント案内」親子はかり教室"
            }
          />
          <div
            className="husen "
            style={{ margin: "30px auto" }}
            onClick={() =>
              (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/manabitai/koza/keiryo/")
            }
          >
            <TextWithRuby text={"詳細はこちら"} />
            <span></span>
          </div>
        </>
      )
    },
    {
      question: <TextWithRuby text={"子供向けにやっているイベントがあったら教えて！"} />,
      answer: (
        <>
          <TextWithRuby
            text={
              "・毎年、小学生とその保護者の方を対象に施設見学や棒はかり工作の体験をしていただく、/*夏休み「親子はかり教室」*/、また、/*11月1日の計量記念日*/に、広く一般の方を対象に「都民計量のひろば」を開催しています。\n/*「都民計量のひろば」*/では健康、環境、食品、エネルギーなど、わたしたちのくらしと強く結びついている計量のことを楽しく紹介します。\n計量ゲームやクイズ、棒はかりづくりのプログラムもあります。\n\n・イベントの情報は、計量検定所のホームページやＳＮＳ、東京都の広報誌などで発信するので、チェックしてぜひ参加してくださいね！\n\n・東京都計量検定所ホームページ「講座・イベント案内」"
            }
          />
          <br />
          <div
            className="husen red"
            style={{ margin: "0 auto" }}
            onClick={() =>
              (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/manabitai/koza/keiryo/")
            }
          >
            <TextWithRuby text={"詳細"} />
            <span></span>
          </div>
        </>
      )
    },
    {
      question: <TextWithRuby text={"計量ミュージアムの計量器を見るにはどうしたらいい？"} />,
      answer: (
        <>
          <TextWithRuby
            text={
              "・/*計量展示室*/では、実際に「計量ミュージアム」に出てきた計量器がすべて展示されています。ほかにも/*昔の計量器がいろいろと展示*/されているので、ぜひ見に来てくださいね！\n\n・事前予約で展示品の解説も受け付けています。\n・公開時間9時00分～16時00分\n・年末年始（12月29日～1月3日）及び土日祝日休み\n\n・展示品の解説（要予約：\n東京都計量検定所管理指導課企画調整担当\n電話番号：03-5617-6643\n\n東京都計量検定所「計量展示室」"
            }
            anotherRuby={{ 出: "で" }}
          />
          <div
            className="husen "
            style={{ margin: "30px auto" }}
            onClick={() =>
              (window.location.href = "https://www.shouhiseikatu.metro.tokyo.lg.jp/keiryo/work/keiryotennjisitu.html")
            }
          >
            <TextWithRuby text={"詳細はこちら"} />
            <span></span>
          </div>
        </>
      )
    },
    {
      question: <TextWithRuby text={"「はかるん」ってな～に？"} />,
      answer: (
        <div>
          <TextWithRuby
            text={
              "・/*東京都計量検定所の公式マスコットキャラクター*/です。計量ミュージアムにはかるんからメッセージをもらっているので、紹介しますね♪"
            }
            anotherRuby={{ 話: "はなし" }}
          />
          <img src={hakarun} alt="はかるん" className="hakarunIntro" />
          <TextWithRuby
            text={
              "\n（はかるんより）\n・初めまして♪ はかるの大好きはかるんだよ！\n\nぼくはいつもポシェットにメジャーやおもりとか持ち歩いてて、はかりたいものがあったらなんでもはかっちゃうんだ！\nそんなぼくのことを聞いた東京都計量検定所から話があって、マスコットキャラクターをつとめています！\n\n・計量についてメモした知識をインスタグラムにも投稿しているので、ぜひみなさんも見て「いいね！」してくださいね！\n東京都生活文化スポーツ局インスタグラム\n"
            }
            anotherRuby={{ 話: "はなし" }}
          />
          <div
            className="husen red"
            style={{ margin: "0 auto" }}
            onClick={() => (window.location.href = "https://www.instagram.com/tokyoartsandculture/")}
          >
            <TextWithRuby text={"詳細"} />
            <span></span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div style={styles.container} className="FAQContainer">
      {/* 左側: 質問リスト */}
      <div style={styles.questionList} className="FAQBox">
        {faqs.map((faq, index) => (
          <div
            key={index}
            style={{
              ...styles.questionItem,
              backgroundColor: activeIndex === index ? "#f0f0f0" : "transparent"
            }}
            onClick={() => setActiveIndex(index)}
            className="questionItem"
          >
            {faq.question}
          </div>
        ))}
      </div>
      {/* 右側: 回答表示 */}
      <div style={styles.answerPane} className="answerPane">
        {activeIndex !== null ? (
          <div style={styles.answer}>{faqs[activeIndex].answer}</div>
        ) : (
          <div style={styles.placeholder}>
            <TextWithRuby text={"質問をクリックすると回答が表示されます。"} />
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "800px",
    margin: "0 auto",
    borderRadius: "5px",
    overflow: "hidden",
    gap: "0px 5px"
  },
  questionList: {
    flexShrink: "0",
    flexGrow: "0",
    overflowY: "auto"
  },
  questionItem: {
    padding: "0.5em",
    cursor: "pointer",
    borderBottom: "5px solid #93f020",
    transition: "background-color 0.3s ease",
    PointerEvent: "all"
  },
  answerPane: {
    flex: "2",
    padding: "1em",
    boxShadow: "4px 8px 8px -4px #88888850",
    backgroundColor: "#eaffd0"
  },
  answer: {
    lineHeight: "1.5em",
    color: "#333"
  },
  placeholder: {
    color: "#888"
  }
};
