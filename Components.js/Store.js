import {configurestore} from '@reduxjs/toolkit'
import RootReducer from './RootReducer';
 

const store =  configurestore({
    reducer:RootReducer
});

export default store;