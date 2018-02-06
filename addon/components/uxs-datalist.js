import Component from '@ember/component';
import layout from '../templates/components/uxs-datalist';
import Testable from 'ember-ux-sauce/mixins/testable';
import BEMComponent from 'ember-bem-sauce/mixins/bem-component';

export default Component.extend(BEMComponent, Testable, {
  base: 'uxs-datalist',
  layout
});