import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from '../templates/index.hbs';
import UsersView from '../views/users';
import Modal from '../../../foundation/behaviors/modal/behavior';
import CreateUserModal from '../../../action/contacts/create';

export default Marionette.LayoutView.extend({

    initialize: function(options) {
        this.data = options.data;
    },

    template: template,

    ui: {
        "modalOpen": ".create-contact"
    },

    regions: {
        users: "#users"
    },

    onBeforeShow: function() {

        var self = this,
            data = self.data;

        data.contacts.done(function(contacts) {
            self.collection = contacts;
            self.showChildView('users', new UsersView({collection: contacts}));
        });
    },

    behaviors: {
        Modal: {
            behaviorClass: Modal,
            action: CreateUserModal
        }
    }

});
