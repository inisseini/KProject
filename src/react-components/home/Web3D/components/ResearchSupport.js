import React from "react";
import howToUse1 from "../../generalAssets/images/matome1.png";
import howToUse2 from "../../generalAssets/images/matome2.png";
import { TextWithRuby } from "./TextWithRuby";
import researchPDF from "../../generalAssets/images/research.pdf";

export function ResearchSupport() {
  return (
    <div className="research-support taped">
      <p className="intro-text">
        <TextWithRuby
          text={
            "「計量」をテーマにした自由研究をもっと簡単に、楽しく進めるためにまとめ用紙を用意したよ！\nこの用紙に書き込むことで自然と研究内容が見やすくなるんだ！\n\nぜひダウンロードして活用してみてね！"
          }
        />
      </p>

      <div className="steps">
        <h2 className="sub-title husen pointer-less" style={{ margin: "20px auto" }}>
          <TextWithRuby text={"資料の使い方"} />
        </h2>
        <p>
          <TextWithRuby text={"この資料には以下の内容が含まれています。"} />
        </p>
        <br />
        <ol>
          <li>
            <TextWithRuby text={"・研究のタイトル : 自由研究のタイトルだよ！"} />
          </li>
          <li>
            <TextWithRuby text={"・研究のきっかけ : どうして興味を持ったんだっけ？"} />
          </li>
          <li>
            <TextWithRuby text={"・予想 : 研究は予想が大事！外れても大丈夫！"} />
          </li>
          <li>
            <TextWithRuby
              text={"・研究の方法 : できるだけ細かく内容を分けて書いてみよう！"}
              anotherRuby={{ 分: "わ" }}
            />
          </li>
          <li>
            <TextWithRuby text={"・感想 : 研究は面白かったかな？自由な感想を書いてみよう！"} />
          </li>
          <li>
            <TextWithRuby text={"・参考にしたもの : URLや書籍など参考にしたものがあれば書こう！"} />
          </li>
        </ol>
      </div>

      <div className="example">
        <h2 className="sub-title husen pointer-less" style={{ margin: "20px auto" }}>
          <TextWithRuby text={"記入例"} />
        </h2>
        <p>
          <TextWithRuby
            text={"以下は、実際にこのPDFを使用して記入した例です。\n研究テーマや結果の書き方を参考にしてください。"}
          />
        </p>
        <div className="example-image">
          <img src={howToUse1} alt="自由研究の記入例" />
          <img src={howToUse2} alt="自由研究の記入例" />
        </div>
      </div>

      <div className="download">
        <h2 className="sub-title husen green pointer-less" style={{ margin: "20px auto" }}>
          <TextWithRuby text={"ダウンロード"} />
        </h2>
        <p>
          <TextWithRuby text={"下記のリンクからPDFファイルをダウンロードできます。"} />
        </p>
        <a href={researchPDF} download className="download-button">
          <TextWithRuby text={"資料をダウンロードする"} />
        </a>
      </div>
    </div>
  );
}
