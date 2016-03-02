import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from '../templates/index.hbs';
import UsersView from '../views/users';

export default Marionette.LayoutView.extend({

    initialize: function(options) {
        this.data = options.data;
    },

    template: template,

    regions: {
        users: "#users"
    },

    onBeforeShow: function() {

        var self = this,
            data = self.data;

        data.contacts.done(function(contacts) {
            self.showChildView('users', new UsersView({collection: contacts}));
        });
    }

});
