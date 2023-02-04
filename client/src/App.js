import { React } from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/UserPage/Home/homepage";
import SignIn from "./components/UserPage/Signin/SignIn";
import Restaurant from "./components/UserPage/Restaurant/Restaurant";
import Match from "./components/UserPage/Match/Match";

function App() {
  return (
   <Routes>
       <Route path="/home" element={<Homepage />} />
       <Route path="/signin" element={<SignIn />} />
       <Route path="/restaurant" element={<Restaurant />} />
       <Route path="/match" element = {<Match />} />
   </Routes>
  );
}

export default App;
