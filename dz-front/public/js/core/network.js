import settings from './netconfig.js';

/**
 * The class implements methods for calling communicating with the server API
 */
export default class NetworkModule {

    /**
     * @param {string} path Path to send the query to
     * @return {Promise} Promise for the HTTP request
     */
    static fetchGet = ({
                path = '/',
                param = '',
            } = {}) => {
        return fetch(settings.url + ':' + settings.port + settings.api + path + param + "/", {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
        });
    };
}