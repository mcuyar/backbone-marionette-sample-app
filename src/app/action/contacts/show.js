import $ from 'jquery';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import Responder from '../../responder/contacts/show';
import Contacts from '../../domain/contacts/collection';

export default Marionette.Object.extend({
    initialize: function(App, region) {
        var responder = new Responder(App);

        var b = new Contacts();

        b.fetch({
            success: function(data) {
                console.log(data);
            }
        });

        return region.show(responder.respond());
    }
});