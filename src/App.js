import {Route, Switch} from "react-router-dom";

import Navigation from "./components/Navigation";
import MainPic from "./components/MainPic";
import MainBody from "./components/MainBody";
import Footer from "./components/Footer";
import LimitingBeliefs from "./components/LimitingBeliefs";
import Classes from "./components/Classes";


function App() {
  return (
    <>
      <Navigation/>
      <Switch>
        <Route exact path ="/">
          <MainPic/>
          <MainBody/>
        </Route>
        <Route exact path ="/limiting-beliefs">
          <LimitingBeliefs/>
        </Route>
        <Route exact path="/classes">
          <Classes/>
        </Route>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
