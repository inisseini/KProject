import React, { useEffect, useState, useRef } from "react";
import { FeedBack } from "./FeedBack";
import KeiryouHakase from "../../../../assets/images/keiryou-hakase-goal.png";

import KeiryouHakaseClear from "../../../../assets/images/keiryou-hakase-clear.png";
import Quiz1Question from "../../../../assets/images/quiz1-question.png";
import Quiz1Explanation1 from "../../../../assets/images/quiz1-explanation1.png";
import Quiz1Explanation2 from "../../../../assets/images/quiz1-explanation2.png";
import Quiz2Question from "../../../../assets/images/quiz2-question.png";
import Quiz3Question from "../../../../assets/images/quiz3-question.png";
import Quiz4Explanation1 from "../../../../assets/images/quiz4-explanation1.png";
import Quiz10Question from "../../../../assets/images/quiz10-question.png";
import { TextWithRuby } from "./TextWithRuby";
import ninnteijou from "../../../../assets/images/認定状.pdf";

const allQuestions = [
  {
    id: 1,
    question:
      "江戸時代に貨幣の両替に使われたこの分銅は、1万分の１の地図記号である機関を示しています。次のうちどれでしょうか。",
    questionImg: Quiz1Question,
    answer: "銀行",
    options: ["郵便局", "銀行", "裁判所"],
    hint: "江戸時代の両替屋はどんなことをしていたのかな？",
    explanation:
      "＜銀行の地図記号＞\n　両替天びんに使用したまゆ型の分銅の形は両替屋の看板になり、今も縮尺1万分の1の地形図で銀行の地図記号として使われています。\n※昭和30年、2万5千分の１の地図では使われなくなりました。",
    explanationImg1: Quiz1Explanation1,
    explanationImg2: Quiz1Explanation2,
    detailedExplanation:
      "＜江戸時代の貨幣制度＞\n　江戸時代、幕府は各地で流通していた様々な貨幣の実態をふまえて、金貨・銀貨・銅貨からなる貨幣制度（三貨制度）を定めました。\n　金貨と銅貨は１枚の価値が定められたのに対し、銀貨は重さにより価値が定まり、使うつど重さをはかりました。\n\n＜両替屋＞\n　三貨制度のもと、異なる種類の貨幣を両替する必要が生じ、さらに様々な取引が広く行われるようになると、両替を専門に行う両替屋が必要になりました。今でいう金融機関です。\n　両替屋には天びんと分銅が必要不可欠でした。分銅は幕府から指定された家が製作、販売、取締りを任されました。\n　この家が製造した分銅はまゆ型で表面に印（今でいう検定証印）が押されており、印のない分銅を使うことは禁止され、さらにたびたび取締りも行われました。　\n\n＜両替天びん＞\n　天びんのつり合いは、さおの中央に取り付けられた花形の環の中にある上下の三角板のとがった先を合わせることで確かめられました。"
  },
  {
    id: 2,
    question:
      "この計量器はあるものを巻き取って長さをはかる計量器です。あるものとは何でしょうか。次の中から選んでください。",
    questionImg: Quiz2Question,
    answer: "生糸",
    options: ["海苔", "生糸", "うどん"],
    hint: "長さで値段が決まるものはどれだろう？",
    explanation:
      "＜生糸の「繊度」＞\n　生糸の取引には、生糸検査所で、繊度検査などの検査をすることが必要です。繊度は繊維や糸の太さを表す尺度で、「デニール」という単位を使って表します。\n　※9000ｍの長さの糸が1ｇであるものが1デニール\n\n＜検尺器＞\n　製糸工場で生糸の繊度の検査に用いられました。\n　この検尺器は正六角形の巻わくの周囲の長さが1.125ｍで、400回巻き取りをカウントすると450ｍの糸を巻き取り、自動的に回転が止まって繊度検査のための糸がとれる仕組みとなっています。",
    detailedExplanation:
      "＜生糸の検査＞\n　明治から昭和戦前期にかけて、各地の製糸工場で作られた生糸は、横浜や神戸などにあった生糸検査所で繊度検査などが行われ、生糸に格付けをした上で輸出されました。\n　また、各製糸工場でも自主検査として出荷の段階で行われました。\n　繊度検査は、糸の長さと重さから「デニール」を計算し、平均的な繊度と、測定により求めた繊度との差を出して、品質にばらつきがどのくらいあるかを計算します。\n　蚕糸業の衰退とともに、生糸検査所がなくなり、製糸工場も少なくなっているため、検尺器や検位衡を今も使用している製糸工場は少ないのが現状といわれています。"
  },
  {
    id: 3,
    question:
      "この計量器について話している次の文章の　□　に入る言葉のうち、正しいものを１つ選んでください。\n　「生糸の取引には、生糸検査所で、繊度検査などの検査をすることが必要です。\n繊度は繊維や糸の太さを表す尺度で　□　という単位を使って表します。」",
    questionImg: Quiz3Question,
    answer: "デニール",
    options: ["メートル", "グラム", "デニール"],
    hint: "とても細かい単位だね。軽い衣服、たとえばタイツの厚さの表現によく使われてるね！",
    explanation:
      "＜生糸の「繊度」＞\n　生糸の取引には、生糸検査所で、繊度検査などの検査をすることが必要です。繊度は繊維や糸の太さを表す尺度で、「デニール」という単位を使って表します。\n　※9000ｍの長さの糸が1ｇであるものが1デニール\n\n＜検位衡＞\n　検位衡は、権尺器で決められた回数巻き取られた生糸をつるし、天びんの原理を利用して重さをはかるものです。\n　はかった重さに応じてデニールを目盛りりで読み取ることができる仕組みとなっています。",
    detailedExplanation:
      "＜生糸の検査＞\n　明治から昭和戦前期にかけて、各地の製糸工場で作られた生糸は、横浜や神戸などにあった生糸検査所で繊度検査が行われ、生糸に格付けをした上で輸出されました。\n　また、各製糸工場でも自主検査として出荷の段階で行われました。\n　繊度検査は、糸の長さと重さから「デニール」を計算し、平均的な繊度と、測定により求めた繊度との差を出して、品質にばらつきがどのくらいあるかを計算します。\n　蚕糸業の衰退とともに、生糸検査所がなくなり、製糸工場も少なくなっているため、検尺器や検位衡を今も使用している製糸工場は少ないのが現状といわれています。"
  },
  {
    id: 4,
    question:
      "棒はかりについて話している次の文章のa,b,cに入る言葉のうち、正しい組み合わせのものを１つ選んでください。\n　「棒はかりは　a　の原理を利用して重さをはかる道具です。　目盛りりがつけられた１本の棒と、　b　のおもりを用意することで、　c　重さのものをはかることができます。」",
    answer: "a.てこ　b.１つ  c.いろいろな",
    options: ["a.シーソー  b.たくさん　c.いろいろな", " a.てこ　b.１つ　c.同じ", "a.てこ　b.１つ  c.いろいろな"],
    hint: "棒はかりは１本の棒と１つのおもりではかる道具だったことを思い出してみよう！",
    explanation:
      "＜てこの原理＞\n　棒はかりは「てこ」の原理で重さをはかる計量器です。「てこ」は、小さな力で重いものを動かす仕組みです。\n　長い棒を使ってものを動かすとき、棒を支えている「支点」から、力を加える「力点」までの距離が長いほど、また、「支点」から、力を動かすものにはたらく「作用点」までの距離が短いほど、小さな力で重いものを動かすことができます。\n\n＜棒はかり＞\n　棒はかりは、持ち手を支点として、はかるものの重さがおもりとつりあってバランスがとれて水平になるよう、おもりを左右に動かし、つりあったところの目盛りりを読んで重さをはかります。\n　天びんは、あるものの重さをはかるために同じ重さ分のおもりを用意する必要がありますが、棒はかりは1本の棒と1つのおもりだけでいろいろな重さのものをはかることできるのです。",
    explanationImg1: Quiz4Explanation1,
    detailedExplanation:
      "＜江戸時代のはかりの検査＞\n　江戸幕府は、地方ごとに異なっていた重さの基準を統一し、棒はかりの製作、修理、販売、取締りの特権を二家の「はかり座」に与えました。\n　はかりの検査は、江戸・京都では定期的に行われましたが、そのほかの地方では一つの場所が終わったら次の場所に移る、といった方法で、国中を一巡するというものでした。\n　検査の周期は７、８年から20年に１回程度だったといわれています。"
  },
  {
    id: 5,
    question: "浮ひょうがはかることができるものは、何でしょうか？",
    answer: "液体の密度",
    options: ["液体の重さ", "液体の密度", "液体の温度"],
    hint: "浮ひょうは、液体に浮かべて使う計量器だよ",
    explanation: "液体に浮かべて、その浮き方で液体の密度または比重などをはかる計量器です。",
    detailedExplanation:
      "浮ひょうの仕組みを理解するためには、「浮力」がキーワードになります。\n　浮力とは、水の中にある物体が受ける力のことです。水中の浮力は、その物体が押しのけている水の重さと同じ大きさで上向きの力になります。\n　具体的には、\n・物体が軽い場合；物体の重さが浮力よりも軽いと、物体は水に浮かびます。\n・物体が重い場合；物体の重さが浮力よりも重いと、物体は水に沈みます。"
  },
  {
    id: 6,
    question: "現在使われているタクシーメーターは、どうやって料金を算出しているでしょうか？",
    answer: "距離と時間",
    options: ["距離だけ", "時間だけ", "距離と時間"],
    hint: "タクシーに乗ったら道が混んでいて、メーターがあがってしまったことはないかな？",
    explanation:
      "　タクシーメーターは、距離と時間に基づいて、料金を算出しています。\n　そのため、同じ距離で使用しても料金が変わる可能性があります。"
  },
  {
    id: 7,
    question: "宝石に使用する分銅は、昔は何だったでしょうか？",
    answer: "食べ物",
    options: ["食べ物", "石", "木"],
    hint: "宝石の重さをはかるにはどれくらいの重さのものがいいんだろう？",
    explanation:
      "　宝石に使用する分銅は、昔はイナゴ豆と言う食べ物でした。\n　宝石の重さの単位は「カラット」で1カラットは、0.2gです。"
  },
  {
    id: 8,
    question: "ガスメーターに用いる単位は何でしょうか？",
    answer: "㎥",
    options: ["kg", "V", "㎥"],
    hint: "ガスメーターはガスの体積をはかる計量器だね",
    explanation: "　ガスメーターは、体積をはかることができます。おうちのガスメーターを見てみましょう。"
  },
  {
    id: 9,
    question: "セミの鳴き声は、騒音計ではかると何dBに相当するでしょうか？",
    answer: "70～80dB",
    options: ["10～20dB", "70～80dB", "90～100dB"],
    hint: "音の目安は、図書館や美術館の館内では40～50dBだよ",
    explanation:
      "　電車の音やセミの鳴き声が70～80dBに相当します。工事現場などで発生する音を測定するのに使われます。\n（出典 「全国環境研協議会 騒音小委員会）"
  },
  {
    id: 10,
    question: "この計量器は、何をはかるものでしょうか？",
    questionImg: Quiz10Question,
    answer: "振動",
    options: ["温度", "騒音", "振動"],
    hint: "工事を行っている場所のゆれをはかったりする計量器だよ",
    explanation:
      "　振動ピックアップにより振動をはかる計量器です。\n　工事現場などで、工事のトラックやドリルの振動がまわりにどのくらいの振動（ゆれ)を起こしているのかをはかるのに使います。"
  }
];

