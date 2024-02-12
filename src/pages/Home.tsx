
import { Canvas } from "@react-three/fiber"
import { Suspense, useState } from "react"
import Loader from "../components/Loader"
import Island from "../models/Island"
import Sky from "../models/Sky"
import Bird from "../models/Bird"
import Plane from "../models/Plane"
import HomeInfo from "../components/HomeInfo"

export interface IslandProps {
  setIsRotating: any,
  setCurrentStage: any,
  isRotating: boolean,
  position: any,
  rotation: any,
  scale: any,
  currentFocusPoint: any,
}

const Home = () => {

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false)

  const adjustPlaneForScreenSize = () => {
    let screenScale: number[];
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0]
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4]
    }

    return [screenScale, screenPosition];
  }

  const adjustIslandForScreenSize = () => {
    let screenScale: number[];

    const rotation = [0.1, 4.7, 0]
    let screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1, 1, 1];
      screenPosition = [0, -6.5, -43.4];
    }

    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items center justify center">
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{ near: 0.1, far: 1000 }}>

        <Suspense fallback={<Loader />}>

          {/* simulira svijetlo s daljeg izvora (sunce) */}
          <directionalLight position={[1, 1, 1]} intensity={2} />

          {/* osvijetljava sve objekte na sceni jednako bez bacanja sjene */}
          <ambientLight intensity={0.5} />


          {/* osvijetljava scenu s gradijentom */}
          <hemisphereLight color="#b1e1ff" groundColor="#000000" intensity={1} />


          <Sky isRotating={isRotating} />
          <Bird />
          <Island
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            isRotating={isRotating}
            position={islandPosition}
            rotation={islandRotation}
            scale={islandScale}
            currentFocusPoint={[1, 1, 1]} />   
        </Suspense>
       
        <Plane
          isRotating={isRotating}
          planeScale={planePosition}
          planePosition={planeScale}
          rotation={[0, 20, 0]}
        />
      </Canvas>
    </section>
  )
}

export default Home