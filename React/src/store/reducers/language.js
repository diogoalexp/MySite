import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    value: 'pt'
};

const setLanguage = (state, action) => {
    localStorage.setItem('prefLang', action.value);
    return updateObject( state, {
        value: action.value
    } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.SET_LANGUAGE: return setLanguage( state, action );
        default: return state;
    }
};

export default reducer;