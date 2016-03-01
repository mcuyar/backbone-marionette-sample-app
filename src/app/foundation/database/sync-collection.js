import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(collection, options) {
        this.collection = collection;
        this.options = options;
        this.db = window.App.Database.get(collection.table);
    },

    read: function() {
        var data = this.db.all();
        this.callback(this.options.success, data);
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