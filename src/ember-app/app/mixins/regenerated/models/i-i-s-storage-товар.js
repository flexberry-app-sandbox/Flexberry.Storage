import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицаИзмерения: DS.attr('string'),
  кодТовара: DS.attr('number'),
  название: DS.attr('string'),
  описания: DS.attr('string'),
  цена: DS.attr('decimal'),
  записьВНакладной: DS.belongsTo('i-i-s-storage-запись-в-накладной', { inverse: null, async: false }),
  строкаЗаказа: DS.belongsTo('i-i-s-storage-строка-заказа', { inverse: null, async: false }),
  товарНаСкладе: DS.belongsTo('i-i-s-storage-товар-на-складе', { inverse: null, async: false })
});

export let ValidationRules = {
  единицаИзмерения: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.единицаИзмерения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодТовара: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.кодТовара.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  название: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  описания: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.описания.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  записьВНакладной: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.записьВНакладной.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  строкаЗаказа: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.строкаЗаказа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  товарНаСкладе: {
    descriptionKey: 'models.i-i-s-storage-товар.validations.товарНаСкладе.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТоварE', 'i-i-s-storage-товар', {
    кодТовара: attr('Код товара', { index: 0 }),
    название: attr('Название', { index: 1 }),
    единицаИзмерения: attr('Единица измерения', { index: 2 }),
    описания: attr('Описания', { index: 3 }),
    цена: attr('Цена', { index: 4 })
  });

  modelClass.defineProjection('ТоварL', 'i-i-s-storage-товар', {
    название: attr('Название', { index: 0 }),
    единицаИзмерения: attr('Единица измерения', { index: 1 }),
    описания: attr('Описания', { index: 2 }),
    цена: attr('Цена', { index: 3 })
  });
};
