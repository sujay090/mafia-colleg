import { useState } from "react";
import { Body } from "./Components/Body";
import { Payment } from "./Components/payment";
import { Routes, Route } from "react-router-dom";
import { MyProvider } from "./contexts/datacontext";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyProvider>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </MyProvider>
    </>
  );
}

export default App;
