import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FormField from './components/Formfield'
import CoolButton from './components/CoolButton'

function App() {
  return (
    <div className="Navbar">
      <Navbar />
      <FormField />
      <CoolButton />
    </div>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
