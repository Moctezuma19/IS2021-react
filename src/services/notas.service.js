import axios from "axios";
import baseUrl from "../util/Constants";

class NotasServicio {
    agrega(datos) {
        return axios.put(baseUrl + "/agrega", datos);
    }

    obtenNotas() {
        return axios.post(baseUrl + "/todas");
    }

}

export default NotasServicio;