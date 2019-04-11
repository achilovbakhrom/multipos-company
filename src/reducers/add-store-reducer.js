import {STORE_ADDING} from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case STORE_ADDING:
            return action.payload;
        default:
            return state;
    }
}