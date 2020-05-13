module.exports = function(api) {
  api.cache.never();
  return {
    plugins: [
      // Explicit
      '@babel/plugin-transform-runtime',
      '@babel/proposal-object-rest-spread',
      // Stage 2
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      '@babel/plugin-proposal-function-sent',
      '@babel/plugin-proposal-export-namespace-from',
      '@babel/plugin-proposal-numeric-separator',
      '@babel/plugin-proposal-throw-expressions',
      // Stage 3
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
      ['@babel/plugin-proposal-class-properties', { loose: false }],
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-proposal-private-methods',
    ],
    presets: [
      ["@babel/preset-env", { modules: 'cjs', targets: { node: 'current' }, }],
      '@babel/preset-react',
    ],
    overrides: [{
      test: ['./src/**/*.ts', './src/**/*.tsx'],
      presets: [
        "@babel/preset-typescript",
        ["@babel/preset-env", { modules: 'cjs', targets: { node: 'current' }, }],
        '@babel/preset-react',
      ],
    }],
  };
};
