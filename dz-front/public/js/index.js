'use strict';

import MainController from "./controllers/main-controller.js";

import Router from './core/router.js';

let application = document.getElementById('app');

let router = new Router();
router.addRoute('/', new MainController(application));

router.route();