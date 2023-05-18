// rfc
import React from 'react';
// import { Websites } from './Component/Websites/websites';
// // import Websites from './Component/Websites/websites';
// import Usestate from './Component/Hooks/useState';
// import UseEffect from './Component/Hooks/useEffect';
// import Usereducer from './Component/Hooks/useReducers';

import Redux from './Redux';


import Todo from './Component/Todo/todo';

const App = () => {

  

  return (
    <React.Fragment>
      <>
        <div>
          <h1 className='Heading'>Welcome to ARMemon {3 + 3}</h1>
          <Redux />
          {/* <Todo/> */}
          {/* <MyName />
          <Websites />
          <Usestate />
          <UseEffect />    
          <Usereducer /> */}
          
        </div>
      </>
    </React.Fragment>

  );
}

const MyName = () => {
  return (
    <div>
      <h1>ARMemon</h1>
    </div>
  );
}



// const App = () => {
//   return React.createElement("div", {},
//     React.createElement("h1", {}, "Hello World")
//   );
// }

export default App;







// import logo from './logo.svg';
// import './App.css';

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

// export default App;
