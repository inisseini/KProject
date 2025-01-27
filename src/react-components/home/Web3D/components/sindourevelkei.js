import React, { useEffect, useRef, Suspense } from "react";
import { useFrame, useLoader, enxtend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import path from "../../../../assets/models/sindourevelkei.glb";
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
        position={[-1.5, 0.4, 0.4]}
        sphereColor="red"
        initialText="クリック"
        occlude={[]} // occlusion チェックを無効化して表示確認
        longText={<TextWithRuby text={"ゆれた大きさに合わせて針が動くよ！"} />}
        confirmFunction={() => playAnimation()}
      />
      <primitive scale={[10, 10, 10]} position={[0, 0, 0]} rotation={[1.58, 0, 0]} object={gltf.scene} ref={modelRef} />
    </>
  );
};

export function Sindourevelkei() {
  return (
    <Suspense fallback={null}>
      <ModelGLB />
    </Suspense>
  );
}
