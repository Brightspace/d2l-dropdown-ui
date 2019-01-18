/**
`d2l-dropdown-menu`
Polymer-based web component for dropdown menu content.

@demo demo/dropdown-menu.html Menu Content
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-menu/d2l-menu.js';
import './d2l-dropdown-content-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-menu">
	<template strip-whitespace="">
		<style include="d2l-dropdown-content-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
			:host {}
		</style>
		<div class="d2l-dropdown-content-position">
			<div class="d2l-dropdown-content-width">
				<div class="d2l-dropdown-content-top"></div>
				<div class="d2l-dropdown-content-container">
					<template is="dom-if" if="[[renderContent]]">
						<slot></slot>
					</template>
				</div>
				<div class="d2l-dropdown-content-bottom"></div>
			</div>
		</div>
		<div class="d2l-dropdown-content-pointer">
			<div></div>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-menu',

	behaviors: [
		D2L.PolymerBehaviors.DropdownContentBehavior
	],

	listeners: {
		'd2l-dropdown-close': '_onClose',
		'd2l-dropdown-open': '_onOpen',
		'd2l-menu-resize': '_onMenuResize',
		'd2l-menu-item-select': '_onSelect',
		'd2l-menu-item-change': '_onChange'
	},

	ready: function() {
		this.noAutoFocus = true;
		this.noPadding = true;
	},

	_onClose: function(e) {

		if (e.target !== this) {
			return;
		}

		// reset to root view
		var menu = this.queryEffectiveChildren('[role="menu"]');
		menu.show({ preventFocus: true });

	},

	_onMenuResize: function(e) {
		this.__position(!this._initializingHeight, e.details);
		this._initializingHeight = false;
	},

	_onOpen: function(e) {

		if (e.target !== this) {
			return;
		}

		this._initializingHeight = true;

		var menu = this.queryEffectiveChildren('[role="menu"]');

		dom(menu).setAttribute('no-animate-height', '');
		menu.resize();

		if (this.__applyFocus) {
			setTimeout(function() {
				menu.focus();
			}, 0);
		}

	},

	_onChange: function(e) {
		if (e.target.getAttribute('role') !== 'menuitemradio') {
			return;
		}
		this.close();
	},

	_onSelect: function(e) {
		if (e.target.tagName !== 'D2L-MENU-ITEM') {
			return;
		}
		this.close();
	}

});
