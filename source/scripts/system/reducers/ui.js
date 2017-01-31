/**
 * @author Bilal Cinarli
 */

import {createReducer} from '../store/utils';
import * as uiActions from '../constants/actions/ui';

const initialState = {
    isLoading:  false,
    pageTitle:  '',
    toggleMenu: false
};

export default createReducer(initialState, {
    [uiActions.default.IS_LOADING]:        (state) => {
        return Object.assign({}, state, {
            isLoading: true
        });
    },
    [uiActions.default.IS_LOADED]:         (state) => {
        return Object.assign({}, state, {
            isLoading: false
        });
    },
    [uiActions.default.UPDATE_PAGE_TITLE]: (state, payload) => {
        return Object.assign({}, state, {
            pageTitle: payload.pageTitle
        });
    },
    [uiActions.default.TOGGLE_MENU]:       (state, payload) => {
        return Object.assign({}, state, {
            toggleMenu: payload.toggleMenu
        });
    }
});