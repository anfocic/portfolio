import { useAnimations, useGLTF } from '@react-three/drei';
import { useEffect, useRef } from 'react';

// @ts-expect-error dfaa
import planeScene from '../assets/3d/plane.glb';
import React from 'react';

const Plane = (isRotating: any, { ...props }) => {

    const ref: React.Ref<any> = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const { actions } = useAnimations(animations, ref)

    useEffect(() => {
        if (isRotating) {
            actions['Take 001']?.play();
        } else {
            actions['Take 001']?.stop();
        }
    }, [actions, isRotating])

    return (
        <mesh {...props}
            ref={ref}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane