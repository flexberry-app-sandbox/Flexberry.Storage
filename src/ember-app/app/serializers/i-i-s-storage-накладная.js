import { Serializer as НакладнаяSerializer } from
  '../mixins/regenerated/serializers/i-i-s-storage-накладная';
import ДокументSerializer from './i-i-s-storage-документ';

export default ДокументSerializer.extend(НакладнаяSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
