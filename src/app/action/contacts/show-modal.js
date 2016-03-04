import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/show-modal';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App, region) {
        this.contacts = new Contacts;
    },

    respond: function(data) {
        var responder = new Responder(App, this.data(data.id));
        return responder.respond();
    },

    data: function(id) {
        return {
            contact: this.contacts.findById(id)
        };
    }

});