import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/index/show';

export default Marionette.Object.extend({
    initialize: function(App, region) {
        var responder = new Responder(App);
        return region.show(responder.respond());
    },

    respond: function() {

    }
});