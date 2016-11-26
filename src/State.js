import Options from './Options';

export default class State {

  form;

  options;

  $struct = [];

  initial = {
    props: {},
    fields: {},
  }

  current = {
    props: {},
    fields: {},
  }

  initOptions(initial = {}) {
    this.options = new Options();
    this.options.set(initial.options);
  }

  /**
    Get/Set Fields Structure
  */
  struct(data = null) {
    if (data) this.$struct = data;
    return this.$struct;
  }

  /**
    Get Props/Fields
  */
  get(type, subtype) {
    return this[type][subtype];
  }

  /**
    Set Props/Fields
  */
  set(type, subtype, state = null) {
    if (type === 'form') {
      // subtype is the form here
      this.form = subtype;
    }

    if (type === 'initial') {
      Object.assign(this.initial[subtype], state);
      Object.assign(this.current[subtype], state);
    }

    if (type === 'current') {
      Object.assign(this.current[subtype], state);
    }
  }
}
