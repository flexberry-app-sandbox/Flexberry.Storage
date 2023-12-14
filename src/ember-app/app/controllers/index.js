import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.storage.caption'),
          title: i18n.t('forms.application.sitemap.storage.title'),
          children: [{
            link: null,
            caption: i18n.t('forms.application.sitemap.storage.информация-о-заказе.caption'),
            title: i18n.t('forms.application.sitemap.storage.информация-о-заказе.title'),
            children: [{
              link: 'i-i-s-storage-накладная-l',
              caption: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-накладная-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-накладная-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-storage-заказ-l',
              caption: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-заказ-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-заказ-l.title'),
              icon: 'calendar',
              children: null
            }, {
              link: 'i-i-s-storage-документ-l',
              caption: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-документ-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.информация-о-заказе.i-i-s-storage-документ-l.title'),
              icon: 'edit',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.storage.сотрудники.caption'),
            title: i18n.t('forms.application.sitemap.storage.сотрудники.title'),
            children: [{
              link: 'i-i-s-storage-сотрудник-l',
              caption: i18n.t('forms.application.sitemap.storage.сотрудники.i-i-s-storage-сотрудник-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.сотрудники.i-i-s-storage-сотрудник-l.title'),
              icon: 'address card',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.storage.товар-на-складе.caption'),
            title: i18n.t('forms.application.sitemap.storage.товар-на-складе.title'),
            children: [{
              link: 'i-i-s-storage-склад-l',
              caption: i18n.t('forms.application.sitemap.storage.товар-на-складе.i-i-s-storage-склад-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.товар-на-складе.i-i-s-storage-склад-l.title'),
              icon: 'chart line',
              children: null
            }, {
              link: 'i-i-s-storage-товар-l',
              caption: i18n.t('forms.application.sitemap.storage.товар-на-складе.i-i-s-storage-товар-l.caption'),
              title: i18n.t('forms.application.sitemap.storage.товар-на-складе.i-i-s-storage-товар-l.title'),
              icon: 'chart bar',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})