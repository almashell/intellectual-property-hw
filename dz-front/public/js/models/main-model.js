import NetworkModule from '../core/network.js';
import Model from '../core/model.js';

export default class MainModel extends Model {

    constructor() {
        super();
    }

    static getLinks(param) {
        return NetworkModule.fetchGet({
            path: '/rospatent/', 
            param: param,
        }).then((response) => {
            return response.json();
        },
        (error) => {
            throw new Error(error);
        });
    }

}