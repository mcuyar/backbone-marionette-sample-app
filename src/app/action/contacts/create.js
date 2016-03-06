import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/create';
import Contacts from '../../domain/contacts/repository';

export default Marionette.Object.extend({

    initialize: function(App) {
        this.app = App;
        this.contacts = new Contacts;
    },

    respond: function(id) {
        var responder = new Responder(App);
        return responder.respond();
    }

});