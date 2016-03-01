import $ from 'jquery';
import _ from 'lodash';
import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import {s4, guid} from '../../../foundation/database/helper';

export default Marionette.Object.extend({

    get: function() {
        var results = [];

        $.ajax({
            url: 'http://api.randomuser.me/?results=10&nat=us',
            dataType: 'json',
            async: false,
            success: function(response) {
                results = response.results;
            }
        });

        return results;
    },

    parse: function(users) {
        return _.map(users, function(result) {

            var user = result.user;
            user.id = guid();

            return user;

        });
    },

    seed: function() {
        var contacts = this.get();
        return this.parse(contacts);
    }

});