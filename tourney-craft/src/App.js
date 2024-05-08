import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Elite8 from "./Elite8";
import Sweet16 from "./Sweet16";
import Tourney8 from "./Tourney8";
import Tourney16 from "./Tourney16";

function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/elite8" element={<Elite8 />} />
        <Route path="/sweet16" element={<Sweet16 />} />
        <Route path="/tourney8" element={<Tourney8 />} />
        <Route path="/tourney16" element={<Tourney16 />} />
      </Routes>

    </div>
  );
}

export default App;
