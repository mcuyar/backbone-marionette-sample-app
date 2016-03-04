import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

export default Marionette.Behavior.extend({

    defaults: {
        class: '',
        action: null
    },

    events: {
        "click @ui.modalOpen": "showModal"
    },

    showModal: function(e) {

        e.preventDefault();

        var self = this,
            target = $(e.target);

        this.getHtml(target.data(), function(html) {

            html.addClass(self.options.class);

            html.find('.close-modal').on('click', function(e) {
                window.mui.overlay('off', html[0]);
            });

            window.mui.overlay('on', html[0]);
        });
    },

    getHtml: function(data, callback) {

        var action = new this.options.action,
            responder = action.respond.apply(action, _.values(data));

        $.when(responder).then(function(response) {
            var responseHtml = response.render().$el.html(),
                html = '' +
                '<div id="modal" class="mui--overflow-hidden mui-container">' + responseHtml +
                    '<div class="close-icon close-modal">' +
                        '<i class="material-icons md-24">clear</i>' +
                    '</div>' +
                '</div>';

            if(typeof callback == 'function') {
                callback($(html));
            }
        });
    }
});