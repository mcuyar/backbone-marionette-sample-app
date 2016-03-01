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

    list: function() {

    }

});