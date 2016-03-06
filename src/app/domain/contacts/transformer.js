import $ from 'jquery';
import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({

    initialize: function(contact) {
        this.attributes = contact.attributes;
    },

    transform: function() {
        var self = this;
        _.forEach(this.attributes, function(value, key) {
            if(key.split('.').length > 1) {
                self.set(key, value);
            }

            if(['phone', 'cell'].indexOf(key) > -1) {
                self.set(key, self.formatPhone(value));
            }

        });

    },

    set: function(key, value) {
        delete this.attributes[key];
        _.set(this.attributes, key, value);
    },

    //http://stackoverflow.com/questions/8358084/regular-expression-to-reformat-a-phone-number-in-javascript
    formatPhone: function(phone) {
        return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
    }
});