/**
`d2l-dropdown-content`
Polymer-based web component for dropdown generic content.

@demo demo/dropdown.html Generic Content
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '../@polymer/polymer/polymer-legacy.js';

import './d2l-dropdown-content-behavior.js';
import { Polymer } from '../@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-content">
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
	is: 'd2l-dropdown-content',

	behaviors: [
		D2L.PolymerBehaviors.DropdownContentBehavior
	]

});
