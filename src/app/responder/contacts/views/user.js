import $ from 'jquery';
import Marionette from 'backbone.marionette';

import template from '../templates/user.hbs';
import Modal from '../../../foundation/behaviors/modal/behavior';
import EditUserModal from '../../../action/contacts/edit';
import DeleteUserModal from '../../../action/contacts/delete';

export default Marionette.ItemView.extend({

    template: template,

    ui: {
        "modalOpen": ".modal-open",
        "modalClose": ".modal-close"
    },

    behaviors: {
        Modal: {
            behaviorClass: Modal,
            action: {
                edit: EditUserModal,
                delete: DeleteUserModal
            }
        }
    }
});