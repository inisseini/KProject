import React, { useEffect, useRef } from "react";
import Stats from "three/examples/jsm/libs/stats.module.js";

export function StatsComponent({ position = "right", topOffset = 0 }) {
  // DOM要素を追加するための参照
  const statsRef = useRef();

  useEffect(() => {
    // Statsインスタンスを3つ作成
    const statsFPS = new Stats();
    const statsMS = new Stats();
    const statsMB = new Stats();

    statsFPS.showPanel(0); // FPS
    statsMS.showPanel(1); // ms
    statsMB.showPanel(2); // mb

    // DOM要素に追加
    statsRef.current.appendChild(statsFPS.dom);
    statsRef.current.appendChild(statsMS.dom);
    statsRef.current.appendChild(statsMB.dom);

    // パネルの位置を調整
    statsFPS.dom.style.cssText = `position:absolute;top:${topOffset}px;${position}:20px;`;
    statsMS.dom.style.cssText = `position:absolute;top:${topOffset + 50}px;${position}:20px;`;
    statsMB.dom.style.cssText = `position:absolute;top:${topOffset + 100}px;${position}:20px;`;

    // アニメーションループ
    const animate = () => {
      statsFPS.begin();
      statsMS.begin();
      statsMB.begin();
      statsFPS.end();
      statsMS.end();
      statsMB.end();
      requestAnimationFrame(animate);
    };
    animate();

    // クリーンアップ処理
    return () => {
      statsRef.current.removeChild(statsFPS.dom);
      statsRef.current.removeChild(statsMS.dom);
      statsRef.current.removeChild(statsMB.dom);
    };
  }, [position, topOffset]);

  return (
    // Statsを追加するコンテナ
    <div ref={statsRef} style={{ position: "relative" }} />
  );
}
