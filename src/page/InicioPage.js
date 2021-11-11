import * as React from "react";
import Tarjeta from "../component/Tarjeta";
import {Grid} from '@mui/material';

const InicioPage = () => {
    const [textos, setTextos] = React.useState([]);

    const handleClick = (texto) => {
        let arr = [...textos];
        arr.push(texto);
        setTextos(arr);
    }
    return (<Grid container>
        <Grid item lg={6}>
            <Tarjeta handleClick={handleClick}/>
        </Grid>
        <Grid item lg={6}>
            {textos.length > 0 ?
            textos.map((nota, k) => {
                return (<Tarjeta handleClick={() => {
                }} editable={false} nota={nota} key={k}/>)
            }) :  null
            }

        </Grid>

    </Grid>);
};

export default InicioPage;