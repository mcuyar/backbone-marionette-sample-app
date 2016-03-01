import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(model, options) {
        this.model = model;
        this.options = options;
        this.db = window.App.Database.get(model.table);
    },

    read: function() {

    },

    create: function() {

    },

    update: function() {

    },

    delete: function() {

    },

    callback: function (callback, data) {
        if (callback) {
            setTimeout(function () {
                callback(data);
            });
        }
    }
});