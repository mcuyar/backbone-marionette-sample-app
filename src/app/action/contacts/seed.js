import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import ContactRepository from '../../domain/contacts/repository';

export default Marionette.Object.extend({
    initialize: function() {
        var repo = new ContactRepository();
        repo.seed();
    }
});