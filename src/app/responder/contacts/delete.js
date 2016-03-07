import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import DeleteView from './views/delete';

export default Marionette.Object.extend({

    initialize: function(App, data) {
        this.app = App;
        this.data = data;
    },

    respond: function() {
        return this.data.then(function(data) {
            return new DeleteView({
                model: data
            });
        })
    }
});