import {Routes, Route} from "react-router-dom";
import Create from "./views/Create/Create";
import Home from "./views/Home/Home";
import "./App.css";
import Detail from "./views/Detail/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:isbn" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
