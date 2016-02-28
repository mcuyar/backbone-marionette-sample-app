import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.AppRouter.extend({
    initialize: function(Dispatcher) {
        this.appRoutes = Dispatcher.routes;
        this.controller = Dispatcher.controller;
    }
});