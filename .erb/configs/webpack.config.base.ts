/**
 * Base webpack config used across other specific configs
 */

import webpack from 'webpack';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import webpackPaths from './webpack.paths';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { dependencies as externals } from '../../release/app/package.json';

export default {
  externals: [...Object.keys(externals || {})],

  stats: 'errors-only',

  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    // https://github.com/webpack/webpack/issues/1114
    library: {
      type: 'commonjs2',
    },
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    modules: [webpackPaths.srcPath, 'node_modules'],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
    }),
  ],
};
