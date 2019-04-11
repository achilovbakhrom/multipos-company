import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";
import axios from 'axios';
import {EMP_ADDING} from '../constants/index';

export function addEmployee(values){
  return{
    type:EMP_ADDING,
    payload:values,
  }
}