///////////////////////////
// JS IMPORTS
//////////////////////////

/* Reveal config and plugins */
import './reveal-dependencies-config.js' // need config before importing plugins
import './reveal-dependencies.js'
import './reveal-config.js';

/////////////////////////
// STYLE IMPORTS
////////////////////////

// Reveal js styles and theme
import 'stylesPath/main.scss';


// if Font Awesome backend is css and local, then compile necessary .scss files
if (FA_CSS_LOCAL) {
	require('stylesPath/_font-awesome-imports.scss')
}

// 3. On Reveal.js ready event, copy header/footer <div> into each `.slide-background` <div>
var header = document.getElementById('header');
if ( window.location.search.match( /print-pdf/gi ) ) {
	Reveal.addEventListener( 'ready', function( event ) {
		document.getElementsByClassName('slide-background')[0].appendChild(header)

	});
}
else {
	document.getElementsByClassName('reveal')[0].appendChild(header)
}
