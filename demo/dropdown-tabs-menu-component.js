import '@polymer/polymer/polymer-legacy.js';
import 'd2l-tabs/d2l-tabs.js';
import 'd2l-menu/d2l-menu.js';
import '../d2l-dropdown.js';
import '../d2l-dropdown-tabs.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-dropdown-tabs-menu-demo">
	<template strip-whitespace="">
		<d2l-dropdown>
			<button class="d2l-dropdown-opener">Open it!</button>
			<d2l-dropdown-tabs min-width="175" max-width="300">
				<d2l-tabs>
					<d2l-tab-panel text="first">first content</d2l-tab-panel>
					<d2l-tab-panel text="second">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					</d2l-tab-panel>
					<d2l-tab-panel text="third">
						<d2l-menu label="Astronomy">
							<d2l-menu-item text="Introduction" id="first-item"></d2l-menu-item>
							<d2l-menu-item text="Searching for the Heavens "></d2l-menu-item>
							<d2l-menu-item text="The Solar System">
								<d2l-menu>
									<d2l-menu-item text="Formation"></d2l-menu-item>
									<d2l-menu-item text="Modern Solar System"></d2l-menu-item>
									<d2l-menu-item text="Future Solar System"></d2l-menu-item>
									<d2l-menu-item text="The Planets">
										<d2l-menu>
											<d2l-menu-item text="Mercury"></d2l-menu-item>
											<d2l-menu-item text="Venus"></d2l-menu-item>
											<d2l-menu-item text="Earth"></d2l-menu-item>
											<d2l-menu-item text="Mars"></d2l-menu-item>
											<d2l-menu-item text="Jupiter"></d2l-menu-item>
											<d2l-menu-item text="Saturn"></d2l-menu-item>
											<d2l-menu-item text="Uranus"></d2l-menu-item>
											<d2l-menu-item text="Neptune"></d2l-menu-item>
											<d2l-menu-item text="Dwarf Planets"></d2l-menu-item>
										</d2l-menu>
									</d2l-menu-item>
									<d2l-menu-item text="The Sun"></d2l-menu-item>
									<d2l-menu-item text="Solar &amp; Lunar Eclipses"></d2l-menu-item>
									<d2l-menu-item text="Meteors &amp; Meteorites"></d2l-menu-item>
									<d2l-menu-item text="Asteroids"></d2l-menu-item>
									<d2l-menu-item text="Comets"></d2l-menu-item>
								</d2l-menu>
							</d2l-menu-item>
							<d2l-menu-item text="Stars &amp; Galaxies">
								<d2l-menu>
									<d2l-menu-item text="What is a Star?"></d2l-menu-item>
									<d2l-menu-item text="Lifecycle of a Star"></d2l-menu-item>
									<d2l-menu-item text="Binaries &amp; Multiples"></d2l-menu-item>
									<d2l-menu-item text="Star Clusters"></d2l-menu-item>
									<d2l-menu-item text="Star Death">
										<d2l-menu>
											<d2l-menu-item text="Supernovae"></d2l-menu-item>
											<d2l-menu-item text="Black Holes"></d2l-menu-item>
										</d2l-menu>
									</d2l-menu-item>
									<d2l-menu-item text="Star Clusters"></d2l-menu-item>
									<d2l-menu-item text="Galaxies">
										<d2l-menu>
											<d2l-menu-item text="Classification"></d2l-menu-item>
											<d2l-menu-item text="Birth &amp; Evolution"></d2l-menu-item>
											<d2l-menu-item text="Spiral"></d2l-menu-item>
											<d2l-menu-item text="Elliptical"></d2l-menu-item>
											<d2l-menu-item text="Lenticular"></d2l-menu-item>
											<d2l-menu-item text="Irregular"></d2l-menu-item>
											<d2l-menu-item text="Active &amp; Radio"></d2l-menu-item>
											<d2l-menu-item text="Quasars"></d2l-menu-item>
											<d2l-menu-item text="Galaxy Clusters"></d2l-menu-item>
										</d2l-menu>
									</d2l-menu-item>
								</d2l-menu>
							</d2l-menu-item>
							<d2l-menu-item text="The Night Sky">
								<d2l-menu>
									<d2l-menu-item text="Constellations"></d2l-menu-item>
									<d2l-menu-item text="Mapping the Heavens"></d2l-menu-item>
									<d2l-menu-item text="Reading Star Maps"></d2l-menu-item>
									<d2l-menu-item text="Telescopes"></d2l-menu-item>
								</d2l-menu>
							</d2l-menu-item>
							<d2l-menu-item text="The Universe" id="last-item"></d2l-menu-item>
						</d2l-menu>
					</d2l-tab-panel>
					<d2l-tab-panel text="fourth">fourth content</d2l-tab-panel>
					<d2l-tab-panel text="fith">fith content</d2l-tab-panel>
					<d2l-tab-panel text="sixth">sixth content</d2l-tab-panel>
				</d2l-tabs>
			</d2l-dropdown-tabs>
		</d2l-dropdown>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-dropdown-tabs-menu-demo'
});
