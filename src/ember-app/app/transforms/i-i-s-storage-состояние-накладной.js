import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СостояниеНакладнойEnum from '../enums/i-i-s-storage-состояние-накладной';

export default FlexberryEnum.extend({
  enum: СостояниеНакладнойEnum,
  sourceType: 'IIS.Storage.СостояниеНакладной'
});
