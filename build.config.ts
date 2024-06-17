// eslint-disable-next-line import/no-unresolved
import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: [
    'src/',
  ],
  declaration: true,
  sourcemap: true,
  clean: true,
  externals: [
    'vue',
  ],
});
