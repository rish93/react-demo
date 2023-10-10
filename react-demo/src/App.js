import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import FirstComponent from './FirstComponent'
import Card from './Card'
function App() {
  

  let newArr= [2,3,4,5];

  // let counter = 5; //instead of this variable
  //to update state in different places we use hook based variable

  // const [counter, setCounter]= useState(15);//since it is const we are updating value
  //it will throw error use let instead
  let [counter, setCounter]= useState(15);

  const removeValue = () => {

    counter= counter-1;//instead of updating like this , use set counter of hook
    setCounter(counter)
  } 

  const addVlaue = () =>{
    console.log("value added", Math.random() )
    counter= counter+1;//instead of updating like this , use set counter of hook
    setCounter(counter)


    console.log("value added", counter )//it will not update UI 
    //instead use hook, in hoook instead of directly initializing vaibale
    //we do it via hook variable
  }

  return (
<>

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://tailwindcss.com/_next/static/media/sarah-dayan.de9b3815.jpg" alt="" width="384" height="512"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption c>
      <div>
        Sarah Dayan
      </div>
      <div>
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>



<FirstComponent></FirstComponent>



<h2>Counter value: {counter}</h2>

<button className="text-3xl font-bold underline" onClick={addVlaue}>Add value</button>
<button className="text-3xl font-bold underline" onClick={removeValue}>Remove value</button>

<Card username="testvalue" someObject={newArr}/>

<Card username="rishabh" btnText=""/>
</>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
