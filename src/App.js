import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>


      //navbar
      <div class="sidenav">
        <a href="#top">Top</a>
        <br/>
        <a href="#about">About</a>
      </div>


      //main body
      <div class="main">

        <a name="top"></a>

        <h1 style={{fontSize: "3.7vmin"}}>The Flint Water Crisis</h1>
        <h1 style={{fontSize: "2vmin"}}>Will Baumgartner and Alex Schwartz</h1>

        <br/>
        <br/>
        
        <a name="about">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>About</h1>
        </a>
      </div>



    </div>
  );
}

export default App;
