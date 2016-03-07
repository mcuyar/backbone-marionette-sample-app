import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from '../templates/user-list-item.hbs';
import Modal from '../../../foundation/behaviors/modal/behavior';
import ShowUserModal from '../../../action/contacts/show';
import EditUserModal from '../../../action/contacts/edit';

export default Marionette.ItemView.extend({

    template: template,

    ui: {
        "modalOpen": ".modal-open",
        "modalClose": ".modal-close"
    },

    modelEvents: {
        'sync': 'render'
    },

    behaviors: {
        Modal: {
            behaviorClass: Modal,
            action: {
                edit: EditUserModal,
                show: ShowUserModal
            }
        }
    }
});