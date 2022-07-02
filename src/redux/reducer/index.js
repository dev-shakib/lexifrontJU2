import {combineReducers} from 'redux';
import { otpdata_reducers} from './otpreducer';

const reducers = combineReducers({
    alldata:otpdata_reducers
})

export default reducers