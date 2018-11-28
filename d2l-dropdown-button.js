/**
`d2l-dropdown-button`
Polymer-based web component for dropdown using a button opener.

@demo demo/dropdown-button.html Button Opener
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import '../d2l-button/d2l-button.js';
import '../d2l-icons/d2l-icon.js';
import '../d2l-icons/tier1-icons.js';
import './d2l-dropdown-opener-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-button">
	<template strip-whitespace="">
		<style include="d2l-dropdown-opener-styles">
			:host d2l-icon {
				height: 0.8rem;
				width: 0.8rem;
			}
			:host .d2l-dropdown-button-text {
				margin-right: 0.6rem;
			}
			:host([primary]) d2l-icon {
				color: white;
			}
			:host-context([dir="rtl"]) .d2l-dropdown-button-text {
				margin-left: 0.6rem;
				margin-right: 0;
			}
			:host(:dir(rtl)) .d2l-dropdown-button-text {
				margin-left: 0.6rem;
				margin-right: 0;
			}
		</style>
		<d2l-button primary="[[primary]]">
			<span class="d2l-dropdown-button-text">[[text]]</span><d2l-icon icon="d2l-tier1:chevron-down"></d2l-icon>
		</d2l-button>
		<slot></slot>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-button',

	behaviors: [
		D2L.PolymerBehaviors.DropdownOpenerBehavior
	],

	properties: {

		/**
		 * Whether the button is a primary or secondary button.
		 */
		primary: {
			type: Boolean,
			reflectToAttribute: true
		},

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
		return this.$$('d2l-button');
	}

});
