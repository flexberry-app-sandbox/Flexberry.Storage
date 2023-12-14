import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISStorageДокументLForm from './forms/i-i-s-storage-документ-l';
import IISStorageЗаказLForm from './forms/i-i-s-storage-заказ-l';
import IISStorageНакладнаяLForm from './forms/i-i-s-storage-накладная-l';
import IISStorageСкладLForm from './forms/i-i-s-storage-склад-l';
import IISStorageСотрудникLForm from './forms/i-i-s-storage-сотрудник-l';
import IISStorageТоварLForm from './forms/i-i-s-storage-товар-l';
import IISStorageДокументEForm from './forms/i-i-s-storage-документ-e';
import IISStorageЗаказEForm from './forms/i-i-s-storage-заказ-e';
import IISStorageНакладнаяEForm from './forms/i-i-s-storage-накладная-e';
import IISStorageСкладEForm from './forms/i-i-s-storage-склад-e';
import IISStorageСотрудникEForm from './forms/i-i-s-storage-сотрудник-e';
import IISStorageТоварEForm from './forms/i-i-s-storage-товар-e';
import IISStorageДокументModel from './models/i-i-s-storage-документ';
import IISStorageЗаказModel from './models/i-i-s-storage-заказ';
import IISStorageЗаписьВНакладнойModel from './models/i-i-s-storage-запись-в-накладной';
import IISStorageНакладнаяModel from './models/i-i-s-storage-накладная';
import IISStorageСкладModel from './models/i-i-s-storage-склад';
import IISStorageСотрудникModel from './models/i-i-s-storage-сотрудник';
import IISStorageСтрокаЗаказаModel from './models/i-i-s-storage-строка-заказа';
import IISStorageТоварНаСкладеModel from './models/i-i-s-storage-товар-на-складе';
import IISStorageТоварModel from './models/i-i-s-storage-товар';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-storage-документ': IISStorageДокументModel,
    'i-i-s-storage-заказ': IISStorageЗаказModel,
    'i-i-s-storage-запись-в-накладной': IISStorageЗаписьВНакладнойModel,
    'i-i-s-storage-накладная': IISStorageНакладнаяModel,
    'i-i-s-storage-склад': IISStorageСкладModel,
    'i-i-s-storage-сотрудник': IISStorageСотрудникModel,
    'i-i-s-storage-строка-заказа': IISStorageСтрокаЗаказаModel,
    'i-i-s-storage-товар-на-складе': IISStorageТоварНаСкладеModel,
    'i-i-s-storage-товар': IISStorageТоварModel
  },

  'application-name': 'Storage',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Storage',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Storage',
          title: 'Storage'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        storage: {
          caption: 'Storage',
          title: 'Storage',
          'информация-о-заказе': {
            caption: 'Информация о заказе',
            title: 'Информация о заказе',
            'i-i-s-storage-накладная-l': {
              caption: 'Накладная',
              title: ''
            },
            'i-i-s-storage-заказ-l': {
              caption: 'Заказ',
              title: ''
            },
            'i-i-s-storage-документ-l': {
              caption: 'Документ',
              title: ''
            }
          },
          сотрудники: {
            caption: 'Сотрудники',
            title: 'Сотрудники',
            'i-i-s-storage-сотрудник-l': {
              caption: 'Сотрудник',
              title: ''
            }
          },
          'товар-на-складе': {
            caption: 'Товар на складе',
            title: 'Товар на складе',
            'i-i-s-storage-склад-l': {
              caption: 'Склад',
              title: ''
            },
            'i-i-s-storage-товар-l': {
              caption: 'Товар',
              title: ''
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-storage-документ-l': IISStorageДокументLForm,
    'i-i-s-storage-заказ-l': IISStorageЗаказLForm,
    'i-i-s-storage-накладная-l': IISStorageНакладнаяLForm,
    'i-i-s-storage-склад-l': IISStorageСкладLForm,
    'i-i-s-storage-сотрудник-l': IISStorageСотрудникLForm,
    'i-i-s-storage-товар-l': IISStorageТоварLForm,
    'i-i-s-storage-документ-e': IISStorageДокументEForm,
    'i-i-s-storage-заказ-e': IISStorageЗаказEForm,
    'i-i-s-storage-накладная-e': IISStorageНакладнаяEForm,
    'i-i-s-storage-склад-e': IISStorageСкладEForm,
    'i-i-s-storage-сотрудник-e': IISStorageСотрудникEForm,
    'i-i-s-storage-товар-e': IISStorageТоварEForm
  },

});

export default translations;