const feedbackQuestions = [
  "クイズの難易度について教えてください。",
  "クイズの内容は興味深かったですか？",
  "全体的な満足度を教えてください。"
];

export function Quiz(props) {
  const [questions] = useState(() => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 5); // ランダムに5問選択
  });

  const [selectedOptions, setSelectedOptions] = useState({});
  const [feedbacks, setFeedbacks] = useState({});
  const [activeTab, setActiveTab] = useState({});
  const [detailedExplanationsVisible, setDetailedExplanationsVisible] = useState({});
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [feedback, setFeedback] = useState(Array(feedbackQuestions.length).fill(0));
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState({});

  const handleOptionChange = (questionId, option) => {
    setSelectedOptions(prev => ({
      ...prev,
      [questionId]: option
    }));
  };

  const handleSubmitAnswer = questionId => {
    const question = questions.find(q => q.id === questionId);
    const isCorrect = selectedOptions[questionId] === question.answer;

    setFeedbacks(prev => ({
      ...prev,
      [questionId]: isCorrect ? "正解です！" : `不正解です！正解は ${question.answer} です。`
    }));

    setActiveTab(prev => ({
      ...prev,
      [questionId]: "feedback"
    }));

    setScore(prev => prev + (isCorrect ? 1 : 0));

    // 回答済みとして記録
    setAnsweredQuestions(prev => ({
      ...prev,
      [questionId]: true
    }));

    // すべての問題に回答ボタンが押されているか確認
    const allAnswered = Object.keys(answeredQuestions).length + 1 === questions.length;
    if (allAnswered) {
      setQuizFinished(true);
      scrollToBottom();
    }
  };

  const handleShowResult = () => {
    setShowResult(true);
    scrollToTop();
  };

  const handleTabChange = (questionId, tab) => {
    if (tab === "feedback" && !feedbacks[questionId]) {
      handleSubmitAnswer(questionId);
    }
    setActiveTab(prev => ({
      ...prev,
      [questionId]: tab
    }));
  };

  const showDetailedExplanation = questionId => {
    setDetailedExplanationsVisible(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const handleStarClick = (index, starIndex) => {
    if (!feedbackSubmitted) {
      const updatedFeedback = [...feedback];
      updatedFeedback[index] = starIndex + 1;
      setFeedback(updatedFeedback);
    }
  };

  const handleSubmitFeedback = () => {
    if (feedback.includes(0)) {
      alert("未回答の項目があります");
      return;
    }
    console.log("満足度アンケート結果:", feedback);
    setFeedbackSubmitted(true);
  };

  const restartQuiz = () => {
    window.location.reload();
  };

  useEffect(() => {
    if (score >= 4) {
      localStorage.setItem("quizPassed", true);
      props.setIsPassed(true);
    }
  }, [quizFinished]);

  const scrollRef = useRef(null);

  // 一番上にスクロール
  const scrollToTop = () => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  // 一番下にスクロール
  const scrollToBottom = () => {
    if (scrollRef.current) {
      setTimeout(() => {
        scrollRef.current.scrollTo({
          top: scrollRef.current.scrollHeight + 1000,
          behavior: "smooth"
        });
      }, 500);
    }
  };

  return (
    <div id="Quiz">
      {quizFinished && showResult ? (
        <div className="QuizContainer result" ref={scrollRef}>
          <h1>
            <TextWithRuby text={"【　結果発表　】"} />
          </h1>
          <p>
            スコア: {score} / {questions.length}
          </p>
          {score >= 4 ? (
            <>
              <p className="success">
                <TextWithRuby text={"合格です！「計量はかせ」に認定します！"} />
              </p>
              <img src={KeiryouHakaseClear} alt="計量はかせマーク" />
              <div className="husen animatedItem horizon" style={{ margin: "1.8em auto" }}>
                <a href={ninnteijou} download>
                  <TextWithRuby text={"認定状をダウンロードする"} />
                  <span></span>
                </a>
              </div>
            </>
          ) : (
            <>
              <p className="failure">
                <TextWithRuby text={"挑戦してくれてありがとう！「計量はかせ」目指して、また挑戦してね！"} />
              </p>
              <img src={KeiryouHakase} alt="計量はかせマーク" />
            </>
          )}
          <button className="retry-btn" onClick={restartQuiz}>
            <TextWithRuby text={"クイズに再挑戦する"} />
          </button>
          {!JSON.parse(localStorage.getItem("getFeedback")) && <FeedBack />}
        </div>
      ) : (
        <div className="QuizContainer" ref={scrollRef}>
          {questions.map((question, questionIndex) => (
            <>
              <div key={question.id} className="question-container sticker-box green text">
                <TextWithRuby text={`第${questionIndex + 1}問：${question.question}`} />
                <br />
                {question.questionImg && <img src={question.questionImg} alt="画像" />}
                <ul className="options-list">
                  {question.options.map((option, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="radio"
                          name={`question-${question.id}`}
                          value={option}
                          checked={selectedOptions[question.id] === option}
                          onChange={() => handleOptionChange(question.id, option)}
                          disabled={feedbacks[question.id]}
                        />
                        <TextWithRuby text={`${option}`} />
                      </label>
                    </li>
                  ))}
                </ul>

                <div className="tab-container">
                  <button
                    className={`tab-btn ${activeTab[question.id] === "feedback" ? "active" : ""}`}
                    onClick={() => handleTabChange(question.id, "feedback")}
                    disabled={!selectedOptions[question.id]}
                  >
                    {feedbacks[question.id] ? <TextWithRuby text={`解説`} /> : <TextWithRuby text={`回答`} />}
                  </button>
                  <button
                    className={`tab-btn hint-btn ${activeTab[question.id] === "hint" ? "active" : ""} ${
                      selectedOptions[question.id] ? "" : "inactive"
                    }`}
                    onClick={() => handleTabChange(question.id, "hint")}
                  >
                    <TextWithRuby text={`ヒントを見る`} anotherRuby={{ 見: "み" }} />
                  </button>
                </div>

                <div className="tab-content">
                  {activeTab[question.id] === "feedback" && (
                    <div className="feedback-tab">
                      <p className="feedback" style={{ color: "#ff5e4c" }}>
                        <TextWithRuby
                          text={`
                        ${feedbacks[question.id]}`}
                        />
                      </p>
                      <br />
                      {feedbacks[question.id] && (
                        <>
                          <p className="explanation">
                            {question.explanationImg1 && <img src={question.explanationImg1} alt="画像" />}

                            <ruby style={{ color: "#28a745" }}>
                              解説<rt>かいせつ</rt> :
                            </ruby>
                            <TextWithRuby text={`${question.explanation}`} />
                          </p>
                          {question.detailedExplanation && !detailedExplanationsVisible[question.id] && (
                            <button className="detailed-btn" onClick={() => showDetailedExplanation(question.id)}>
                              <TextWithRuby text={`さらに詳しい説明を見る`} />
                            </button>
                          )}
                          {detailedExplanationsVisible[question.id] && (
                            <>
                              <br />
                              <p className="detailed-explanation">
                                <TextWithRuby text={`${question.detailedExplanation}`} />
                                {question.explanationImg2 && <img src={question.explanationImg2} alt="画像" />}
                              </p>
                            </>
                          )}
                        </>
                      )}
                    </div>
                  )}
                  {activeTab[question.id] === "hint" && (
                    <div className="hint-tab">
                      <p className="hint">
                        <TextWithRuby text={`${question.hint}`} />
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </>
          ))}

          {quizFinished && (
            <button className="result-btn" onClick={() => handleShowResult()}>
              結果を確認する
            </button>
          )}
        </div>
      )}
    </div>
  );
}
