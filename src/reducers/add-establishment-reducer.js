import {ESTAB_ADDING} from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case ESTAB_ADDING:
            return action.payload;
        default:
            return state;
    }
}