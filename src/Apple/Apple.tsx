import { useState } from "react";

export default function Apple(): JSX.Element {
  // const[apple, setApple] = useState<string>("Apple");
  // const [buttonText, setButtonText] = useState("Eat apple");

  // function eatApple():void{
  //     setApple("Eaten apple");
  //     setButtonText("New apple")
  // };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <h2>{isClicked ? "New apple" : "Apple"}</h2>
      <button type="button" onClick={handleClick}>
        {isClicked ? "Eaten apple" : "Eat apple"}
      </button>
    </>
  );
}
