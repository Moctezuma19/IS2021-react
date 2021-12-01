import {ApiProtected as http} from "../config/axios";
import {baseUrl} from "../util/Constants";


class UsuarioServicio {
    creaUsuario(datos) {
        return http.put(baseUrl + "/usuario/agrega", datos);
    }
}

export default UsuarioServicio;