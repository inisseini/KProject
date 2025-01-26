import React, { useState } from "react";
import { TextWithRuby } from "./TextWithRuby";

export function Title({ selectedNum, setNum }) {
  const [isOpen, setIsOpen] = useState(false); // ドロップダウンの開閉状態

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

  const yearList = [
    "江戸",
    "明治～昭和戦前期",
    "明治～昭和戦前期",
    "江戸以降",
    "明治以降",
    "大正以降",
    "不明",
    "大正以降",
    "昭和以降",
    "昭和以降"
  ];

  const handleSelect = index => {
    setNum(index + 1); // 親コンポーネントの状態を更新
    setIsOpen(false); // ドロップダウンを閉じる
  };

  return (
    <div className="sticker-box green text" style={{ padding: "20px" }}>
      <div
        className="custom-dropdown"
        style={{
          position: "relative",
          width: "100%",
          marginBottom: "10px",
          cursor: "pointer"
        }}
      >
        <div className="selected-option husen red bottom center" onClick={() => setIsOpen(!isOpen)}>
          <TextWithRuby text={`${list[selectedNum - 1]}`} anotherRuby={{ 浮: "うき" }} textAlign="center" />
          <span></span>
        </div>
        {isOpen && (
          <ul
            className="dropdown-list"
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "#fff",
              border: "1px solid #ccc",
              borderRadius: "5px",
              zIndex: 1000,
              padding: 0,
              listStyle: "none",
              maxHeight: "200px",
              overflowY: "auto"
            }}
          >
            {list.map((item, index) => (
              <li
                key={index}
                onClick={() => handleSelect(index)}
                style={{
                  padding: "10px",
                  borderBottom: "1px solid #eee",
                  cursor: "pointer"
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <TextWithRuby text={item} anotherRuby={{ 浮: "うき" }} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <p
        style={{
          backgroundColor: "#fff",
          padding: "5px",
          cursor: "default"
        }}
      >
        <TextWithRuby text={`使用年代: ${yearList[selectedNum - 1]}`} textAlign="center" />
      </p>
    </div>
  );
}
