import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-storage-документ-l');
  this.route('i-i-s-storage-документ-e',
  { path: 'i-i-s-storage-документ-e/:id' });
  this.route('i-i-s-storage-документ-e.new',
  { path: 'i-i-s-storage-документ-e/new' });
  this.route('i-i-s-storage-заказ-l');
  this.route('i-i-s-storage-заказ-e',
  { path: 'i-i-s-storage-заказ-e/:id' });
  this.route('i-i-s-storage-заказ-e.new',
  { path: 'i-i-s-storage-заказ-e/new' });
  this.route('i-i-s-storage-накладная-l');
  this.route('i-i-s-storage-накладная-e',
  { path: 'i-i-s-storage-накладная-e/:id' });
  this.route('i-i-s-storage-накладная-e.new',
  { path: 'i-i-s-storage-накладная-e/new' });
  this.route('i-i-s-storage-склад-l');
  this.route('i-i-s-storage-склад-e',
  { path: 'i-i-s-storage-склад-e/:id' });
  this.route('i-i-s-storage-склад-e.new',
  { path: 'i-i-s-storage-склад-e/new' });
  this.route('i-i-s-storage-сотрудник-l');
  this.route('i-i-s-storage-сотрудник-e',
  { path: 'i-i-s-storage-сотрудник-e/:id' });
  this.route('i-i-s-storage-сотрудник-e.new',
  { path: 'i-i-s-storage-сотрудник-e/new' });
  this.route('i-i-s-storage-товар-l');
  this.route('i-i-s-storage-товар-e',
  { path: 'i-i-s-storage-товар-e/:id' });
  this.route('i-i-s-storage-товар-e.new',
  { path: 'i-i-s-storage-товар-e/new' });
});

export default Router;
