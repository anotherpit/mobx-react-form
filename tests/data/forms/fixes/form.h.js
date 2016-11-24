import MobxReactForm from '../../../../src';

const fields = [
  'items[].name',
  'items[].alternateName',
];

const labels = {
  'items[].name': 'Name Label',
  'items[].alternateName': 'Alternate Name Label',
};

const values = {
  items: [{
    name: 'Item #A',
    alternateName: 'Alternate Name #AA',
  }, {
    name: 'Item #B',
  }],

};

class Form extends MobxReactForm {

  onInit(form) {
    form.update({
      items: [
        ...form.$('items').values(),
        {
          name: 'Item #3',
        },
      ],
    });
  }
}

export default new Form({ fields, labels, values }, 'Fixes-H');
