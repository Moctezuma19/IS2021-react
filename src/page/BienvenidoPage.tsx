import React from 'react';
import {Button, Card, CardContent, CardHeader, Alert, FormGroup, Grid, TextField} from "@mui/material";
import {useAuthContext} from "../context/AuthenticationContext";
//@ts-ignore
import {useHistory} from 'react-router-dom';

const BienvenidoPage = () => {
    const {loginUser} = useAuthContext();
    const history = useHistory();
    const [nombre, setNombre] = React.useState("");
    const [clave, setClave] = React.useState("");
    const [show, setShow] = React.useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setShow(false);
        let response = null;
        try {
            response = await loginUser({nombre: nombre, clave: clave});
        } catch (error) {

        }
        if (response == null) {
            setShow(true);
        } else {
            history.push("/principal");
            return;
        }
    }
    return (<Grid container>
        <Grid item lg={4}>
        </Grid>
        <Grid item lg={4}>
            {show &&
            <Alert severity="warning" onClose={() => {
                setShow(false);
            }}>Usuario o contraseña incorrecto</Alert>
            }
            <Card>
                <CardHeader title="Bienvenido"/>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <TextField label="Usuario" variant="outlined" name="nombre" value={nombre}
                                       onChange={(e: any) => {
                                           setNombre(e.target.value);
                                       }}/>
                            <div style={{margin: 5}}></div>
                            <TextField label="Contraseña" variant="outlined" name="clave" value={clave}
                                       onChange={(e: any) => {
                                           setClave(e.target.value);
                                       }} type="password"/>
                        </FormGroup>
                        <br/>
                        <div>
                            <Button type="submit" variant="contained" color="success">Iniciar sesión</Button>
                            <a style={{float: "right", cursor: "pointer"}} onClick={(e: any) => {
                                history.push("/registro")
                            }}><b style={{color: "green"}}>Ir a registrarse</b></a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Grid>
        <Grid item lg={4}>
        </Grid>

    </Grid>)

}

export default BienvenidoPage;