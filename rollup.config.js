// import commonjs from '@rollup/plugin-commonjs';
import eslint from '@rollup/plugin-eslint';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

import pkg from './package.json';

const INPUT_FILE = 'src/main.js';

export default [
  // browser-friendly UMD build
  {
    input: INPUT_FILE,
    output: [
      {
        file: pkg.browser,
        format: 'umd',
        name: 'rest-url-parser',
      },
      { file: pkg.unpkg, format: 'iife' },
    ],
    plugins: [
      eslint(),
      // nodeResolve(),
      // commonjs(),
      terser(),
    ],
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: INPUT_FILE,
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' },
    ],
    plugins: [eslint()],
  },
];
