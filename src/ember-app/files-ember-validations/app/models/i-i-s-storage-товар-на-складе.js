import {
  defineNamespace,
  defineProjections,
  Model as ТоварНаСкладеMixin
} from '../mixins/regenerated/models/i-i-s-storage-товар-на-складе';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТоварНаСкладеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
