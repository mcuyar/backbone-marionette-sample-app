import $ from 'jquery';
import Backbone from 'backbone';

import Validation from './validation';
import Transformer from './transformer';

export default Backbone.Model.extend({

    table: 'contacts',

    defaults: {
        picture: {
            "large": "https://raw.githubusercontent.com/mcuyar/backbone-marionette-sample-app/master/src/static/images/user-default.jpg",
            "medium": "https://raw.githubusercontent.com/mcuyar/backbone-marionette-sample-app/master/src/static/images/user-default-medium.jpg",
            "thumbnail": "https://raw.githubusercontent.com/mcuyar/backbone-marionette-sample-app/master/src/static/images/user-default-thumb.jpg"
        }
    },

    validation: function() {
        return Validation;
    },

    save: function() {
        this.onBeforeSave();
        return Backbone.Model.prototype.save.apply(this, arguments);
    },

    onBeforeSave: function () {
        (new Transformer(this)).transform();
    }
});