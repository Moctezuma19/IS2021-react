import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import InicioPage from "./page/InicioPage";
import BienvenidoPage from "./page/BienvenidoPage";
import RegistroPage from "./page/RegistroPage";
import {useAuthContext} from "./context/AuthenticationContext";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={"/"} component={BienvenidoPage}/>
                <Route exact path={"/registro"} component={RegistroPage}/>
                <Route exact path={"/principal"} component={InicioPage}/>

            </Switch>
        </Router>
    );
}

export default App;
