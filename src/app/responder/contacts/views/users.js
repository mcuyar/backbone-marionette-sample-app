import $ from 'jquery';
import Marionette from 'backbone.marionette';

import UserView from './user';

export default Marionette.CollectionView.extend({

    childView: UserView

});