import { useBox } from "@react-three/cannon";

const debug = false;

export function ColliderBox({ position, scale }) {
  //장애물 물리엔진 충돌체 생성
  useBox(() => ({
    args: scale,
    position,
    type: "Static",
  }));

  return (
    debug && (
      <mesh position={position}>
        <boxGeometry args={scale} />
        <meshBasicMaterial transparent={true} opacity={0.25} />
      </mesh>
    )
  );
}
