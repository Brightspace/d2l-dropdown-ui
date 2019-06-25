import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
import 'd2l-polymer-behaviors/d2l-dom.js';
import 'd2l-polymer-behaviors/d2l-dom-focus.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-content-styles">
	<template>
		<style>

			:host {
				box-sizing: border-box;
				color: var(--d2l-color-ferrite);
				display: none;
				left: 0;
				position: absolute;
				text-align: left;
				top: calc(100% + var(--d2l-dropdown-verticaloffset, 20px));
				width: 100%;
				z-index: 1000; /* position on top of floating buttons */
			}

			:host([opened]) {
				display: inline-block;
			}

			:host([opened]) {
				-webkit-animation: d2l-dropdown-animation 300ms ease;
				animation: d2l-dropdown-animation 300ms ease;
			}

			:host([opened-above]) {
				bottom: calc(100% + var(--d2l-dropdown-verticaloffset, 20px));
				top: auto;
				-webkit-animation: d2l-dropdown-above-animation 300ms ease;
				animation: d2l-dropdown-above-animation 300ms ease;
			}

			:host .d2l-dropdown-content-pointer {
				position: absolute;
				display: inline-block;
				clip: rect(-5px, 21px, 8px, -7px);
				top: -7px;
				left: calc(50% - 7px);
				z-index: 1;
			}

			:host .d2l-dropdown-content-pointer > div {
				background-color: #ffffff;
				border: 1px solid var(--d2l-color-mica);
				border-radius: 0.1rem;
				box-shadow: -4px -4px 12px -5px rgba(86, 90, 92, .2);
				height: 16px;
				width: 16px;
				transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
			}

			:host([opened-above]) .d2l-dropdown-content-pointer {
				top: auto;
				clip: rect(9px, 21px, 22px, -3px);
				bottom: -8px;
			}

			:host([opened-above]) .d2l-dropdown-content-pointer > div {
				box-shadow: 4px 4px 12px -5px rgba(86, 90, 92, .2);
			}

			:host([no-pointer]) .d2l-dropdown-content-pointer {
				display: none;
			}

			:host .d2l-dropdown-content-position {
				border-radius: 0.3rem;
				display: inline-block;
				position: absolute;
			}

			:host .d2l-dropdown-content-width {
				background-color: #ffffff;
				border: 1px solid var(--d2l-color-mica);
				border-radius: 0.3rem;
				box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.15);
				box-sizing: border-box;
				min-width: 70px;
				max-width: 370px;
				position: absolute;
				width: 100vw;
			}

			:host([opened-above]) .d2l-dropdown-content-width {
				bottom: 100%;
			}

			:host .d2l-dropdown-content-container {
				box-sizing: border-box;
				display: inline-block;
				max-width: 100%;
				outline: none;
				padding: 1rem;
			}

			:host([no-padding]) .d2l-dropdown-content-container {
				padding: 0;
			}

			:host .d2l-dropdown-content-top,
			:host .d2l-dropdown-content-bottom {
				height: 5px;
				position: relative;
				z-index: 2;
			}

			:host .d2l-dropdown-content-top {
				border-top-left-radius: 0.3rem;
				border-top-right-radius: 0.3rem;
			}

			:host .d2l-dropdown-content-bottom {
				border-bottom-left-radius: 0.3rem;
				border-bottom-right-radius: 0.3rem;
			}

			:host .d2l-dropdown-content-top-scroll {
				box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.05);
			}

			:host .d2l-dropdown-content-bottom-scroll {
				box-shadow: 0 -3px 3px 0 rgba(0, 0, 0, 0.05);
			}

			:host-context(.d2l-dark-mode) {
				color: var(--d2l-color-mica);
			}
			:host-context(.d2l-dark-mode) .d2l-dropdown-content-width {
				background-color: var(--d2l-color-dark-mode-2);
				border: 1px solid var(--d2l-color-dark-mode-2);
			}
			:host-context(.d2l-dark-mode) .d2l-dropdown-content-pointer > div {
				background-color: var(--d2l-color-dark-mode-2);
				border: 1px solid var(--d2l-color-dark-mode-2);
			}
			:host-context(.d2l-dark-mode) .d2l-dropdown-content-top-scroll {
				box-shadow: 0 3px 3px 0 #000000;
			}
			:host-context(.d2l-dark-mode) .d2l-dropdown-content-bottom-scroll {
				box-shadow: 0 -3px 3px 0 #000000;
			}

			:host-context([dir="rtl"]) {
				left: auto;
				right: 0;
				text-align: right;
			}
			:host(:dir(rtl)) {
				left: auto;
				right: 0;
				text-align: right;
			}

			@keyframes d2l-dropdown-animation {
				0% { transform: translate(0,-10px); opacity: 0; }
				100% { transform: translate(0,0); opacity: 1; }
			}
			@keyframes d2l-dropdown-above-animation {
				0% { transform: translate(0,10px); opacity: 0; }
				100% { transform: translate(0,0); opacity: 1; }
			}
			@-webkit-keyframes d2l-dropdown-animation {
				0% { -webkit-transform: translate(0,-10px); opacity: 0; }
				100% { -webkit-transform: translate(0,0); opacity: 1; }
			}
			@-webkit-keyframes d2l-dropdown-above-animation {
				0% { -webkit-transform: translate(0,10px); opacity: 0; }
				100% { -webkit-transform: translate(0,0); opacity: 1; }
			}

		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};

