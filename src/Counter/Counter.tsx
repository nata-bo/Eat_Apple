import { useState } from "react";
import Message from "../Message/Message";

export default function Counter():JSX.Element{
    
  const[counter,setCounter] = useState<number>(0);

  function add():void{
    setCounter(counter+1);
  }

/*
    let counter:number=0;
    
    function add():void{
        counter++;
        console.log(counter);
    }
*/
 return(
    <>
      <button type="button" onClick={add}>Click Me!</button>
      <h2> Counter value: {counter}</h2>
      <Message msg={String(counter)} title={counter===3?"hello":"Hello from counte"} />
      
    </>
  );    

}