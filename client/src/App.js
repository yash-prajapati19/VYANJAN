import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../src/UserPage/Home/homepage";

function App() {
  return (
   <Routes>
       <Route path="/home" element={<Homepage />} />
   </Routes>
  );
}

export default App;
