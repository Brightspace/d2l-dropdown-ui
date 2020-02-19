import '@polymer/polymer/polymer-legacy.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-opener-styles">
	<template>
		<style>

			:host {
				display: inline-block;
				outline: none;
				overflow: visible;
				position: relative;
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};

/** @polymerBehavior */
D2L.PolymerBehaviors.DropdownOpenerBehavior = {

	properties: {

		/**
		 * Indicates the component is a dropdown opener.
		 */
		isDropdownOpener: {
			type: Boolean,
			readOnly: true,
			value: true
		},

		/**
		 * Whether to disable automatically opening the dropdown. Can be useful if the custom
		 * opener needs to control the open/close state of the dropdown.
		 */
		noAutoOpen: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Standard HTML disabled.
		 */
		disabled: {
			type: Boolean,
			reflectToAttribute: true
		}

	},

	attached: function() {
		afterNextRender(this, function() {
			var opener = this.getOpenerElement();
			var content = this.queryEffectiveChildren('[d2l-dropdown-content]');
			if (!opener) {
				return;
			}
			opener.setAttribute('aria-haspopup', 'true');
			this.listen(opener, 'keypress', '__onKeyPress');
			this.listen(opener, 'mouseup', '__onMouseUp');
			this.listen(this, 'd2l-dropdown-open', '__onOpened');
			this.listen(this, 'd2l-dropdown-close', '__onClosed');
			opener.setAttribute('aria-expanded', (content && content.opened || false).toString());
		}.bind(this));
	},

	detached: function() {
		var opener = this.getOpenerElement();
		if (!opener) {
			return;
		}
		this.unlisten(opener, 'keypress', '__onKeyPress');
		this.unlisten(opener, 'mouseup', '__onMouseUp');
		this.unlisten(this, 'd2l-dropdown-open', '__onOpened');
		this.unlisten(this, 'd2l-dropdown-close', '__onClosed');
	},

	/**
	 * Applies focus to opener.
	 */
	focus: function() {
		var opener = this.getOpenerElement();
		if (!opener) {
			return;
		}
		opener.focus();
	},

	/**
	 * Gets the opener component.
	 */
	getOpener: function() {
		return this;
	},

	/**
	 * Gets the opener element (required by d2l-dropdown behavior).
	 * @return {HTMLElement}
	 */
	getOpenerElement: function() {
		return this;
	},

	/**
	 * Toggles the visible state of the dropdown. If open, it will close, and vice versa.
	 * @param {Boolean} applyFocus Whether focus should be automatically move to first focusable upon opening.
	 */
	toggleOpen: function(applyFocus) {
		if (this.disabled) {
			return;
		}

		var content = this.__getContentElement();
		if (!content) {
			return;
		}
		content.toggleOpen(applyFocus);
	},

	__getContentElement: function() {
		return this.queryEffectiveChildren('[d2l-dropdown-content]');
	},

	__onKeyPress: function(e) {
		if (e.keyCode !== 13) {
			return;
		}
		if (this.noAutoOpen) {
			return;
		}
		this.toggleOpen(true);
	},

	__onMouseUp: function() {
		if (this.noAutoOpen) {
			return;
		}
		this.toggleOpen(false);
	},

	__onOpened: function() {
		var opener = this.getOpenerElement();
		if (!opener) {
			return;
		}
		opener.setAttribute('aria-expanded', 'true');
		opener.setAttribute('active', 'true');
	},

	__onClosed: function() {
		var opener = this.getOpenerElement();
		if (!opener) {
			return;
		}
		opener.setAttribute('aria-expanded', 'false');
		opener.removeAttribute('active');
	}

};
