import * as React from "react";
import Tarjeta from "../component/Tarjeta";
import {Grid} from '@mui/material';
import NotasServicio from "../services/notas.service";
import {useHistory} from 'react-router-dom';
import {useAuthContext} from "../context/AuthenticationContext";

const InicioPage = () => {
    const history = useHistory();
    const {user, logout} = useAuthContext()
    const [textos, setTextos] = React.useState([]);
    const notasServicio = React.useMemo(() => new NotasServicio(), []);

    const handleClick = (texto) => {
        let obj = {};
        obj.nota = texto;
        notasServicio.agrega(obj).then(({data: response}) => {
            console.log("exito", response.data);
            let arr = [...textos];
            arr.push(texto);
            setTextos(arr);
        }).catch((error) => {
            console.log("error: " + error);
        });
    }
    console.log(user);
    React.useEffect(() => {
        notasServicio.obtenNotas().then(({data: response}) => {
            let arr = response.data.map(x => (x.nota));
            setTextos(arr);
        }).catch((error) => {
            console.log("error: " + error);
        });

    }, [notasServicio]);

    return (<Grid container>
        <Grid item lg={6}>
            <Tarjeta handleClick={handleClick}/>
            <a onClick={(e) => {
                logout();
                history.push("/");
            }} style={{fontWeight: "bold", color: "green", cursor: "pointer"}}>Salir </a>
        </Grid>
        <Grid item lg={6}>
            {textos.length > 0 ?
                textos.map((nota, k) => {
                    return (<Tarjeta handleClick={() => {
                    }} editable={false} nota={nota} key={k}/>)
                }) : null
            }
        </Grid>

    </Grid>);
};

export default InicioPage;