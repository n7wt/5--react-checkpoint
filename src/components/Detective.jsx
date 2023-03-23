import { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");

  const handleClick = () => {
    setSherlock("высокоактивный социопат");
  };

  return (
    <>
      <div className="wrapper">
        <div>Шерлок - {sherlock}</div>
        <button onClick={handleClick}>Узнать правду</button>
      </div>
    </>
  );
}

export default Detective;