/** @polymerBehavior */
D2L.PolymerBehaviors.DropdownContentBehavior = {

	hostAttributes: {
		'd2l-dropdown-content': true
	},

	/**
		* Triggered when dropdown content is opened/shown.
	 * @event d2l-dropdown-open
	 */

	/**
	 * Triggered when dropdown content is closed/hidden.
	 * @event d2l-dropdown-close
	 */
	properties: {

		/**
		 * Minimum width of content container (in pixels).
		 */
		minWidth: {
			type: Number,
			observer: '__minWidthChanged',
			reflectToAttribute: true
		},

		/**
		 * Maximum width of content container (in pixels).
		 */
		maxWidth: {
			type: Number,
			observer: '__maxWidthChanged',
			reflectToAttribute: true
		},

		/**
		 * Whether to automatically close the dropdown (ex. when focus is lost).
		 */
		noAutoClose: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Whether to automatically fit the content container to the available height.
		 */
		noAutoFit: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Whether to automatically apply focus to first focusable element in content.
		 */
		noAutoFocus: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Whether to apply padding to the content container.
		 */
		noPadding: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Whether to display the pointer above/below the content, pointing to the opener.
		 */
		noPointer: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Alignment of the dropdown content to the opener. Valid values are `start`, `end`. If
		 * not set, will attempt to position so content container is centered under/over opener.
		 */
		align: {
			type: String,
			reflectToAttribute: true
		},

		/**
		 * Optionally provide boundaries where the dropdown will appear. Valid values are `above`,
		 * `below`, `left`, or `right`.
		 */
		boundary: Object,

		/**
		 * Whether the dropdown content is open or not.
		 */
		opened: {
			type: Boolean,
			observer: '__openedChanged',
			reflectToAttribute: true
		},

		/**
		 * Private.
		 */
		openedAbove: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Whether to render the content immediately. By default, the content rendering
		 * is deferred.
		 */
		renderContent: Boolean,

		/**
		 * Private.
		 */
		verticalOffset: {
			type: String,
			observer: '__verticalOffsetChanged'
		}

	},

	__content: null,

	__isRTL: false,

	__previousFocusableAncestor: null,

	__mutationObserver: null,

	__applyFocus: true,

	ready: function() {
		this.__onResize = this.__onResize.bind(this);
		this.__onAutoCloseFocus = this.__onAutoCloseFocus.bind(this);
		this.__onAutoCloseClick = this.__onAutoCloseClick.bind(this);
	},

	attached: function() {
		afterNextRender(this, function() {

			if (this.verticalOffset !== undefined) {
				this.__verticalOffsetChanged(this.verticalOffset);
			}

			this.__content = this.$$('.d2l-dropdown-content-container');

			window.addEventListener('resize', this.__onResize);
			document.body.addEventListener('focus', this.__onAutoCloseFocus, true);
			document.body.addEventListener('click', this.__onAutoCloseClick, true);

			this.listen(this, 'keyup', '__onKeyUp');
			this.listen(this, 'd2l-dropdown-close', '__onClose');
			this.listen(this, 'd2l-dropdown-position', '__toggleScrollStyles');
			this.listen(this.__content, 'scroll', '__toggleScrollStyles');
		}.bind(this));
	},

	detached: function() {
		window.removeEventListener('resize', this.__onResize);
		document.body.removeEventListener('focus', this.__onAutoCloseFocus, true);
		document.body.removeEventListener('click', this.__onAutoCloseClick, true);
		this.unlisten(this, 'keyup', '__onKeyUp');
		this.unlisten(this, 'd2l-dropdown-close', '__onClose');
		this.unlisten(this, 'd2l-dropdown-position', '__toggleScrollStyles');
		this.unlisten(this.__content, 'scroll', '__toggleScrollStyles');
	},

	/**
	 * Closes/hides the dropdown.
	 */
	close: function() {
		this.opened = false;
	},

	/**
	 * Opens/shows the dropdown.
	 * @param {Boolean} applyFocus Whether focus should be automatically move to first focusable upon opening.
	 */
	open: function(applyFocus) {
		this.__applyFocus = applyFocus !== undefined ? applyFocus : true;
		this.opened = true;
	},

	/**
	 * Synchronously stamps and attaches the content into the DOM. By default, rendering of the
	 * content into the DOM is deferred as a performance optimization, so if access to the content
	 * DOM is required (for example by calling `document.querySelector`) before opening the dropdown,
	 * `forceRender` may be used.
	 */
	forceRender: function() {
		if (!this.renderContent) {
			this.renderContent = true;
		}
		var domIf = this.$$('dom-if') || this.$$('template');
		domIf.render();
	},

	/**
	 * Toggles the opened/closed state of the dropdown.  If closed, it will open, and vice versa.
	 * @param {Boolean} applyFocus Whether focus should be automatically moved to first focusable upon opening.
	 */
	toggleOpen: function(applyFocus) {
		if (this.opened) {
			this.close();
		} else {
			this.open(applyFocus);
		}
	},

	/**
	 * Private.
	 */
	scrollTo: function(scrollTop) {
		var content = this.__content;
		if (content) {
			if (typeof scrollTop === 'number') {
				content.scrollTop = scrollTop;
			}
			return content.scrollTop;
		}
	},

	/**
	 * Private.
	 */
	height: function() {
		return this.__content && this.__content.offsetHeight;
	},

	__getContentContainer: function() {
		return this.$$('.d2l-dropdown-content-container');
	},

	__getPositionContainer: function() {
		return this.$$('.d2l-dropdown-content-position');
	},

	__getWidthContainer: function() {
		return this.$$('.d2l-dropdown-content-width');
	},

	__getOpener: function() {
		var opener = D2L.Dom.findComposedAncestor(this, function(elem) {
			if (elem.isDropdownOpener) {
				return true;
			}
		});
		return opener;
	},

	__minWidthChanged: function(newValue) {
		if (!newValue) {
			return;
		}
		this.__getWidthContainer().style.minWidth = newValue + 'px';
		this.__getContentContainer().style.minWidth = newValue + 'px';
	},

	__maxWidthChanged: function(newValue) {
		if (!newValue) {
			return;
		}
		this.__getWidthContainer().style.maxWidth = newValue + 'px';
	},

	__onAutoCloseFocus: function() {
		/* timeout needed to work around lack of support for relatedTarget */
		setTimeout(function() {
			if (!this.opened
				|| this.noAutoClose
				|| !document.activeElement
				|| document.activeElement === this.__previousFocusableAncestor
				|| document.activeElement === document.body) {
				return;
			}

			var activeElement = D2L.Dom.Focus.getComposedActiveElement();

			if (D2L.Dom.isComposedAncestor(this, activeElement)
				|| D2L.Dom.isComposedAncestor(this.__getOpener(), activeElement)) {
				return;
			}

			this.opened = false;
		}.bind(this), 0);
	},

	__onAutoCloseClick: function(e) {
		if (!this.opened || this.noAutoClose) {
			return;
		}
		var content = this.__getContentContainer();
		if (D2L.Dom.isComposedAncestor(content, dom(e).rootTarget)) {
			return;
		}
		var opener = this.__getOpener();
		if (D2L.Dom.isComposedAncestor(opener.getOpenerElement(), dom(e).rootTarget)) {
			return;
		}

		this.opened = false;
	},

	__onClose: function(e) {

		if (e.target !== this || !document.activeElement) {
			return;
		}

		var activeElement = D2L.Dom.Focus.getComposedActiveElement();

		if (!D2L.Dom.isComposedAncestor(this, activeElement)) {
			return;
		}

		var opener = this.__getOpener();
		opener.getOpenerElement().focus();

	},

	__onKeyUp: function(e) {
		if (!this.opened) {
			return;
		}
		if (e.keyCode === 27) {
			// escape
			this.opened = false;
		}
	},

	__onResize: function() {
		if (!this.opened) {
			return;
		}
		this.__position();
	},

	__openedChanged: function(newValue) {

		this.__previousFocusableAncestor =
			newValue === true
				? D2L.Dom.Focus.getPreviousFocusableAncestor(this, false, false)
				: null;

		this.__isRTL = (getComputedStyle(this).direction === 'rtl');

		var doOpen = function() {

			var content = this.__getContentContainer();

			if (!this.noAutoFit) {
				content.scrollTop = 0;
			}

			this.__position();

			if (!this.noAutoFocus && this.__applyFocus) {
				var focusable = D2L.Dom.Focus.getFirstFocusableDescendant(this);
				if (focusable) {
					// bumping this to the next frame is required to prevent IE/Edge from crazily invoking click on the focused element
					requestAnimationFrame(function() {
						focusable.focus();
					});
				} else {
					content.setAttribute('tabindex', '-1');
					content.focus();
				}
			}

			this.fire('d2l-dropdown-open');

		}.bind(this);

		if (newValue) {

			if (!this.renderContent) {
				this.forceRender();
			}

			doOpen();

			if (!this.noAutoFit) {
				if (!this.__mutationObserver) {
					this.__mutationObserver = new MutationObserver(function() {
						this.__toggleOverflowY();
					}.bind(this));
				}
				var config = { subtree: true, childList: true };
				this.__mutationObserver.observe(this.__getContentContainer(), config);
			}

		} else {

			this.fire('d2l-dropdown-close');

			if (!this.noAutoFit && this.__mutationObserver) {
				this.__mutationObserver.disconnect();
			}

		}

	},

	__position: function(ignoreVertical, contentRect) {

		var opener = this.__getOpener();
		if (!opener) {
			return;
		}
		var target = opener.getOpenerElement();
		if (!target) {
			return;
		}

		var content = this.__getContentContainer();
		var position = this.__getPositionContainer();
		var widthContainer = this.__getWidthContainer();

		if (!this.noAutoFit) {
			content.style.maxHeight = 'none';
		}

		var adjustPosition = function() {

			var targetRect = target.getBoundingClientRect();
			contentRect = contentRect ? contentRect : content.getBoundingClientRect();

			var spaceAround = {
				above: targetRect.top - 50,
				below: window.innerHeight - targetRect.bottom - 80,
				left: targetRect.left - 20,
				right: document.documentElement.clientWidth - targetRect.right - 15
			};

			if (this.boundary) {
				spaceAround.above = this.boundary.above >= 0 ? Math.min(spaceAround.above, this.boundary.above) : spaceAround.above;
				spaceAround.below = this.boundary.below >= 0 ? Math.min(spaceAround.below, this.boundary.below) : spaceAround.below;
				spaceAround.left = this.boundary.left >= 0 ? Math.min(spaceAround.left, this.boundary.left) : spaceAround.left;
				spaceAround.right = this.boundary.right >= 0 ? Math.min(spaceAround.right, this.boundary.right) : spaceAround.right;
			}

			var spaceRequired = {
				height: contentRect.height + 20,
				width: contentRect.width
			};

			var maxHeight;

			if (!ignoreVertical) {
				if (
					(spaceAround.below < spaceRequired.height)
					&& (
						(spaceAround.above > spaceRequired.height)
						|| (spaceAround.above > spaceAround.below)
					)
				) {
					this.openedAbove = true;
				} else {
					this.openedAbove = false;
				}
			}

			if (this.openedAbove) {
				maxHeight = Math.floor(spaceAround.above);
			} else {
				maxHeight = Math.floor(spaceAround.below);
			}

			if ((this.align === 'start' && !this.__isRTL) || (this.align === 'end' && this.__isRTL)) {
				spaceAround.left = 0;
			} else if ((this.align === 'start' && this.__isRTL) || (this.align === 'end' && !this.__isRTL)) {
				spaceAround.right = 0;
			}

			var centerDelta = contentRect.width - targetRect.width;
			var contentXAdjustment = centerDelta / 2;
			if (centerDelta > 0) {
				// content wider than target, so slide left/right as needed
				if (!this.__isRTL) {
					if (spaceAround.left > contentXAdjustment && spaceAround.right > contentXAdjustment) {
						// center with target
						position.style.left = (contentXAdjustment * -1) + 'px';
					} else if (spaceAround.left < contentXAdjustment) {
						// slide content right (not enough space to center)
						position.style.left = ((spaceAround.left) * -1) + 'px';
					} else if (spaceAround.right < contentXAdjustment) {
						// slide content left (not enough space to center)
						position.style.left = ((contentRect.width - targetRect.width) * -1) + spaceAround.right + 'px';
					}
				} else {
					if (spaceAround.left > contentXAdjustment && spaceAround.right > contentXAdjustment) {
						// center with target
						position.style.right = (contentXAdjustment * -1) + 'px';
					} else if (spaceAround.left < contentXAdjustment) {
						// slide content right (not enough space to center)
						position.style.right = ((contentRect.width - targetRect.width) * -1) + spaceAround.left + 'px';
					} else if (spaceAround.right < contentXAdjustment) {
						// slide content left (not enough space to center)
						position.style.right = ((spaceAround.right) * -1) + 'px';
					}
				}
			} else {
				// content narrower than target, so slide in
				if (!this.__isRTL) {
					position.style.left = (contentXAdjustment * -1) + 'px';
				} else {
					position.style.right = (contentXAdjustment * -1) + 'px';
				}
			}

			if (!this.noAutoFit && maxHeight && maxHeight > 0) {
				content.style.maxHeight = maxHeight + 'px';
				this.__toggleOverflowY(contentRect.height > maxHeight);
			}

			this.fire('d2l-dropdown-position');

		}.bind(this);

		/* don't let dropdown content horizontally overflow viewport */
		widthContainer.style.width = '';
		content.style.width = '';

		var width = window.innerWidth - 40;
		if (width > content.scrollWidth) {
			width = content.scrollWidth;
		}
		/* add 2 to width since scrollWidth does not include border */
		widthContainer.style.width = width + 20 + 'px';
		/* set width of content too so IE will render scroll inside border */
		content.style.width = width + 18 + 'px';

		adjustPosition();

	},

	__toggleOverflowY: function(isOverflowing) {
		if (!this.__content || !this.__content.style || !this.__content.style.maxHeight) {
			return;
		}

		var maxHeight = parseInt(this.__content.style.maxHeight, 10);
		if (!maxHeight) {
			return;
		}

		if (isOverflowing || this.__content.scrollHeight > maxHeight) {
			this.__content.style.overflowY = 'auto';
		} else {
			/* needed for IE */
			this.__content.style.overflowY = 'hidden';
		}
	},

	__toggleScrollStyles: function() {
		var topCap = this.$$('.d2l-dropdown-content-top');
		var bottomCap = this.$$('.d2l-dropdown-content-bottom');
		if (this.__content.scrollTop === 0) {
			if (topCap.classList.contains('d2l-dropdown-content-top-scroll')) {
				topCap.classList.remove('d2l-dropdown-content-top-scroll');
			}
		} else {
			if (!topCap.classList.contains('d2l-dropdown-content-top-scroll')) {
				topCap.classList.add('d2l-dropdown-content-top-scroll');
			}
		}

		/* scrollHeight incorrect in IE by 4px second time opened */
		if (this.__content.scrollHeight - (this.__content.scrollTop + this.__content.clientHeight) < 5) {
			if (bottomCap.classList.contains('d2l-dropdown-content-bottom-scroll')) {
				bottomCap.classList.remove('d2l-dropdown-content-bottom-scroll');
			}
		} else {
			if (!bottomCap.classList.contains('d2l-dropdown-content-bottom-scroll')) {
				bottomCap.classList.add('d2l-dropdown-content-bottom-scroll');
			}
		}
	},

	__verticalOffsetChanged: function(newValue) {

		if (!this.isAttached) {
			return;
		}

		newValue = parseInt(newValue);

		if (isNaN(newValue)) {
			this.updateStyles({'--d2l-dropdown-verticaloffset': '20px'});
		} else {
			this.updateStyles({'--d2l-dropdown-verticaloffset': newValue + 'px'});
		}

	}

};
