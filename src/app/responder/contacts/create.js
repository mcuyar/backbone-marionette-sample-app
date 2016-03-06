import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import CreateView from './views/create';

export default Marionette.Object.extend({

    initialize: function(App, data) {
        this.app = App;
        this.data = data;
    },

    respond: function() {
        return new CreateView();
    }
});