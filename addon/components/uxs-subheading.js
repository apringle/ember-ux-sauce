import Component from '@ember/component';
import layout from '../templates/components/uxs-subheading';
import Textable from '../mixins/textable';

/**
  A typographic component to render subheading text

  ```hbs
  {{uxs-subheading "Lorem ipsum dolar"}}

  {{#uxs-subheading}}Lorem ipsum dolar"{{/uxs-subheading}}
  ```

  @class Subheading
*/
export default Component.extend(Textable, {

  //
  // Properties
  // ---------
  /**
    The BEM base name for this component: "subheading"

    @property base
    @type     String
    @default  "subheading"
    @public
   */
  base: 'subheading',

  /**
    The test selector name defines the name of the [data-test-*] attribute binding<br/>
    _Default is "subheading"_

    @property testSelectorName
    @default  true
    @type     String
    @public
  */

  /**
    The base property is used as the value for test selectors.<br/>
    _Default is the value of "name"

    @property testSelectorValue
    @default  true
    @type     String
    @public
  */

  //
  // Private
  // ---------
  /**
    The path to the handlbars template

    @property layout
    @type     String
    @private
   */
  layout,

  //
  // Arguments
  // ---------
  /**
    The text align direction, "left", "center", "right" or "justified". Defaults to no alignment (inheret)

    @argument align
    @type     String
  */
  align: null,

  /**
  The name of the component. This property also defaults to the value for test selectors.<br/>

  The default is true, which ensures the test selector is added. If set to false the test selector is not rendered.

    @argument name
    @type     Boolean|String
  */

  /**
    Adds a style modifier to the component. Standard options are "white", "light", "mid", "grey", "dark", "primary", "accent", "success", "warning"  or "error". Defaults to no style (inheret)
    Default values will set the text color.

    @argument style
    @type String
  */

  /**
    The text to be rendered inside this component<br>
    _This can be passed in as the first positional parameter_

    @argument text*
    @type String
  */
  text: '',

}).reopenClass({
  positionalParams: ['text'],
});