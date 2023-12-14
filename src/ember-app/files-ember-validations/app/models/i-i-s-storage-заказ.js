import {
  defineNamespace,
  defineBaseModel,
  defineProjections,
  Model as ЗаказMixin
} from '../mixins/regenerated/models/i-i-s-storage-заказ';

import ДокументModel from './i-i-s-storage-документ';

let Model = ДокументModel.extend(ЗаказMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);
defineProjections(Model);

export default Model;
