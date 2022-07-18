// import adapter from '@sveltejs/adapter-auto';

import preprocess from "svelte-preprocess";

const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}
/*
//@type {import('@sveltejs/kit').Config}
const config = {
	kit: {
		adapter: adapter()
	}
};
*/

export default config;
