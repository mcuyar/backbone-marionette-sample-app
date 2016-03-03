import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Contact from './model.js';
import Contacts from './collection.js';

export default Marionette.Object.extend({

    initialize: function() {
        this.contact = new Contact;
        this.contacts = new Contacts;
    },

    all: function() {

        var results = $.Deferred();

        this.contacts.fetch({
            success: function(contacts) {
                results.resolve(contacts)
            }
        });

        return results.promise();
    },

    findById(id) {
        var results = $.Deferred();

        this.contact.fetch({
            id: id,
            success: function(contact) {
                results.resolve(contact)
            }
        });

        return results.promise();
    }

});