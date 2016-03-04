import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from '../templates/user-list-item.hbs';
import Modal from '../../../foundation/behaviors/modal/behavior';
import ShowUserModal from '../../../action/contacts/show'

export default Marionette.ItemView.extend({

    template: template,

    ui: {
        "modalOpen": ".modal-open",
        "modalClose": ".modal-close"
    },

    behaviors: {
        Modal: {
            behaviorClass: Modal,
            action: ShowUserModal
        }
    }

});