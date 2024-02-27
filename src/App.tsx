import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role :[number, string]
age = '5';

// type Person = {
//   name:string;
//   age?: number;
// }
// let lotsOfPeople: Person[];

// let person: Person = {
//   name: "Mikey",
// }

function App() {
  return (
    <div className="App">
      <h1>Hello World {age} </h1>
    </div>
  );
}

export default App;
