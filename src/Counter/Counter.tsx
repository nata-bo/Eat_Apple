import { useState } from "react";

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
    </>
  );    

}