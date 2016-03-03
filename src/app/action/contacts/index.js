import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/index';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App, region) {
        this.region = region;
        this.app = App;
        this.contacts = new Contacts;
    },

    respond: function() {
        var responder = new Responder(App, this.data());
        this.region.show(responder.respond());
    },

    data: function() {
        return {
            contacts: this.contacts.all()
        };
    }

});