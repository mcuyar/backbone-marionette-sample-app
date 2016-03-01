import $ from 'jquery';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(data) {
        this.data = data;
    },

    all: function() {
        return this.data;
    },

    where: function(query) {

    }
});