import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import {s4, guid} from '../../../foundation/database/helper';
import Cache from '../../../foundation/cache/cache';

export default Marionette.Object.extend({

    initialize: function() {
        this.cache = new Cache;
    },

    store: function(data) {
        if(this.cache.can()) {
            this.cache.set('contactsDB', JSON.stringify(data));
        }
    },

    all: function() {
        //this.cache.remove('contactsDB');
        if(this.cache.can()) {
            if(this.cache.has('contactsDB')) {
                return JSON.parse(this.cache.get('contactsDB'));
            }

            var contacts = this.get();
            this.cache.set('contactsDB', JSON.stringify(contacts));
            return contacts;
        }

        return this.get();
    },

    get: function() {

        var contacts = [];

        $.ajax({
            url: 'http://api.randomuser.me/?results=50&nat=us',
            dataType: 'json',
            async: false,
            success: function(response) {
                contacts = response.results;
            }
        });

        return this.parse(contacts);
    },

    parse: function(contacts) {

        _.forEach(contacts, function(contact, key) {

            contact.id = guid();

            // Set name
            contact.title = contact.name.title;
            contact.first_name = contact.name.first;
            contact.last_name = contact.name.last;

            delete contact.name;

            // location
            contact.street = contact.location.street;
            contact.city = contact.location.city;
            contact.state = contact.location.state;
            contact.zip = contact.location.zip;
            delete contact.location;

            contacts[key] = contact;
        });

        return contacts;
    }

});