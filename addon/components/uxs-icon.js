import {
  PropTypes
} from 'ember-prop-types';
import Component from '@ember/component';
import layout from '../templates/components/uxs-icon';
import Buttonable from 'ember-ux-sauce/mixins/buttonable';
import Clickable from 'ember-ux-sauce/mixins/clickable';
import {
  set
} from '@ember/object';

const FormTip = Component.extend(Buttonable, Clickable, {
  // Attributes
  base: 'uxs-icon',
  layout,
  // Methods
  init() {
    this._super(...arguments);
    this.registerModifiers([
      'accent',
      'error',
      'grey',
      'primary',
      'prefix',
      'suffix',
      'warning',
    ])
    set(this, 'propTypes', {
      icon: PropTypes.string,
    });
  },
  getDefaultProps() {
    return {
      style: 'black',
    };
  },
});

FormTip.reopenClass({
  positionalParams: ['icon']
});

export default FormTip;