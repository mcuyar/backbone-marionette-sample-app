import $ from 'jquery';
import Backbone from 'backbone';

import CollectionSync from './sync-collection';
import ModelSync from './sync-model';

export default function(method, model, options) {

    var sync = model.hasOwnProperty('cid')
        ? new ModelSync(model, options)
        : new CollectionSync(model, options);

    return sync[method]();

}