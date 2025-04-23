import * as actionTypes from './actionTypes';

export const setLanguage = ( value ) => {
    return {
        type: actionTypes.SET_LANGUAGE,
        value: value
    };
};

export const authCheckLang = () => {
    return dispatch => {
        const prefLang = localStorage.getItem('prefLang');
        var userLang = navigator.language || navigator.userLanguage;         
        if (prefLang) {
            dispatch(setLanguage(prefLang));
        } else if (userLang) {
            dispatch(setLanguage(userLang.substring(0, 2)));
        } else {
            dispatch(setLanguage('pt'));
        }
    };
};