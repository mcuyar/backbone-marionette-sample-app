import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import UserView from './views/user';

export default Marionette.Object.extend({

    initialize: function(App, data) {
        this.app = App;
        this.data = data;
        console.log(this.data);
    },

    respond: function() {
        return new UserView({
            model: this.data
        });
    }
});