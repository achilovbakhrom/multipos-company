import {EMP_ADDING} from "../constants";

export default function(state = {},action){
    switch (action.type) {
      case EMP_ADDING:
        return action.payload;
      default:
        return state;
    }
}