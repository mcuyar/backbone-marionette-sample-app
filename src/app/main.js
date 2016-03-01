import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Database from './foundation/database/database';
import DBSync from './foundation/database/sync';
import Router from './foundation/route/router';
import Dispatcher from './foundation/action/dispatcher.js';
import {routes, actions} from './routes';

window.App = new Marionette.Application();

App.on("start", function() {
    App.Database = new Database();
    App.addRegions({app: "#app"});
    App.Router = new Router(
        new Dispatcher(App, routes, actions)
    );
});

$(function() {
    App.start();
    Backbone.sync = DBSync;
    Backbone.history.start();
});