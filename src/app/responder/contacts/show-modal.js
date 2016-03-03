import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from './templates/user.hbs';

export default Marionette.Object.extend({

    initialize: function(App, data) {
        this.app = App;
        this.data = data;
    },

    respond: function() {
        return this.data.contact.then(function(data) {
            return Backbone.Marionette.Renderer.render(template, data.toJSON());
        });
    }

});