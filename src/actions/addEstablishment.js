import {ESTAB_ADDING} from "../constants";
import axios from 'axios';
import "izitoast/dist/css/iziToast.css";

export function addEstablishment(values) {
    return{
        type: ESTAB_ADDING,
        payload: values
    }
}
