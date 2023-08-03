import { useState } from "react";

export default function Apple(): JSX.Element {
  // const[apple, setApple] = useState<string>("Apple");
  // const [buttonText, setButtonText] = useState("Eat apple");

  // function eatApple():void{
  //     setApple("Eaten apple");
  //     setButtonText("New apple")
  // };

  const [isClicked, setIsClicked] = useState(false);

   const btnName:string = isClicked ? "Eaten apple" : "Eat apple";
   const picName:string = isClicked ? "https://avatarko.ru/img/avatar/30/frukt_yabloko_planeta_29389.jpg":"https://avatarko.ru/img/avatar/9/frukt_yabloko_8434.jpg"

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <h2>{isClicked ? "New apple" : "Apple"}</h2>
      <button type="button" onClick={handleClick}>{btnName};</button>
      <img width="150px" src={picName} alt="Картинка яблока" />
    </>
  );
}
