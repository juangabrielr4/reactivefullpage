import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';


export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [resolve(),
    commonjs({
      include: 'node_modules', // Default: undefined
    }),
    babel({
      presets: ["@babel/preset-env","@babel/preset-react"],
      plugins: [
      ],
      exclude: 'node_modules/**',
    })
  ]
};
