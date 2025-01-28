import React, { useEffect, useRef, Suspense } from "react";
import { useFrame, useLoader, enxtend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import path from "../../../../assets/models/Ukihyou_Animation.glb";
import { ExpandableHtml } from "./ExpandableHtml";
import { TextWithRuby } from "./TextWithRuby";

const ModelGLB = () => {
  const modelRef = useRef();
  const mixerRef = useRef();
  const actionsRef = useRef();

  const gltf = useLoader(GLTFLoader, path);

  useEffect(() => {
    if (!gltf.animations.length) return;

    const mixer = new THREE.AnimationMixer(gltf.scene);
    mixerRef.current = mixer;

    const action = mixer.clipAction(gltf.animations[0]);
    action.loop = THREE.LoopOnce;
    action.clampWhenFinished = true;
    actionsRef.current = action;
  }, [gltf]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "p" || event.key === "P") {
        if (actionsRef.current) {
          actionsRef.current.reset();
          actionsRef.current.play();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const playAnimation = () => {
    if (actionsRef.current) {
      actionsRef.current.reset();
      actionsRef.current.play();
    }
  };

  useFrame((_, delta) => {
    if (mixerRef.current) mixerRef.current.update(delta);
  });

  return (
    <>
      <ExpandableHtml
        position={[1.9, 0.4, 0]}
        sphereColor="red"
        initialText="クリック"
        occlude={[]} // occlusion チェックを無効化して表示確認
        longText={
          <TextWithRuby
            text={"左の色付きのガソリンと右の透明な水では密度や比重が違うんだ！浮ひょうの沈み方から推測してみよう！"}
            anotherRuby={{ 浮: "ふ" }}
          />
        }
        confirmFunction={() => playAnimation()}
      />
      <primitive scale={[6, 6, 6]} position={[1, -2, 0]} rotation={[0, 1.6, 0]} object={gltf.scene} ref={modelRef} />
    </>
  );
};

export function Ukihyou() {
  return (
    <Suspense fallback={null}>
      <ModelGLB />
    </Suspense>
  );
}
