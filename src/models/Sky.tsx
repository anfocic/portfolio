import { useGLTF } from '@react-three/drei'
import { useRef } from 'react';

//@ts-expect-error jer se crveni

import skyScene from '../assets/3d/sky.glb'
import { useFrame } from '@react-three/fiber';
import React from 'react';

const Sky = ( isRotating: any ) => {
    const sky:any = useGLTF(skyScene)
    const skyRef: React.Ref<any> = useRef();

    useFrame((_, delta) => {
        if (isRotating) {
            skyRef.current.rotation.y += 0.15 * delta;
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky