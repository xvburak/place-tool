import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-netlify';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
		  postcss: true,
		}),
	  ],
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		}
	}
};

export default {
	kit: {
	  adapter: adapter()
	}
  };