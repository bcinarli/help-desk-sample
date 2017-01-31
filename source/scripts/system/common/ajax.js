/**
 * @author Bilal Cinarli
 */

import {tryParse} from './utils';

export function $http(url) {
    let ajax = function(method, url, data) {
        return new Promise(function(resolve, reject) {
            let request     = new XMLHttpRequest(),
                uri         = url,
                postData    = '',
                contentType = 'application/json; charset:utf-8';

            if(data && method === 'GET') {
                uri += '?';
                let argCount = 0;
                for(let key in data) {
                    if(data.hasOwnProperty(key)) {
                        if(argCount++) {
                            uri += '&';
                        }
                        uri += encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
                    }
                }
            }

            request.open(method, uri);
            request.setRequestHeader('Content-Type', contentType);

            request.onload = function() {
                if(this.status >= 200 && this.status < 400) {
                    let response = this.response;

                    resolve(tryParse(response));
                } else {
                    reject({
                        status:           this.status,
                        statusText:       this.statusText,
                        response:         tryParse(this.response),
                        originalResponse: this
                    });
                }
            };

            request.onerror = function() {
                reject({
                    status:           this.status,
                    statusText:       this.statusText,
                    response:         tryParse(this.response),
                    originalResponse: this
                });
            };

            request.send(postData);
        });
    };

    return {
        'get':    (data) => ajax('GET', url, data),
        'post':   (data) => ajax('POST', url, data),
        'put':    (data) => ajax('PUT', url, data),
        'delete': (data) => ajax('DELETE', url, data)
    };
}