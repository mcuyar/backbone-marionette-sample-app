import $ from 'jquery';
import Marionette from 'backbone.marionette';

import UserView from './user-list-item';

export default Marionette.CollectionView.extend({

    childView: UserView

});