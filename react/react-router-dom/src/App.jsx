import { Routes, Route } from "react-router-dom";
import { Home } from "./routs/home";
import { Navbar } from "./routs/Navbar";
import Login from "./routs/login";
import { Signup } from "./routs/Signup";
import { Mafia } from "./routs/mafia";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/mafia" element={<Mafia />} />
    </Routes>
  );
}

export default App;
