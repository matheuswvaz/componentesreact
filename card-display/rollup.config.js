import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

const packageJson = require('./package.json');

export default {
  input: 'src/index.js',
  output: [
    {
      file: packageJson.main, // dist/index.js (CommonJS)
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module, // dist/index.es.js (ES Module)
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolve módulos de terceiros no node_modules
    commonjs(), // Converte CommonJS para ES6
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    postcss({
      plugins: [autoprefixer(), cssnano()], // Adiciona prefixos de vendor e minimiza CSS
      extract: true, // Extrai o CSS para um arquivo separado
      modules: false, // Desabilita CSS Modules (se você não estiver usando)
    }),
  ],
  // Garante que as peerDependencies não sejam empacotadas no bundle
  external: [...Object.keys(packageJson.peerDependencies || {})],
};