import {STORE_ADDING} from "../constants";
import axios from 'axios';
import "izitoast/dist/css/iziToast.css";

export function addStore(values) {
    return{
        type: STORE_ADDING,
        payload: values
    }
}
