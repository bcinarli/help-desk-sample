/**
 * @author Bilal Cinarli
 */

import {createAction} from '../store/utils';
import {store} from '../store';

export const updatePageTitle = (pageTitle) => createAction('UPDATE_PAGE_TITLE', {pageTitle});

export const toggleMenu = () => createAction('TOGGLE_MENU', {toggleMenu: !store.getState().ui.toggleMenu});

export default {
    updatePageTitle,
    toggleMenu
};