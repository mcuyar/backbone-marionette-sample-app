import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    get: function(key) {
        return localStorage.getItem(key);
    },

    set: function(key, data) {
        localStorage.setItem(key, data);
        return data;
    },

    remove: function(key) {
        localStorage.removeItem(key);
    },

    can: function() {
        return typeof(Storage) !== "undefined";
    },

    has: function(key) {
        var data = localStorage.getItem(key);
        return data ? true : false
    }

});