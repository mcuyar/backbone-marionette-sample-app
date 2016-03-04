import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import UserView from './views/user';

export default Marionette.Object.extend({

    initialize: function(App, data) {
        this.app = App;
        this.data = data;
    },

    respond: function() {
        return this.data.then(function(data) {
            return new UserView({
                model: data
            });
        });
    }
});