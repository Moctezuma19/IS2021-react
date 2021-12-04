import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import InicioPage from "./page/InicioPage";
import BienvenidoPage from "./page/BienvenidoPage";
import RegistroPage from "./page/RegistroPage";
import {useAuthContext} from "./context/AuthenticationContext";
import Error403 from "./page/Error403";
import Error404 from "./page/Error404";

function App() {

    const {user} = useAuthContext();

    return (
        <Router>
            <Switch>
                <Route exact path={"/"} render={(props) => {
                    if (typeof user?.token !== "undefined" && user?.token?.length > 0) {
                        return (<InicioPage/>);
                    } else {
                        return (<BienvenidoPage/>);
                    }
                }}/>
                <Route exact path={"/registro"} render={(props) => {
                    if (typeof user?.token !== "undefined" && user.token?.length > 0) {
                        return (<InicioPage/>);
                    } else {
                        return (<RegistroPage/>);
                    }
                }}/>
                <Route exact path={"/principal"} render={(props) => {
                    if (typeof user?.token !== "undefined" && user.token?.length > 0) {
                        return (<InicioPage/>);
                    } else {
                        return (<Error403/>);
                    }
                }}/>
                <Route component={Error404}/>
            </Switch>
        </Router>
    );
}

export default App;
