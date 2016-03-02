import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(data) {
        this.data = data;
    },

    all: function() {
        return this.data;
    },

    where: function(search) {
        var key = _.findKey(this.data, search || {});
        return this.data[key];
    }
});