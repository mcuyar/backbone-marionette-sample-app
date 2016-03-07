import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/edit';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App, model) {
        this.app = App;
        this.model = model;
        this.contacts = new Contacts;
    },

    respond: function(id) {
        var responder = new Responder(App, this.data(id));
        return responder.respond();
    },

    data: function(id) {

        if(typeof this.model != 'undefined' && this.model.id == id) {
            return this.model;
        }

        return this.contacts.findById(id);
    }

});