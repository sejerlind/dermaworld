import React from "react";
import Home from "./Assets/Pages/Home"
import Header from "./Assets/Components/header/Header";
import Footer from "./Assets/Components/Footer";
import PageNotFound from "./Assets/Pages/PageNotFound";
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App" id="outer-container">
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} /> 
          <Route  component={PageNotFound} />
        </Switch>  
        <Footer /> 
      </div>
    </BrowserRouter>

  );
}

export default App;
