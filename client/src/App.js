import { Fragment } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import {Routes , Route } from 'react-router-dom'
import Bites from './components/Bites/Bites'
import RestaurantSuggestion from './components/Bites/Suggestion/RestaurantSuggestion'


function App() {
  return (
   <Fragment>
    <Header />
      <Routes>
        <Route exact path='/bites' element={<Bites />} />
        {/* <Route exact path='/suggestions' element={<RestaurantSuggestion />} /> */}
      </Routes>
    <Footer />
   </Fragment>
  ); 
}

export default App;
