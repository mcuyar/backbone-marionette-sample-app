import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import {guid} from './helper';

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
        var model = this.model;

        try {
            model.set('id', guid());
            this.db.add(model.toJSON());
            this.success();
        }
        catch(err) {
            this.error("Unable to save");
        }
    },

    update: function() {
        try {
            var atts = this.model.toJSON();
            this.db.replace(atts.id, atts);
            this.success();
        }
        catch(err) {
            this.error("Unable to update");
        }
    },

    delete: function() {
        try {
            this.db.remove(this.model.get('id'));
            this.success();
        }
        catch(err) {
            this.error("Unable to remove");
        }
    },

    callback: function (callback, data) {
        if (callback) {
            setTimeout(function () {
                callback(data);
            });
        }
    }
});