/**
 * @author Bilal Cinarli
 */

import {config} from '../constants/config';

export const tryParse = (str) => {
    try {
        return JSON.parse(str);
    }
    catch(e) {
        return str;
    }
};

export const getEndPoint = (slug) => config.api.path.local + slug + '.json';

export const setTitle = (title) => document.title = title ? title + ' | ' + config.defaultTitle : config.defaultTitle;