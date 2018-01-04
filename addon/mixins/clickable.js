import Ember from 'ember';
import {
  PropTypes
} from 'ember-prop-types';

const {
  Mixin
} = Ember;

/**
  A mixin to add click support to a component.
  @class Clickable
  @namespace Mixins
  @public
*/
export default Mixin.create({
  // Attributes
  /**
    The name of the action to fire on click
    @property action
    @default  null
    @type     {string}
    @public
  */
  action: null,

  /**
    Prevents the action from firing when true
    @property disabled
    @default  null
    @type     {boolean}
    @public
  */
  disabled: null,

  /**
   * Mixins Property Managment config
   *
   @property propTypes
   @type     {Object}
   @private
   */
  propTypes: {
    action: PropTypes.oneOfType([
      PropTypes.null,
      PropTypes.string
    ]),
    disabled: PropTypes.bool,
  },
  /**
    Add a role to the item for accessibility
    @property role
    @default  'button'
    @type     {string}
    @public
  */
  role: 'button',
  // Actions
  click() {
    if (!this.get('disabled')) {
      this.sendAction('action', this);
    }
  },
});