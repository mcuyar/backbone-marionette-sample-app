import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/show';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App, region) {
        this.region = region;
        this.app = App;
        this.contacts = new Contacts;
    },

    respond: function(id) {
        var self = this;
        this.data(id).done(function(data) {
            var responder = new Responder(App, data);
            self.region.show(responder.respond());
        });
    },

    data: function(id) {
        return this.contacts.findById(id);
    }

});