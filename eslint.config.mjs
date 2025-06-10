import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs[ 'flat/base' ],
  ...nx.configs[ 'flat/typescript' ],
  ...nx.configs[ 'flat/javascript' ],
  {
    ignores: [ '**/dist' ]
  },
  {
    files: [ '**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx' ],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [ '^.*/eslint(\\.base)?\\.config\\.[cm]?js$' ],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: [ '*' ]
            }
          ]
        }
      ],
      'no-console': [ 'error' ],
      '@typescript-eslint/no-explicit-any': [ 'error' ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          'argsIgnorePattern': '^_',
          'caughtErrorsIgnorePattern': '^_'
        }
      ]
    }
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs'
    ],
    // Override or add rules here
    rules: {}
  }
];
