/* eslint no-console: 0 */
/* eslint no-undef: 0 */

// console.log('MobxReactForm', MobxReactForm);

const form = new MobxReactForm({
  fields: {
    email: 'test@test.com',
  },
});

// form.update({ email: 'test' });

console.log('form.values()', form.values());
