import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-storage-строка-заказа', 'Unit | Serializer | i-i-s-storage-строка-заказа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-storage-строка-заказа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-storage-состояние-заказа',
    'transform:i-i-s-storage-состояние-накладной',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
