import { Serializer as ЗаказSerializer } from
  '../mixins/regenerated/serializers/i-i-s-storage-заказ';
import ДокументSerializer from './i-i-s-storage-документ';

export default ДокументSerializer.extend(ЗаказSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
