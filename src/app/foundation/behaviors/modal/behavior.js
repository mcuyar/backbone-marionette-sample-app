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

        this.getHtml(target.data(), function(html, view) {

            html.addClass(self.options.class);

            html.find('.close-modal').on('click', function(e) {
                view.destroy();
                window.mui.overlay('off', html[0]);
                $('body').removeClass('mui-body--scroll-lock');
            });

            window.mui.overlay('on', html[0]);
        });
    },

    getHtml: function(data, callback) {

        var self = this,
            action = this.options.action;

        if(typeof data.action != 'undefined') {
            action = action[data.action];
        }

        action = new action(window.App, this.view.model);

        var responder = action.respond.apply(action, _.values(data));

        $.when(responder).then(function(response) {

            response.parent = self.view;

            var responseObj = response.render().$el,
                html = '' +
                '<div id="modal" class="mui--overflow-hidden mui-container">' +
                    '<div class="close-icon close-modal">' +
                        '<i class="material-icons md-24">clear</i>' +
                    '</div>' +
                    '<div id="modal-content"></div>' +
                '</div>';

            html = $(html);

            html.find('#modal-content').append(responseObj);

            if(typeof callback == 'function') {
                callback(html, response);
            }
        });
    }
});