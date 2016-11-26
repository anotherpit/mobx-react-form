/**
  Field Helpers
*/
export default {

  /**
   Fields Selector (alias of select)
   */
  $(key) { return this.select(key, null, false) || []; },

  /**
   Fields Values (recursive with Nested Fields)
   */
  values() { return this.get('value'); },

  /**
   Fields Errors (recursive with Nested Fields)
   */
  errors() { return this.get('error'); },

  /**
   Fields Labels (recursive with Nested Fields)
   */
  labels() { return this.get('label'); },

  /**
   Fields Default Values (recursive with Nested Fields)
   */
  defaults() { return this.get('default'); },

  /**
   Fields Initial Values (recursive with Nested Fields)
   */
  initials() { return this.get('initial'); },

};
