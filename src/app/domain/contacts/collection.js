import $ from 'jquery';
import Backbone from 'backbone';

import Contact from './model'

export default Backbone.Collection.extend({
    table: 'contacts',
    model: Contact
});