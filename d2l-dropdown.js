/**
`d2l-dropdown`
Polymer-based web component for dropdowns.

@demo demo/dropdown.html Generic Dropdown
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import './d2l-dropdown-opener-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown">
	<template strip-whitespace="">
		<style include="d2l-dropdown-opener-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
			:host {}
		</style>
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown',

	behaviors: [
		D2L.PolymerBehaviors.DropdownOpenerBehavior
	],

	/**
	 * Gets the opener element with class "d2l-dropdown-opener" (required by d2l-dropdown behavior).
	 * @return {HTMLElement}
	 */
	getOpenerElement: function() {
		return this.queryEffectiveChildren('.d2l-dropdown-opener');
	}

});
