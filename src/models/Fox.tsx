/**
 * IMPORTANT: Loading glTF models into a Three.js scene is a lot of work.
 * Before we can configure or animate our model’s meshes, we need to iterate through
 * each part of our model’s meshes and save them separately.
 *
 * But luckily there is an app that turns gltf or glb files into jsx components
 * For this model, visit https://gltf.pmnd.rs/
 * And get the code. And then add the rest of the things.
 * YOU DON'T HAVE TO WRITE EVERYTHING FROM SCRATCH
 */

import React, {useEffect, useRef} from "react";
import {useAnimations, useGLTF} from "@react-three/drei";
//@ts-ignore
import scene from "../assets/3d/fox.glb";
import {AnimationAction} from "three";

// 3D Model from: https://sketchfab.com/3d-models/fox-f372c04de44640fbb6a4f9e4e5845c78
const Fox = (currentAnimation: any, {...props}) => {
    const group: React.Ref<any> = useRef();
    //@ts-ignore
    const {nodes, materials, animations} = useGLTF(scene);
    const {actions} = useAnimations(animations, group);

    // This effect will run whenever the currentAnimation prop changes
    useEffect(() => {
        handleAnimation()

    }, [actions, currentAnimation]);

    const handleAnimation = (): void => {
        Object.values(actions).forEach((action: AnimationAction) => {
            if (currentAnimation.currentAnimation === 'walk') {
                action.play()
            } else {
                action.stop()
            }
        });
    }
    return (
        <group ref={group} {...props} dispose={null}>
            <group name='Sketchfab_Scene'>
                <primitive object={nodes.GLTF_created_0_rootJoint}/>
                <skinnedMesh
                    name='Object_7'
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name='Object_8'
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name='Object_9'
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name='Object_10'
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name='Object_11'
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </group>
    );
}
export default Fox;