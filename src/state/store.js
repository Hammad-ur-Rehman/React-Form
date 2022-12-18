import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/countReducer' 

const store = configureStore({
    reducer:{
        counting: counterReducer
    }
})


export default store;