import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(model, options) {
        this.model = model;
        this.success = options.success;
        this.error = options.error;
        this.query = _.omit(options, ['parse', 'success', 'error']);
        this.db = window.App.Database.get(model.table);
    },

    read: function() {
        var data = this.db.where(this.query);
        this.callback(this.success, data);
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