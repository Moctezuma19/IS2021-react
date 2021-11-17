import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InicioPage from "./page/InicioPage";
import BienvenidoPage from "./page/BienvenidoPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={InicioPage}/>
          <Route exact path={"/bienvenido"} component={BienvenidoPage}/>
        </Switch>
      </Router>
  );
}

export default App;
