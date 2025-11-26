import "./App.css";
import Card from "./components/Card";
function App() {
  let myObj = {
    name: "Sahil",
    age: 23,
    address: {
      city: "New Delhi",
      state: "Delhi",
      country: "India",
    },
  };
  let newArr = [1, 2, 3, 4];
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with tailwind
      </h1>
      <Card username="sahil" myArr={newArr} />
      <Card />
      <Card />
    </>
  );
}

export default App;
