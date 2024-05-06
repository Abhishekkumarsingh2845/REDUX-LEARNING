import {ADD_TO_CARD} from './Constant';

export function addtocard(item){
    return {
        type:ADD_TO_CARD,
        data:item
    }
}