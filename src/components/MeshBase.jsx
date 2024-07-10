import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import colors from "./colors2.json";
import temps from "./temps.json";
import {
  normalizeValue,
  mapNormalizedToRGB,
  normalizeArray,
} from "../utils/utils";

export function MeshBase(props) {
  const { nodes, materials } = useGLTF("/mesh_L5.gltf");

  const planeRef = useRef();

  //temps
  const rgbValues = [
    [100, 100, 250],
    [111, 140, 252],
    [123, 184, 251],
    [130, 235, 255],
    [117, 247, 88],
    [182, 251, 96],
    [215, 191, 124],
  ];
  const tempsArr = normalizeArray(temps.aprilDay);
  const mappedColors = mapNormalizedToRGB(tempsArr, rgbValues);
  console.log(mappedColors);
  const duplicatedArraysNew = [];
  mappedColors.forEach((arr) => {
    duplicatedArraysNew.push(arr, arr);
  });
  console.log(duplicatedArraysNew);

  //prep colors from lb gh
  const colorsMapped = colors.c.map((str) => str.split(",").map(Number));
  const duplicatedArrays = [];
  colorsMapped.forEach((arr) => {
    duplicatedArrays.push(arr, arr);
  });

  // useEffect(() => {
  //   planeRef.current.geometry = planeRef.current.geometry.toNonIndexed();
  //   let colors = [];
  //   const faces = planeRef.current.geometry.getAttribute("position").count / 3;
  //   console.log(faces);
  //   for (const i = 0; i < faces; i++) {
  //     const r = Math.random(),
  //       g = Math.random(),
  //       b = Math.random();
  //     colors.push(r, g, b);
  //     colors.push(r, g, b);
  //     colors.push(r, g, b);
  //   }
  //   planeRef.current.geometry.setAttribute(
  //     "color",
  //     new THREE.Float32BufferAttribute(colors, 3)
  //   );
  // }, []);

  // useEffect(() => {
  //   planeRef.current.geometry = planeRef.current.geometry.toNonIndexed();
  //   let colors = [];
  //   const faces = planeRef.current.geometry.getAttribute("position").count / 3;
  //   console.log(faces);
  //   for (let i = 0; i < faces; i += 2) {
  //     const r = Math.random(),
  //       g = Math.random(),
  //       b = Math.random();
  //     colors.push(r, g, b);
  //     colors.push(r, g, b);
  //     colors.push(r, g, b);
  //     if (i + 1 < faces) {
  //       colors.push(r, g, b);
  //       colors.push(r, g, b);
  //       colors.push(r, g, b);
  //     }
  //   }
  //   planeRef.current.geometry.setAttribute(
  //     "color",
  //     new THREE.Float32BufferAttribute(colors, 3)
  //   );
  // }, []);

  useEffect(() => {
    planeRef.current.geometry = planeRef.current.geometry.toNonIndexed();
    let colors = [];
    const faces = planeRef.current.geometry.getAttribute("position").count / 3;
    for (let i = 0; i < faces; i += 2) {
      const r = normalizeValue(duplicatedArraysNew[i][0]),
        g = normalizeValue(duplicatedArraysNew[i][1]),
        b = normalizeValue(duplicatedArraysNew[i][2]);
      colors.push(r, g, b);
      colors.push(r, g, b);
      colors.push(r, g, b);
      if (i + 1 < faces) {
        colors.push(r, g, b);
        colors.push(r, g, b);
        colors.push(r, g, b);
      }
    }
    planeRef.current.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
  }, []);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        // material={nodes.mesh_0.material}
        ref={planeRef}
      >
        {/* <bufferGeometry attach="geometry" {...nodes.mesh_0.geometry}>
          <bufferAttribute attach="attributes-color" args={[colorArray, 3]} />
        </bufferGeometry> */}
        <meshLambertMaterial wireframe={false} side={2} vertexColors />
      </mesh>
    </group>
  );
}

useGLTF.preload("/mesh_L5.gltf");
