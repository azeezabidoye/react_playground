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

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log(`Button clicked`);
    setCounter(counter + 10);
  };

  // setTimeout(() => {
  //   setCounter(counter + 10);
  //   console.log(`rendering ... ${counter}`);
  // }, 1000);

  return (
    <div>
      <h4>Count: {counter}</h4>
      <button onClick={handleClick}>Plus+</button> <br />
      <button onClick={() => setCounter(0)}>Zero</button>
    </div>
  );
};

export default App;
