import $ from 'jquery';

import Backbone from 'backbone';
import BackboneValidation from 'backbone-validation';
import BackboneStickit from 'backbone.stickit';
import Marionette from 'backbone.marionette';

import Contact from '../../../domain/contacts/model.js';
import template from '../templates/create.hbs';

export default Marionette.ItemView.extend({

    template: template,

    model: new Contact,

    ui: {
        submit: '.submit',
        cancel: '.cancel',
        close: '.close-modal'
    },

    events: {
        'click @ui.submit': "createContact",
        'click @ui.cancel': "cancelContact",
        'click @ui.close': "cancelContact"
    },

    bindings: {
        '[name=username]': {
            observe: 'username',
            setOptions: {
                validate: true
            }
        },
        '[name=first_name]': {
            observe: 'first_name',
            setOptions: {
                validate: true
            }
        },
        '[name=last_name]': {
            observe: 'last_name',
            setOptions: {
                validate: true
            }
        },
        '[name=phone]': {
            observe: 'phone',
            setOptions: {
                validate: true
            }
        },
        '[name=cell]': {
            observe: 'cell',
            setOptions: {
                validate: true
            }
        },
        '[name=email]': {
            observe: 'email',
            setOptions: {
                validate: true
            }
        },
        '[name=street]': {
            observe: 'street',
            setOptions: {
                validate: true
            }
        },
        '[name=city]': {
            observe: 'city',
            setOptions: {
                validate: true
            }
        },
        '[name=state]': {
            observe: 'state',
            setOptions: {
                validate: true
            }
        },
        '[name=zip]': {
            observe: 'zip',
            setOptions: {
                validate: true
            }
        }
    },

    initialize: function() {
        BackboneValidation.bind(this, {
            valid: function (view, attr, selector) {
                var el = view.$('[name=' + attr + ']');
                el.removeClass('mui--is-invalid');
            },
            invalid: function (view, attr, error, selector) {
                var el = view.$el.find('[name=' + attr + ']');
                el.addClass('mui--is-invalid');
            }
        });
    },

    onRender: function() {
        this.stickit();
    },

    onBeforeShow: function() {
        // Option to setup the cancel button
        // differently for a page view vs modal
        // this.$el.find('.cancel').hide();
    },

    onBeforeDestroy: function() {
        BackboneValidation.unbind(this);
    },

    createContact: function (e) {
        e.preventDefault();

        if(this.model.isValid(true)) {
            this.model.save();
        }
    },

    cancelContact: function (e) {
        e.preventDefault();
        this.destroy();
    }
});