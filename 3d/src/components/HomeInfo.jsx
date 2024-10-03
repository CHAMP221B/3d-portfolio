import React from 'react'
import { div } from 'three/webgpu'


const renderContent={
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center h-24 border-black border-2 p-2.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] bg-[#00E1EF] py-4 px-8 text-black mx-5'>
            Hi, I am <span className='font-semibold'>Himesh</span>👋
            <br />
            A Software Engineer based in Hyderabad.
        </h1>
    ),
    2: (
        <h1>2</h1>
    ),
    3: (
        <h1>3</h1>
    ),
    4: (
        <h1>4</h1>
    )
}

const InfoBox = ({text, link, btnText})=> {
    <div>
        {text}
    </div>
}

const HomeInfo = ({currentStage}) => {
  return (
    <p>{renderContent[currentStage]}</p>
  )
}

export default HomeInfo