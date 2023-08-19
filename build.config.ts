import {defineBuildConfig} from 'unbuild';

export default defineBuildConfig({
  entries: ['src/index'],
  clean: true,
  declaration: true,
  externals: ['csstype'],
  rollup: {
    emitCJS: true,
    esbuild: {
      treeShaking: true,
      minify: true,
    },
  },
});
