import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import  Loader  from '../components/Loader'
import Island from '../models/Island'
import Bird from '../models/Bird'
import  Plane  from '../models/Plane'
import  {Sky}  from '../models/Sky'
import HomeInfo from '../components/HomeInfo'
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
Popup
</div> */}
const Home = () => {

  const [isRotating, setIsRotating] = useState(false);

  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -1, 0];
    } else {
      screenScale = [0.1, 0.1, 0.1];
      screenPosition = [0, -1, 0];
    }

    return [screenScale, screenPosition];
  };


  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, 0, 3];
    } else {
      screenScale = [0.3, 0.3, 0.3];
      screenPosition = [0, 0, 3];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing':'cursor-grab'}`} camera={{near:0.1, far:1000}}>
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={1}/>
          <ambientLight intensity={1}/>
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
          <Bird/>
          <Sky isRotating={isRotating} />
          <Plane scale={planeScale} position={planePosition} isRotating={isRotating} rotation={[0,20,0]}/>
          <Island position={islandPosition} scale={islandScale} rotation={[0.1, 4.7077, 0]}  isRotating={isRotating} setIsRotating={setIsRotating} setCurrentStage={setCurrentStage}/>
          
          
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home