'use strict';

import Controller from '../core/controller.js';
import MainView from "../views/main-view.js";
import MainModel from "../models/main-model.js";

export default class MenuController extends Controller {
    constructor(parent) {
        super(parent);
        this.view = new MainView(parent);
    }

    destructor() {}
    
    action() {
        this.view.render();

        this.form = document.querySelector('form');
        this.form.addEventListener('submit', this.mainSubmitHandler);
    }

    mainSubmitHandler = (event) => {
        event.preventDefault();

        // https://stackoverflow.com/questions/15839169/how-to-get-value-of-selected-radio-button
        const checkedValue = document.querySelector('input[name="choice"]:checked').value;

        MainModel.getLinks(checkedValue).then((links) => {
            console.log("links", links)
            this.view.printLinks(links);
        });
    };
}