import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import InicioPage from "./page/InicioPage";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path={"/"} component={InicioPage}/>
        </Switch>
      </Router>
  );
}

export default App;
