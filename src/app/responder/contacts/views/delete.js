import $ from 'jquery';

import Backbone from 'backbone';
import BackboneValidation from 'backbone-validation';
import BackboneStickit from 'backbone.stickit';
import Marionette from 'backbone.marionette';
import Toast from 'toastr';

import Contact from '../../../domain/contacts/model.js';
import template from '../templates/delete.hbs';

export default Marionette.ItemView.extend({

    template: template,

    ui: {
        submit: '.submit',
        cancel: '.cancel',
        close: '.close-modal'
    },

    events: {
        'click @ui.submit': "deleteContact",
        'click @ui.cancel': "cancelDelete",
        'click @ui.close': "cancelDelete"
    },

    initialize: function() {
        Toast.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }
    },

    deleteContact: function (e) {
        e.preventDefault();

        var self = this;

        this.model.destroy({
            success : function(model, response) {
                console.log(model);
                self.onDeleteSuccess.call(self, model);
            },
            error: function(model, response) {
                self.onDeleteError.call(self, model)
            }
        });
    },

    cancelDelete: function (e) {
        e.preventDefault();
    },

    onDeleteSuccess: function(model) {
        this.$el.find('.close-modal').trigger('click');
        Toast.success(model.get('first_name')  + ' ' + model.get('last_name') + ' successfully deleted!');
        this.trigger('renderParent');
    },

    onDeleteError: function(model) {
        Toast.error('Something went wrong!');
    }
});