import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("Gray")
  const [moveclor, setMoveColor] = useState("red")
  const [moveclor2, setMoveColor2] = useState("blue")
  const [moveclor3, setMoveColor3] = useState("yellow")
  const [moveclor4, setMoveColor4] = useState("white")

  return (
    
      <div className="w-full h-screen flex items-center justify-center duration-200" style={{backgroundColor: color}}>
<div className="bg-blue-500 space-x-6 p-6 rounded-xl shadow-xl">
           <h1 className="text-2xl font-bold ml-5 p-4 rounded-2xl bg-gray-600 w-fit ml-14" >Background Changer</h1>
           <div className='flex items-center justify-center space-x-4 mt-4'>
           
           <div className='bg-blue-500 w-fit p-2 rounded-xl mt-4'>
            <button className='outline-none rounded-lg bg-red-400 shadow-2xl p-4 transition-all' style={{backgroundColor: moveclor}} onMouseEnter={()=>setMoveColor('yellow')} onMouseLeave={()=>setMoveColor('red')} onClick={()=>setColor('red')}>Red</button>
           </div>
          <div className='bg-blue-500 w-fit p-2 rounded-xl mt-4'>
            <button className='outline-none bg-blue-400 shadow-2xl rounded-xl p-4 transition-all'style={{backgroundColor: moveclor2}} onMouseEnter={()=>setMoveColor2('green')} onMouseLeave={()=>setMoveColor2('blue')} onClick={()=>setColor('blue')}>Blue</button>
           </div>
           <div className='bg-blue-500 w-fit p-2 rounded-xl mt-4'>
            <button className='bg-yellow-400 rounded-2xl outline-none shadow-2xl p-4 transition-all' style={{backgroundColor: moveclor3}} onMouseEnter={()=>setMoveColor3('gray')} onMouseLeave={()=>setMoveColor3('yellow')} onClick={()=>setColor('yellow')}>Yellow</button>
           </div>
           <div className='bg-blue-500 w-fit p-2 rounded-xl mt-4'>
           <button className='outline-none rounded-xl bg-red-400 shadow-2xl p-4 transition-all'style={{backgroundColor: moveclor4}} onMouseEnter={()=> setMoveColor4('gray')} onMouseLeave={()=>setMoveColor4('white')} onClick={()=>setColor('Gray')}>Revert</button>
          </div> 
          </div>
          </div>
          </div>
    
  )
}

export default App
