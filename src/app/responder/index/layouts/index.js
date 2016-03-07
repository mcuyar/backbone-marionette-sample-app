import $ from 'jquery';
import _ from 'lodash';
import Marionette from 'backbone.marionette';

import template from '../templates/index.hbs'

export default Marionette.LayoutView.extend({

    template: template,

    serializeData() {
        return {};
    }

});