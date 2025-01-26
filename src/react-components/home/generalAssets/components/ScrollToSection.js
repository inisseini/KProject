import React from 'react';

const ScrollToSection = ({ offset = 0 }) => {
  // セクションの頭にスクロールする関数
  const scrollToSectionTop = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // スムーズなスクロール
      });
    }
  };

  // セクションを超える位置までスクロールする関数
  const scrollPastSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      const elementPosition = target.offsetTop + target.offsetHeight; // セクションの下端位置
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth', // スムーズなスクロール
      });
    }
  };

  return { scrollToSectionTop, scrollPastSection }; // 両方の関数を返す
};

export default ScrollToSection;
