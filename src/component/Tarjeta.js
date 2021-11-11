import React from 'react';
import {FormControl, Card, CardContent, TextareaAutosize, Button} from '@mui/material';
import '../css/Notas.css';

const Tarjeta = ({handleClick, editable = true, nota = null}) => {

    const [texto, setTexto] = React.useState("");

    const handleChange = ({target}) => {
        setTexto(target.value);
    }

    return (<Card className="tarjeta">
        <CardContent>
            {editable ?
                <form>
                    <FormControl>
                        <h3>Escribe tu nota aquí</h3>
                        <TextareaAutosize
                            aria-label="Escribe algo ..."
                            id="my-input"
                            className="texto"
                            value={texto}
                            onChange={handleChange}
                            disabled={!editable}
                        />
                    </FormControl>
                    <div style={{marginTop: 15, float: "right"}}>
                        <Button variant="contained" color="success" onClick={(e) => {
                            handleClick(texto);
                        }}>Agregar</Button>
                    </div>
                </form> :
                <div>
                    <h3>Nueva nota</h3>
                    <p>{nota}</p>
                </div>
            }


        </CardContent>
    </Card>);
};

export default Tarjeta;