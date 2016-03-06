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
        '#username': {
            observe: 'username',
            setOptions: {
                validate: true
            }
        },
        '#first_name': {
            observe: 'name.first',
            setOptions: {
                validate: true
            }
        },
        '#last_name': {
            observe: 'name.last',
            setOptions: {
                validate: true
            }
        },
        '#phone': {
            observe: 'phone',
            setOptions: {
                validate: true
            }
        },
        '#mobile': {
            observe: 'cell',
            setOptions: {
                validate: true
            }
        },
        '#email': {
            observe: 'email',
            setOptions: {
                validate: true
            }
        },
        '#street': {
            observe: 'location.street',
            setOptions: {
                validate: true
            }
        },
        '#city': {
            observe: 'location.city',
            setOptions: {
                validate: true
            }
        },
        '#state': {
            observe: 'location.state',
            setOptions: {
                validate: true
            }
        },
        '#zip': {
            observe: 'location.zip',
            setOptions: {
                validate: true
            }
        }
    },

    initialize: function() {
        BackboneValidation.bind(this, {
            valid: function (view, attr, selector) {
                var el = view.$('[name="' + attr + '"]'),
                    container = el.closest('.mui-textfield');
                el.removeClass('mui--is-invalid');
                container.find('.error-reason').remove();
            },
            invalid: function (view, attr, error, selector) {
                var el = view.$el.find('[name="' + attr + '"]'),
                    container = el.closest('.mui-textfield');
                el.addClass('mui--is-invalid');
                container.find('.error-reason').remove();
                container.append('<span class="error-reason" style="color: red">'+error+'</span>');
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