import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  вес: DS.attr('decimal'),
  количество: DS.attr('number'),
  сумма: DS.attr('decimal'),
  цена: DS.attr('decimal'),
  накладная: DS.belongsTo('i-i-s-storage-накладная', { inverse: 'записьВНакладной', async: false })
});

export let ValidationRules = {
  вес: {
    descriptionKey: 'models.i-i-s-storage-запись-в-накладной.validations.вес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-storage-запись-в-накладной.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-storage-запись-в-накладной.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-storage-запись-в-накладной.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  накладная: {
    descriptionKey: 'models.i-i-s-storage-запись-в-накладной.validations.накладная.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьВНакладнойE', 'i-i-s-storage-запись-в-накладной', {
    сумма: attr('Сумма', { index: 0 }),
    количество: attr('Количество', { index: 1 }),
    цена: attr('Цена', { index: 2 }),
    вес: attr('Вес', { index: 3 })
  });
};
