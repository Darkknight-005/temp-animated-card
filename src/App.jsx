import { useState } from 'react';
import './App.css'

const dim3 = document.getElementById('dimensiond')
const dim4 = document.getElementById('dimension')

const move = (e) => {
  let x = ((window.innerHeight) / 2 - e.pageX) / 20, y = ((window.innerWidth) / 2 - e.pageY) / 20;
  dim3.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`
  dim3.style.transition = `all`
  dim4.style.transform = `translateZ(${200}px)`
  // console.log({ x, y })
}

// const z = () =>{
//   dim3.style.transition = `none`
//   dim4.style.transform = `translateZ(150px)`
// }

const reset = ()=>{
  dim3.style.transform = `rotateX(0deg) rotateY(0deg)`

}
function App() {
  const d = new Date()

  return (
    <div className="App flex-col" >
      <div className="container flex justify-center gap-4 min-h-1/2  text-black" onMouseMove={move}  onMouseLeave={reset}>
        <div className='h-full ease-linear transition-all duration-200 min-w-60 rounded-md shadow-lg  shadow-orange-400 space-y-5 p-5 bg-gradient-to-br to-black from-green-500' id='dimensiond'  >
          <div className='flex justify-center relative image' id="middle">

            <img src='./vite.svg' alt="" width={"100"} className='z-10 relative  dimension' id="dimension" />
            
          </div>
          <div className='flex flex-col items-center w-60 gap-3 h-1/2
          ' id='middle'>
            <h1 className='text-3xl text-green-200' id="dimension">3d div</h1>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at?</h3>
            <div className='min-w-full flex justify-evenly group-odd:bg-green-500 space-x-2' id='middle'>
              <button className='shadow-md shadow-black rounded-full py-1 px-5 bg-white' id='dimension'>20</button>
              <button className='shadow-md shadow-black rounded-full py-1 px-5 bg-white' id='dimension'>20</button>
              <button className='shadow-md shadow-black rounded-full py-1 px-5 bg-white' id='dimension'>20</button>
              <button className='shadow-md shadow-black rounded-full py-1 px-5 bg-white' id='dimension'>20</button>
            </div>
          </div>
          <div className='text-center bg-black mx-4 rounded-full text-white' id="dimension">
            <button>Copy link</button>
          </div>
        </div>
      </div>
      <footer className='fixed bottom-0 text-sm py-2 text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-black via-red-400'>
        some time react dev give error and say dim3 or the doc id is "null"
        {
          d.getFullYear()          
        }
      </footer>
    </div>
  )

}

export default App
