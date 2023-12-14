import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  email: DS.attr('string'),
  имя: DS.attr('string'),
  отчество: DS.attr('string'),
  табельныйНомер: DS.attr('number'),
  телефон: DS.attr('string'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  email: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  табельныйНомер: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.табельныйНомер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-storage-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-storage-сотрудник', {
    отчество: attr('Отчество', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    email: attr('Email', { index: 3 }),
    табельныйНомер: attr('Табельный номер', { index: 4 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-storage-сотрудник', {
    отчество: attr('Отчество', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    телефон: attr('Телефон', { index: 2 }),
    email: attr('Email', { index: 3 }),
    табельныйНомер: attr('Табельный номер', { index: 4 })
  });
};
