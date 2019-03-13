import axios from 'axios';
import {ADD_COMPANY} from '../constants/index';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.css";

export function addCompany(values){
  iziToast.success({
    title: 'Cool',
    message: 'Company was successfully added',
    timeout:3000,
  });
  return{
    type:ADD_COMPANY,
    payload:values,
  }
}