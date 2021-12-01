import {ApiProtected as http} from "../config/axios";
import {baseUrl} from "../util/Constants";

class NotasServicio {
    agrega(datos) {
        return http.put(baseUrl + "/nota/agrega", datos);
    }

    obtenNotas() {
        return http.post(baseUrl + "/nota/todas");
    }

}

export default NotasServicio;