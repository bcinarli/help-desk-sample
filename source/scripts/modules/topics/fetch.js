/**
 * @author Bilal Cinarli
 */

import {$http} from '../../system/common/ajax';
import {getEndPoint} from '../../system/common/utils';

export const getTopics = () => $http(getEndPoint('topics')).get();

export default {
    getTopics
};