import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(store, data, table) {
        this.store = store;
        this.data = data;
        this.table = table;
    },

    all: function() {
        return this.data;
    },

    where: function(search) {
        var key = _.findKey(this.data, search || {});
        return this.data[key];
    },

    add: function(data) {
        this.data.push(data);
        this.store.set(this.table, this.data);
    },

    replace: function(id, data) {
        var key = _.findKey(this.data, {id: id});
        this.data[key] = data;
        this.store.set(this.table, this.data);
    },

    remove: function(id) {
        var key = _.findKey(this.data, {id: id});
        delete this.data[key];
        this.store.set(this.table, this.data);
    }
});