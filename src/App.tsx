import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
age = '5';

let printName: (name: string) => never;

// type Person = {
//   name: string;
//   age?: number;
// }
interface Person  {
  name: string;
  age?: number;
}

type X = {
  a: string;
  b: number;
}
type Y =  {
  c: string;
  d: number;
}

let y: Y = {
  c: "hello",
  d: 42
}
function App() {
  return (
    <div className="App">
      <h1>Hello World </h1>
    </div>
  );
}

export default App;
