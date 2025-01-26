import { ExpandableContent } from "./ExpandableContent";
import { TextWithRuby } from "./TextWithRuby";

export function Detail(props) {
  const selectedNum = props.selectedNum;
  return (
    <>
      {selectedNum === 1 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={`　江戸時代に主に金銀をはかることに使われた計量器です。\n\n　この時代は、金貨・銀貨・銅貨が階級や地方により様々に流通しました。このうち、銀貨は金額が書かれず重さで価値が決まったので、貨幣の交換を行う両替屋には天びんと分銅が必要でした。 \n\n　分銅の形は両替屋の看板になり、今も縮尺1万分の1の地図で銀行の地図記号として使われています。`}
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 2 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　明治から昭和戦前期にかけて、製糸工場で作られた生糸を輸出するにあたり、繊度（計量が難しい糸の太さを、糸の長さや重さを使って表す尺度。単位は「デニール」）を検査するために使われた計量器です。\n\n　生糸はこの検尺器で一定の長さを巻き取り、その重さを検位衡という計量器ではかることで、繊度を求めました。"
              }
              anotherRuby={{
                生: "き",
                糸: "いと",
                製糸: "せいし",
                表: "あらわ",
                巻: "ま",
                取: "と"
              }}
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 3 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　明治から昭和戦前期にかけて、製糸工場で作られた生糸を輸出するにあたり、繊度（計量が難しい糸の太さを、糸の長さや重さを使って表す尺度。単位は「デニール」）を検査するために使われた計量器です。\n\n　生糸は検尺器という計量器で一定の長さを巻き取り、その重さを、この検位衡ではかることで、繊度を求めました。"
              }
              anotherRuby={{
                生: "き",
                糸: "いと",
                製糸: "せいし",
                表: "あらわ",
                巻: "ま",
                取: "と"
              }}
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 4 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　てこの原理を利用して重さをはかる道具です。\n　目盛りがつけられた１本の棒と、１つのおもりでいろいろな重さのものをはかることができます。\n\n　ローマ時代、交易がさかんになり発明されたといわれます。日本では江戸以降、取引の際の貨幣のやり取り、商品の品物の計量などで庶民の生活にかかわり広く使われました。\n\n　今も寝具店で綿の計量などに使われています。"
              }
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 5 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　液体に浮かべて、その浮き方で液体の密度または比重などをはかる計量器です。\n\n　主に浮力を生じさせる太い部分(胴部)と目盛りのある細い部分(けい部)と重りで構成されています。"
              }
              anotherRuby={{ 方: "かた", 生: "しょう", 細: "ほそ" }}
            />
          </div>
        </div>
      )}
      {selectedNum === 6 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　タクシーに取り付けられ、料金を出すために使用します。\n\n　当時は、メーターのレバーを倒すことにより、メーターをスタートしていました。\n\n　現在使われているタクシーメーターは、距離と時間に基づいて、料金を算出しています。"
              }
              anotherRuby={{ 取: "と", 出: "だ", 当時: "とうじ" }}
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 7 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　宝石の重さをはかるのに使っていました。\n\n　箱に収納することで、持ち運びを行い、どこでもはかることができます。\n\n　分銅の単位は、カラットという宝石だけに使用できる単位となっています。"
              }
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 8 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　ガスの体積をはかることができます。\n\n　湿式というのは、中に液体が入っていることを意味しています。\n\n　正確にはかることができるため、ガスメーターの検査に用いられています。"
              }
            />
          </div>
        </div>
      )}
      {selectedNum === 9 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　基準となるひとつの方向からの音をはかる計量器です。\n\n　一般に、騒音計は、マイクロホン、前置増幅器（プリアンプ）、信号処理器及び表示装置を組み合わせたものでできています。音圧レベルの単位は、かつてはホンでしたが現在はデシベル（dB）になっています。\n\n　電車の音やセミの鳴き声が70～80dBに相当します。\n　（出典 「全国環境研協議会 騒音小委員会）"
              }
              anotherRuby={{ 声: "ごえ" }}
            />
            <ExpandableContent selectedNum={selectedNum} />
          </div>
        </div>
      )}
      {selectedNum === 10 && (
        <div className="Web3Ddescription taped">
          <div style={{ overflowY: "auto", height: "35dvh" }}>
            <TextWithRuby
              text={
                "　振動ピックアップ（ゆれをはかるそうち）により振動（ゆれ）をはかる計量器です。\n\n　環境振動の単位は、人体の振動感覚特性を反映した振動レベル（デシベル：dB）になります。\n\n　100dBで震度5ぐらい、45dBで震度0ぐらいのゆれになります。"
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
