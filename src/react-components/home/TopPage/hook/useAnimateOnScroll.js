import { useEffect } from "react";

export function useAnimateOnScroll(className, threshold = 0.1, delayStep = 0.2) {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);
    const observer = new IntersectionObserver(
      entries => {
        let visibleIndex = 0; // 表示されている要素のインデックスをリセット

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 画面内に入った要素に遅延を適用
            entry.target.style.animationDelay = `${visibleIndex * delayStep}s`;
            entry.target.classList.add("animate"); // アニメーションを適用
            observer.unobserve(entry.target); // 一度だけ適用

            // インデックスを更新
            visibleIndex++;
          }
        });
      },
      { threshold }
    );

    elements.forEach(element => observer.observe(element));

    return () => observer.disconnect(); // クリーンアップ
  }, [className, threshold, delayStep]);
}
