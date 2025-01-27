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
  const raycasterRef = useRef(new THREE.Raycaster());
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
    if (!meshRef.current) return;

    // ラベルの作成
    const div = document.createElement("div");
    div.className = "label";
    div.style.color = "#000";
    div.style.padding = "5px";
    div.style.borderRadius = "5px";
    div.style.textAlign = "center";
    div.style.fontSize = "12px";

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
  }, [initialText, longText, confirmFunction, isPopConfirmVisible]);

  useEffect(() => {
    const checkOcclusion = () => {
      if (!meshRef.current || !raycasterRef.current || !camera) return;

      const raycaster = raycasterRef.current;
      const origin = camera.position;
      const direction = new THREE.Vector3().copy(meshRef.current.position).sub(camera.position).normalize();

      raycaster.set(origin, direction);
      const intersects = raycaster.intersectObjects(occludeObjects, true);

      // ラベルの表示・非表示を更新
      if (intersects.length > 0 && intersects[0].distance < camera.position.distanceTo(meshRef.current.position)) {
        setIsPopConfirmVisible(false);
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    const updateScale = () => {
      if (!meshRef.current) return;

      const distance = camera.position.distanceTo(meshRef.current.position);
      const scale = 1 / (distance / distanceFactor);
      meshRef.current.scale.set(scale, scale, scale);
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
    <mesh ref={meshRef} position={position} onPointerDown={() => setIsPopConfirmVisible(true)}>
      <sphereGeometry args={[0.4, 32, 32]} />
      <meshBasicMaterial color="#ffa096" />
    </mesh>
  );
}
