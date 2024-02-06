import { useGLTF } from '@react-three/drei';
// @ts-expect-error dfaa
import birdScene from '../assets/3d/bird.glb';
import { useRef } from 'react';

const Bird = () => {

    const ref: React.Ref<any> = useRef();

    const animations  = useGLTF(birdScene)

    const scene: any = useGLTF(birdScene)

    return (
        <mesh position={[-5, 2, 1]}
            ref={ref}
            scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>

    )
}

export default Bird
