import Controller from '@ember/controller';
import {
  computed,
  set
} from '@ember/object';

export default Controller.extend({
  // Attributes
  name: 'Miguel',
  // Computed
  darkStyles: computed(function() {
    return [
      'primary',
      'accent',
      'dark',
      'grey',
      'success',
      'warning',
      'error',
    ];
  }),
  lightStyles: computed(function() {
    return [
      'mid',
      'light',
      'white',
    ];
  }),
  // Methods
  init() {
    this._super(...arguments);
    set(this, 'names', ['Stefan', 'Miguel', 'Tomster', 'Pluto']);
  },
  // Actions
  actions: {
    foo() {}
  }
});