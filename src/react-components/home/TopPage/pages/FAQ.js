import React, { useState } from "react";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: <TextWithRuby text={"動作環境及び対応するOSはなんですか？"} />,
      answer: (
        <TextWithRuby
          text={
            "・/*以下デバイスに対応しています。全て最新のバージョンを推奨しております。*/\n\n・VRデバイス（Meta Quest3,Meta Quest2,Pico4）\n・パソコン（Windows,Macintosh OS）\n・スマートフォン(iOS,Android)\n・タブレット(iPadOS,Android,Windows)\n\n・推奨スペックは明示しておりませんが、一般的なPC・スマホでご利用いただけます。ただし最新OSに対応していないデバイスやネットワーク環境・同時に起動しているソフトがある場合は表示できない可能性がございます。"
          }
          anotherRuby={{ 全: "すべ" }}
        />
      )
    },
    {
      question: <TextWithRuby text={"動作が重い、またはサービスを開くことが出来ません。"} />,
      answer: (
        <TextWithRuby
          text={
            "・動作が重い、または開けない場合は/*リロード（再読み込み）*/をしていただく事で解消する場合がございます。"
          }
          anotherRuby={{ 事: "こと" }}
        />
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
    flex: "1",
    overflowY: "auto"
  },
  questionItem: {
    padding: "1em",
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
