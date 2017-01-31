/**
 * @author Bilal Cinarli
 */

import {$http} from '../../system/common/ajax';
import {getEndPoint} from '../../system/common/utils';

export const getPage = (slug) => $http(getEndPoint(slug)).get();

export default {
    getPage
};