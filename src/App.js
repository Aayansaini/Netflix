import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../src/login";
import Netflix from "./netflix";

export default function App() {
  return (
    
    <div className="">
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Login/>} />
          <Route path="netflix" element={<Netflix />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));