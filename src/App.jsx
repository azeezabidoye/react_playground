import { useState } from "react";

/********** COMPONENTS ***********/
// const Hello = (props) => {
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//     </div>
//   );
// };

/********** COMPONENTS WITH HELPER FUNCTION ***********/
// const Hello = (props) => {
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear();
//     console.log(yearNow);
//     return yearNow - props.age;
//   };

//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>

//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

/********** COMPONENTS WITH HELPER FUNCTION & DECLARED PROPS VARIABLES***********/
// const Hello = (props) => {
//   const name = props.name;
//   const age = props.age;

//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

/********** COMPONENTS WITH HELPER FUNCTION & DESTRUCTURED PROPS VARIABLES***********/
// const Hello = (props) => {
//   const { name, age } = props;
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

/********** COMPONENTS WITH HELPER FUNCTION & DESTRUCTURED PROPS VARIABLES as PARAMETERS***********/
// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age;

//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   );
// };

// const App = () => {
//   const name = "Yusuf";
//   const age = 10;

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Kanas" age={13 + 14} />
//       <hr />
//       <Hello name={name} age={age} />
//     </div>
//   );
// };

// const Display = ({ counter }) => {
//   return (
//     <div>
//       <h4>Count: {counter}</h4>
//     </div>
//   );
// };

// const Button = ({ onClick, text }) => {
//   return <button onClick={onClick}>{text}</button>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseByTen = () => {
//     console.log(`Rendering with counter value: ${counter}`);
//     setCounter(counter + 10);
//   };

//   const decreaseByTen = () => {
//     console.log(`Rendering with counter value: ${counter}`);
//     setCounter(counter - 10);
//   };

//   const setToZero = () => {
//     console.log(`Rendering with counter value: ${counter}`);
//     setCounter(0);
//   };

//   // setTimeout(() => {
//   //   setCounter(counter + 10);
//   //   console.log(`rendering ... ${counter}`);
//   // }, 1000);

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByTen} text={"Plus++"} />
//       <Button onClick={setToZero} text={"Reset"} />
//       <Button onClick={decreaseByTen} text={"Minus--"} />
//     </div>
//   );
// };

// const App = () => {
//   const [left, setLeft] = useState(0);
//   const [right, setRight] = useState(0);

//   return (
//     <div>
//       {left} <button onClick={() => setLeft(left + 1)}>Left</button>
//       {right} <button onClick={() => setRight(right + 1)}>Right</button>
//     </div>
//   );
// };

// const App = () => {
//   const [click, setClick] = useState({
//     left: 0,
//     right: 0,
//   });

//   const handleLeftClick = () => {
//     setClick({ ...click, left: click.left + 1 });
//   };

//   const handleRightClick = () => {
//     setClick({ ...click, right: click.right + 1 });
//   };

//   return (
//     <div>
//       {click.left} <button onClick={handleLeftClick}>Left</button> <br /> <hr />
//       {click.right} <button onClick={handleRightClick}>Right</button>
//     </div>
//   );
// };

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  // const handleLeftClick = () => {
  //   setAll(allClicks.concat("L"));
  //   setLeft(left + 1);
  //   setTotal(left + right);
  // };

  // const handleRightClick = () => {
  //   setAll(allClicks.concat("R"));
  //   setRight(right + 1);
  //   setTotal(left + right);
  // };

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
    setTotal(updatedLeft + right);
  };
  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
    setTotal(updatedRight + left);
  };

  return (
    <div>
      <Button onClick={handleLeftClick} text="Left" />
      {left}
      <br /> <hr />
      <Button onClick={handleRightClick} text="Right" />
      {right}
      <p>{allClicks.join(" ")}</p>
      <p>The Total is: {total}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
