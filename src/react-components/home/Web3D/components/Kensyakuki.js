import React, { useEffect, useRef, Suspense } from "react";
import { useFrame, useLoader, enxtend } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import path from "../../../../assets/models/kensyakuki.glb";
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
        position={[1.9, -0.6, -0.8]}
        sphereColor="red"
        initialText="クリック"
        occludeObjects={[gltf.scene]} // occlusion チェックを無効化して表示確認
        longText={<TextWithRuby text={"とても軽い生糸の重さでも針が動くんだ！その様子を見てみよう！"} />}
        confirmFunction={() => playAnimation()}
      />
      <primitive scale={[4, 4, 4]} position={[0, -4, 0]} rotation={[0, 0, 0]} object={gltf.scene} ref={modelRef} />
    </>
  );
};

export function Kensyakuki() {
  return (
    <Suspense fallback={null}>
      <ModelGLB />
    </Suspense>
  );
}
