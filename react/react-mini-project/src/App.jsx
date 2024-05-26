import { useState } from "react";
import { Button } from "./components/button";
import { counterContext } from "../src/context/create";
function App() {
  const [counter, setCounter] = useState("sujay");

  return (
    <counterContext.Provider value={counter}>
      <div className="h-screen bg-zinc-900 text-white flex flex-col justify-center items-center">
        <button
          className="text-2xl text-white bg-blue-500 px-10 py-2"
          onClick={() => setCounter(counter + 1)}
        >
          {counter}
        </button>
        <Button />
      </div>
    </counterContext.Provider>
  );
}

export default App;
