const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');
const sassPlugin = require('esbuild-plugin-sass');

esbuild
    .build({
        entryPoints: ['src/index.js'],
        outfile: 'dist/bundle.js',
        bundle: true,
        sourcemap: true,
        minify: true,
        platform: 'node',
        target: ['node14'],
        plugins: [nodeExternalsPlugin(), sassPlugin()],
    })
    .catch(() => process.exit(1));