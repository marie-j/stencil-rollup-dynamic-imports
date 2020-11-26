import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';
import resolve from '@rollup/plugin-node-resolve';

export default [{
    input: './src/index.js',
    plugins: [
        dynamicImportVars(),
        resolve(),
    ],
    output: {
        dir: './dist/esm',
        format: 'es',
        sourcemap: true,
      },
}]
