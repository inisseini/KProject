import React, { useEffect, useRef, useState } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { CSS2DRenderer, CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer";
import { Popconfirm } from "antd";
import ReactDOM from "react-dom/client";
import { TextWithRuby } from "./TextWithRuby";

export function ExpandableHtml({
  position = [0, 0, 0],
  sphereColor = "#ffa096",
  initialText = "クリック",
  longText = "説明文です。",
  confirmFunction,
  occludeObjects = [],
  distanceFactor = 10
}) {
  const meshRef = useRef();
  const labelRef = useRef();
  const { scene, gl, camera } = useThree();
  const [isVisible, setIsVisible] = useState(true);
  const [isPopConfirmVisible, setIsPopConfirmVisible] = useState(false);

  useEffect(() => {
    // CSS2DRendererの設定
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
    labelRenderer.domElement.style.position = "absolute";
    labelRenderer.domElement.style.top = "0";
    labelRenderer.domElement.style.pointerEvents = "none";
    gl.domElement.parentNode.appendChild(labelRenderer.domElement);

    const resizeHandler = () => {
      labelRenderer.setSize(gl.domElement.clientWidth, gl.domElement.clientHeight);
    };
    window.addEventListener("resize", resizeHandler);

    labelRef.current = labelRenderer;

    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (labelRenderer.domElement) {
        labelRenderer.domElement.remove();
      }
      if (labelRenderer.dispose) {
        labelRenderer.dispose();
      }
    };
  }, [gl]);

  useEffect(() => {
    if (!meshRef.current | !isVisible) return;

    // ラベルの作成
    const div = document.createElement("div");
    div.className = "label";
    div.style.color = "#000";
    div.style.padding = "5px";
    div.style.borderRadius = "5px";
    div.style.textAlign = "center";
    div.style.fontSize = "8px";

    // AntdのPopconfirmを組み込む
    const popConfirmWrapper = document.createElement("div");
    div.appendChild(popConfirmWrapper);

    const handleConfirm = () => {
      confirmFunction();
      setIsPopConfirmVisible(false);
    };

    const handleCancel = () => {
      setIsPopConfirmVisible(false);
    };

    const root = ReactDOM.createRoot(popConfirmWrapper);
    root.render(
      <Popconfirm
        title={longText}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        okText={<TextWithRuby text={"動かす"} />}
        cancelText={<TextWithRuby text={"閉じる"} />}
        open={isPopConfirmVisible}
      >
        <div style={{ cursor: "pointer" }} onClick={() => setIsPopConfirmVisible(true)}>
          {initialText}
        </div>
      </Popconfirm>
    );

    const labelObject = new CSS2DObject(div);
    labelObject.position.set(0, 0, 0); // 球の中心に配置
    meshRef.current.add(labelObject);

    return () => {
      if (meshRef.current) {
        meshRef.current.remove(labelObject);
      }
      root.unmount();
    };
  }, [initialText, longText, confirmFunction, isPopConfirmVisible, isVisible]);

  useEffect(() => {
    const checkOcclusion = () => {
      console.log("check");

      if (!meshRef.current || !camera) return;

      const raycaster = new THREE.Raycaster();
      const direction = new THREE.Vector3();
      // 点Aから点Bへの方向を計算
      direction.subVectors(meshRef.current.position, camera.position).normalize().negate();
      // Raycasterを設定
      raycaster.set(meshRef.current.position, direction);

      // 障害物との衝突判定
      const intersects = raycaster.intersectObjects(occludeObjects, true);

      // ラベルの表示・非表示を更新
      if (intersects?.length > 0) {
        setIsPopConfirmVisible(false);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const updateScale = () => {
      if (!meshRef.current) return;

      const distance = camera.position.distanceTo(meshRef.current.position);

      // スケーリングを一定の範囲に抑える
      const minScale = 0.2; // 最小スケール
      const maxScale = 5; // 最大スケール
      const scale = Math.min(Math.max(1 / (distance / distanceFactor), minScale), maxScale);

      meshRef.current.scale.set(1, 1, 1); // ラベルの文字サイズをスケールに基づいて更新
      const div = meshRef.current.children[0]?.element;
      if (div) {
        const fontSize = Math.round(scale * 8); // 基本サイズ12pxにスケールを乗算
        div.style.fontSize = `${fontSize}px`;
      }
    };

    const animate = () => {
      if (labelRef.current) {
        labelRef.current.render(scene, camera);
      }
      checkOcclusion();
      updateScale();
    };

    gl.setAnimationLoop(animate);

    return () => {
      gl.setAnimationLoop(null);
    };
  }, [camera, gl, occludeObjects, scene, distanceFactor]);

  return (
    <mesh visible={isVisible} ref={meshRef} position={position} onPointerDown={() => setIsPopConfirmVisible(true)}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshBasicMaterial color="#ffa096" />
    </mesh>
  );
}
