import React from "react";
import {Alert, Button, Card, CardContent, CardHeader, FormGroup, Grid, TextField} from "@mui/material";
//@ts-ignore
import {useHistory} from 'react-router-dom';
import UsuarioServicio from "../services/usuario.service";

const RegistroPage = () => {

    const history = useHistory();
    const [nombre, setNombre] = React.useState("");
    const [clave, setClave] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const usuarioServicio = React.useMemo(() => new UsuarioServicio(), []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setShow(false);
        usuarioServicio.creaUsuario({nombre: nombre, clave: clave}).then((response: any) => {
            let {data} = response;
            if (data === null) {
                setSuccess(false);
            } else {
                setSuccess(true);
            }

            setShow(true);

        }).catch((error: any) => {
            console.log("error: " + error);
            setSuccess(false);
            setShow(true);
        });

    }
    return (<Grid container>
        <Grid item lg={4}>
        </Grid>
        <Grid item lg={4}>
            {show && !success &&
            <Alert severity="warning" onClose={() => {
                setShow(false);
            }}>Usuario o contraseña ya existentes</Alert>
            }
            {show && success &&
            <Alert severity={"success"} onClose={() => {
                setShow(false);
            }}>¡El usuario se agrego con éxito!</Alert>
            }
            <Card>
                <CardHeader title="Registro"/>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <TextField label="Usuario" variant="outlined" name="nombre" value={nombre}
                                       onChange={(e: any) => {
                                           setNombre(e.target.value);
                                       }} required/>
                            <div style={{margin: 5}}></div>
                            <TextField label="Contraseña" variant="outlined" name="clave" value={clave}
                                       onChange={(e: any) => {
                                           setClave(e.target.value);
                                       }} type="password" required/>
                        </FormGroup>
                        <br/>
                        <div>
                            <Button type="submit" variant="contained" color="success">Registrarse</Button>
                            <a style={{float: "right", cursor: "pointer"}} onClick={(e: any) => {
                                history.push("/");
                            }}><b style={{color: "green"}}>Ir al inicio de sesión</b></a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Grid>
        <Grid item lg={4}>
        </Grid>

    </Grid>);

};

export default RegistroPage;