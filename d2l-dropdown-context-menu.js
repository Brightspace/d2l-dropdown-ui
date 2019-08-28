/**
`d2l-dropdown-context-menu`
Polymer-based web component for dropdown using a context-menu opener.

@demo demo/dropdown-context-menu.html Context-Menu Opener
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '@brightspace-ui/core/components/button/button-icon.js';
import 'd2l-polymer-behaviors/d2l-visible-on-ancestor-behavior.js';
import './d2l-dropdown-opener-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-context-menu">
	<template strip-whitespace="">
		<style include="d2l-dropdown-opener-styles d2l-visible-on-ancestor-styles">
			:host {
				display: inline-block;
			}
		</style>
		<d2l-button-icon aria-label$="[[text]]" disabled="[[disabled]]" icon="tier1:chevron-down" text="[[text]]" translucent="[[translucent]]">
		</d2l-button-icon>
		<slot></slot>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-context-menu',

	behaviors: [
		D2L.PolymerBehaviors.DropdownOpenerBehavior,
		D2L.PolymerBehaviors.VisibleOnAncestorBehavior
	],

	properties: {

		/**
		 * Label for the context-menu button (required for accessibility).
		 */
		text: String,

		/**
		 * Whether the opener is translucent.
		 */
		translucent: {
			type: Boolean
		}

	},

	listeners: {
		'd2l-dropdown-close': '_onClose',
		'd2l-dropdown-open': '_onOpen'
	},

	/**
	 * Gets the opener element (required by d2l-dropdown behavior).
	 * @return {HTMLElement}
	 */
	getOpenerElement: function() {
		return this.$$('d2l-button-icon');
	},

	_onClose: function() {
		this.removeAttribute('opened');
	},

	_onOpen: function() {
		this.setAttribute('opened', '');
	}

});
