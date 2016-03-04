import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/show';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App) {
        this.app = App;
        this.contacts = new Contacts;
    },

    respond: function(id) {
        var responder = new Responder(App, this.data(id));
        return responder.respond();
    },

    data: function(id) {
        return this.contacts.findById(id);
    }

});