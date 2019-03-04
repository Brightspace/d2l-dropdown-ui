import '@polymer/polymer/polymer-legacy.js';
import './d2l-dropdown-content-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-tabs">
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
	is: 'd2l-dropdown-tabs',

	behaviors: [
		D2L.PolymerBehaviors.DropdownContentBehavior
	],

	listeners: {
		'd2l-dropdown-open': '_onOpen',
		'd2l-menu-resize': '_onMenuResize',
		'd2l-tab-panel-selected': '_onTabSelected'
	},

	_onMenuResize: function(e) {
		requestAnimationFrame(function() {
			this.__position(false);
		}.bind(this));
	},

	_onOpen: function(e) {
		if (e.target !== this) {
			return;
		}
		var tabs = this.queryEffectiveChildren('[role="tablist"]');
		tabs.resize();
	},

	_onTabSelected: function() {
		var tabs = this.queryEffectiveChildren('[role="tablist"]');
		requestAnimationFrame(function() {
			this.__position(false);
		}.bind(this));
	}

});
