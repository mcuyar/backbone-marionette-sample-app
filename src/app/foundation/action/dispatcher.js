import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(App, routes, actions) {

        var region = App.getRegion('app');
        var controller = {};

        _.forEach(routes,
            function(value, key) {
                controller[value] = function() {
                    var action = new actions[value](App, region);
                    return action.respond.apply(action, arguments)
                };
            }
        );

        this.routes = routes;
        this.controller = controller;
    }

});