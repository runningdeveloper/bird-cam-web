import { Config } from '@stencil/core';
import dotenv from 'dotenv';
import replace from '@rollup/plugin-replace';
// https://stenciljs.com/docs/config

dotenv.config()

export const config: Config = {
  globalScript: 'src/global/app.ts',
  globalStyle: 'src/global/app.css',
  taskQueue: 'async',
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
  rollupPlugins: {
    before: [
      // Plugins injected before rollupNodeResolve()
      replace({ _prefix_: process.env.PREFIX })
    ],
    after: [
      // Plugins injected before rollupNodeResolve()
      replace({ _prefix_: process.env.PREFIX })
    ]
  }
};
