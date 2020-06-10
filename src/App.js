import React from 'react';
import gal from './gal.png'
import minerallayer from './minerallayer.png'
import minerallayer2 from './minerallayer2.png'
import './App.css';



function App() {
  return (
    <div>


      
      <div class="sidenav">
        <a href="#top">Top</a>
        <br/>
        <a href="#about">About</a>
        <br/>
        <a href="#1.1">1.1 - Flint's Lead Problem</a>
        <br/>
        <a href="#1.2">1.2 - Lead Pipe Treatment</a>
      </div>


      
      <div class="main">

        <a name="top"></a>

        <h1 style={{fontSize: "5vmin"}}>The Flint Water Crisis</h1>
        <h1 style={{fontSize: "2vmin"}}>Will Baumgartner and Alex Schwartz</h1>

        <br/>
        <br/>
        
        <a name="about">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>About</h1>
          <h1></h1>
        </a>

        <a name="1.1">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>1.1 - Flint's Lead Problem</h1>
          <h1 style={{fontWeight: "normal"}}>The major problem that everyone has heard about is “lead in the water supply”, but do you know what that means? The EPA has guidelines that suggest no lead should be in the water supply (so it is safe for children), but since it becomes exponentially more difficult as the amount nears nothing, the EPA has an “action limit”. This limit, set at 15 parts per billion has been deemed the amount at which actions should be taken to reduce the amount. Flint did not act. It had <h1 style={{textAlign: "center"}}>13,200 parts per billion</h1> in its water supply, that’s <h1 style={{textAlign: "center"}}>900x</h1>the action limit, and more than enough to cause a multitude of problems. Parts per billion can be hard to understand, so let’s put that into perspective. In just 1 gallon of water is about <h1 style={{textAlign: "center"}}>5 grams of lead!</h1> <p style={{textAlign: "center"}}>(calculations below)</p>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={gal} alt="Lead in Water Calculation" /><br/><br/>
          According to the US environmental protection agency, some of the effects that lead have been linked to are as follows:</h1><br/>
          <h1 style={{textDecoration: "underline"}}>Children</h1>
          <h1>Even low levels of lead in the blood of children can result in:</h1>

          <h1> • Behavior and learning problems</h1>
          <h1> • Lower IQ and hyperactivity</h1>
          <h1> • Slowed growth</h1>
          <h1> • Hearing problems</h1>
          <h1> • Anemia</h1>
          <h1> • In rare cases, ingestion of lead can cause seizures, coma and even death.</h1>

          <h1 style={{textDecoration: "underline"}}>Pregnant Women</h1>
          <h1>Lead can accumulate in our bodies over time, where it is stored in bones along with calcium. During pregnancy, lead is released from bones as maternal calcium and is used to help form the bones of the fetus. This is particularly true if a woman does not have enough dietary calcium. Lead can also cross the placental barrier exposing the fetus to lead. This can result in serious effects to the mother and her developing fetus, including:</h1>

          <h1> • Reduced growth of the fetus</h1>
          <h1> • Premature birth</h1>

          <h1 style={{textDecoration: "underline"}}>Adults</h1>
          <h1>Lead is also harmful to adults. Adults exposed to lead can suffer from:</h1>

          <h1> • Cardiovascular effects, increased blood pressure and incidence of hypertension</h1>
          <h1> • Decreased kidney function</h1>
          <h1> • Reproductive problems (in both men and women)</h1>
  
        </a><br/><br/><br/>
      
        <a name="1.2">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>1.2 - Lead Pipe Treatment</h1>
          <h1>In many lead pipes, there is an orthophosphate mineral passivation layer that protects lead bleeding. Adding phosphate to the water invokes the follow reactions.</h1>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={minerallayer} alt="Lead Phosphate Reactions" />
          <h1>Both products are insoluble and create this boundary on lead pipes. Soluble lead ions from the pipe interact with soluble phosphate ions to form a layer (See below image).</h1>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={minerallayer2} alt="Lead Phosphate Reaction Diagram" />
        </a>

      </div>



    </div>
  );
}

export default App;
