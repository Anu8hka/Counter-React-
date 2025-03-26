import React from 'react'
import {useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

const App=()=>{
  const [count, setCount] = useState(0)
  return( 
  <div className="min-h-screen min-w-screen bg-amber-100">
    <div className='flex flex-col justify-center items-center h-screen'>
     <h1 className='text-4xl font-semibold bg-amber-400 py-2 px-4 rounded-2xl'>COUNTER</h1>
     <h2 className='my-6 text-6xl font-semibold'>{count}</h2>
     <div>
     <button className='font-semibold text-4xl text-amber-50 bg-amber-800 w-20 h-20 rounded-full m-4 mt-10 ' onClick={()=>setCount(count-1)}>-</button>
     <button className='font-semibold text-4xl text-amber-50 bg-amber-800 w-20 h-20 rounded-full m-4 mt-10 ' onClick={()=>setCount(0)}>0</button>
     <button className='font-semibold text-4xl text-amber-50 bg-amber-800 w-20 h-20 rounded-full m-4 mt-10 ' onClick={()=>setCount(count+1)}>+</button>
     </div>
    </div>
 </div>
 )
}
export default App

