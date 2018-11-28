/**
`d2l-dropdown-subtle`
Polymer-based web component for dropdown using a subtle button opener.

@demo demo/dropdown-subtle.html Subtle Button Opener
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-button/d2l-button-subtle.js';
import '../d2l-icons/d2l-icon.js';
import '../d2l-icons/tier1-icons.js';
import './d2l-dropdown-opener-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-button-subtle">
	<template strip-whitespace="">
		<style include="d2l-dropdown-opener-styles">
		</style>
		<d2l-button-subtle text="[[text]]" icon="d2l-tier1:chevron-down" icon-right=""></d2l-button-subtle>
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-button-subtle',

	behaviors: [
		D2L.PolymerBehaviors.DropdownOpenerBehavior
	],

	properties: {

		/**
		 * Text for the button.
		 */
		text: String
	},

	/**
	 * Gets the opener element (required by d2l-dropdown behavior).
	 * @return {HTMLElement}
	 */
	getOpenerElement: function() {
		return this.$$('d2l-button-subtle');
	}

});
