import React from 'react';
import gal from './gal.png'
import minerallayer from './minerallayer.png'
import minerallayer2 from './minerallayer2.png'
import ksp from './ksp.png'
import water from './water.png'
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
        <br/>
        <a href="#1.3">1.3 - Equilibrium and the role of pH</a>
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

          <h1 style={{fontWeight: "normal"}}> • Behavior and learning problems</h1>
          <h1 style={{fontWeight: "normal"}}> • Lower IQ and hyperactivity</h1>
          <h1 style={{fontWeight: "normal"}}> • Slowed growth</h1>
          <h1 style={{fontWeight: "normal"}}> • Hearing problems</h1>
          <h1 style={{fontWeight: "normal"}}> • Anemia</h1>
          <h1 style={{fontWeight: "normal"}}> • In rare cases, ingestion of lead can cause seizures, coma and even death.</h1>

          <h1 style={{textDecoration: "underline"}}>Pregnant Women</h1>
          <h1 style={{fontWeight: "normal"}}>Lead can accumulate in our bodies over time, where it is stored in bones along with calcium. During pregnancy, lead is released from bones as maternal calcium and is used to help form the bones of the fetus. This is particularly true if a woman does not have enough dietary calcium. Lead can also cross the placental barrier exposing the fetus to lead. This can result in serious effects to the mother and her developing fetus, including:</h1>

          <h1 style={{fontWeight: "normal"}}> • Reduced growth of the fetus</h1>
          <h1 style={{fontWeight: "normal"}}> • Premature birth</h1>

          <h1 style={{textDecoration: "underline"}}>Adults</h1>
          <h1 style={{fontWeight: "normal"}}>Lead is also harmful to adults. Adults exposed to lead can suffer from:</h1>

          <h1 style={{fontWeight: "normal"}}> • Cardiovascular effects, increased blood pressure and incidence of hypertension</h1>
          <h1 style={{fontWeight: "normal"}}> • Decreased kidney function</h1>
          <h1 style={{fontWeight: "normal"}}> • Reproductive problems (in both men and women)</h1>
  
        </a><br/><br/><br/>
      
        <a name="1.2">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>1.2 - Lead Pipe Treatment</h1>
          <h1 style={{fontWeight: "normal"}}>In many lead pipes, there is an orthophosphate mineral passivation layer that protects lead bleeding. Adding phosphate to the water invokes the follow reactions.</h1>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={minerallayer} alt="Lead Phosphate Reactions" />
          <h1 style={{fontWeight: "normal"}}>Both products are insoluble and create this boundary on lead pipes. Soluble lead ions from the pipe interact with soluble phosphate ions to form a layer (See below image).</h1>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={minerallayer2} alt="Lead Phosphate Reaction Diagram" />
          <h1 style={{fontWeight: "normal"}}>Normally to prevent the lead in the pipes from leaching into the water, the water is treated with orthophosphates to form a protective layer between the water and the pipe. The specific reactions (above) show how the phosphates added react with the lead ions in the pipe to form the protective layer instead of poisoning the water supply. When Flint switched water supplies they neglected to add phosphates causing the relatively common lead pipes to reach an unusually lethal level.</h1>
        </a>

        <a name="1.3">
          <h1 style={{fontSize: "40px", textDecoration: "underline"}}>1.3 - Equilibrium and the role of pH</h1>
          <h1 style={{fontWeight: "normal"}}>Lead carbonates contribute to the pipe’s protective mineral layer.</h1><br/>
          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={ksp} alt="Equilibrium Reactions" /><br/>
          <h1 style={{fontWeight: "normal"}}>As the pH of the solution lowers, more hydrogen ions are present in the solution, so more carbonate ions react. This takes away carbonate ions from the first equilibrium reaction, and by Le Châtelier’s Principle, more lead ions and carbonate will be created from the coating. This reduces the coating’s effectiveness, which adds to lead bleeding, and increases the lead ion concentration.</h1>
          <h1 style={{fontWeight: "normal"}}>One of the problems caused by switching water supplies was the lower pH. Keeping a high pH in the water is essential for its safety. The water from Detroit had already been treated and had a relatively high pH (usually around 10). However, a few months after the residents began to complain, the water was tested at a pH of 8. It continued to drop even after that. While it may seem like the pH approaching neutral (7) is good, water is intentionally treated like this to solve problems, such as slowing the leaching of lead.</h1>
          <h1 style={{fontWeight: "normal"}}>One of the layers that prevent the lead from the pipes leaching into the water is Lead (II) carbonate, which is relatively insoluble, especially with a high pH. Le Châtelier’s Principle dictates that in an equilibrium system - such as the lead (II) carbonate - the products and reactants will try to maintain a constant ratio. If one of the products is in less concentration, then more will be made. The lead (II) carbonate system looks like PbCO3 (s) ⇌ Pb2+ (aq) + CO32– (aq) in chemistry terms. This by itself is unaffected by pH, but one of the products, CO32-, can react with the hydrogen ions found in water (see the above section). When pH is lower, there are more hydrogen ions, which increases the rate of this exchange, removing more and more CO32-  from the system.</h1>
          <h1 style={{fontWeight: "normal"}}>This means that as the pH is lowered, the  lead (II) carbonate system wants to create more Pb2+ ions, leaving less PbCO3. This explains how the low pH in the Flint water supply breaks down the protective layers exponentially faster to increase the amount of lead in the water. The only thing particularly surprising about this is that Flint did not bother to check. pH is a very easy statistic to keep track of, and as shown by the extent of the fall in pH, Flint didn’t have any plan for pH treatment.
          </h1><br/>

          <img style={{width: "1400px",  display: "block", marginLeft: "auto", marginRight: "auto"}} src={water} alt="Detroit vs. Flint Water" />

        </a><br/><br/><br/>



      </div>

    </div>
  );
}

export default App;
