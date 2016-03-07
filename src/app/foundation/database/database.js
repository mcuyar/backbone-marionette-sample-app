import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Query from './query';
import Contacts from '../../domain/contacts/database/contacts'

export default Marionette.Object.extend({

    initialize: function() {
        this.data = {
            contacts: (new Contacts)
        };
    },

    get: function(table) {
        var data = this.data[table].all();
        return new Query(this, data || {}, table);
    },

    set: function(table, data) {
        this.data[table].store(data);
    }

});