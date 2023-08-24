// import mobileNav from './modules/mobile-nav.js';
// mobileNav();


// import autoCompleteFunc from './modules/autoComplete';
// autoCompleteFunc();

// import { easepick } from '@easepick/bundle';
// import { TimePlugin } from '@easepick/time-plugin';

// import { easepick } from '@easepick/core';
// import { TimePlugin } from '@easepick/time-plugin';

import { easepick, TimePlugin } from '@easepick/bundle';


const picker = new easepick.create({
	element: document.getElementById('datePicket'),
	css: [
		'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
		'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
	],
	format: 'HH:mm, DD/MM/YY',
	plugins: [TimePlugin],
});
