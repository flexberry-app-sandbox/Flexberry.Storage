import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-storage-товар-на-складе', 'Unit | Model | i-i-s-storage-товар-на-складе', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-storage-документ',
    'model:i-i-s-storage-заказ',
    'model:i-i-s-storage-запись-в-накладной',
    'model:i-i-s-storage-накладная',
    'model:i-i-s-storage-склад',
    'model:i-i-s-storage-сотрудник',
    'model:i-i-s-storage-строка-заказа',
    'model:i-i-s-storage-товар-на-складе',
    'model:i-i-s-storage-товар',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
