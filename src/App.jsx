import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// const message = 'Coming Soon...'; // This is outside the function definition for App

// function App() {
//   const title = ' CTD Swag'; // This is inside the Component before the return
//   const styles = { height: 100, width: 100 };
//   return (
//     <>
//       <div className="coming-soon">
//         <h1>{title}</h1> {/* `title` inserted into heading */}
//         <div style={styles}>
//           <img src={reactLogo} alt="Code The Dream Logo" />
//         </div>
//         <h2>{message}</h2> {/* 'message' inserted into heading*/}
//       </div>
//     </>
//   );
// }

let message = 'Coming Soon...'; 
setTimeout(() => {
  message = 'We can feel it...';
  console.log(`Updated message: ${message}`)
}, 3000)

function App() {
  const title = ' CTD Swag'; // This is inside the Component before the return
  const styles = { height: 100, width: 100 };
  return (
    <>
      <div className="coming-soon">
        <h1>{title}</h1> {/* `title` inserted into heading */}
        <div style={styles}>
          <img src={reactLogo} alt="Code The Dream Logo" />
        </div>
        <h2>{message}</h2> {/* 'message' inserted into heading*/}
      </div>
    </>
  );
}

export default App;
