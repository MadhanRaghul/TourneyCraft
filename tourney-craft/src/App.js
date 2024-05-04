import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Elite8 from "./Elite8";
import Tourney8 from "./Tourney8";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/elite8" element={<Elite8 />} />
        <Route path="/tourney8" element={<Tourney8 />} />
      </Routes>

    </div>
  );
}

export default App;
