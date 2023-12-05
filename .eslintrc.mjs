module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsx-a11y/strict',
    'plugin:@typescript-eslint/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/stylistic',
    'plugin:security/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:sonarjs/recommended',
    'plugin:unicorn/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'simple-import-sort',
    'unused-imports'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    // Eslint
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: [2, 'never'],

    // Import sorting
    'simple-import-sort/imports': 2,
    'simple-import-sort/exports': 2,

    // Typescript
    '@typescript-eslint/array-type': [2, { default: 'array-simple' }],
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-misused-promises': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/no-invalid-this': [2],
    '@typescript-eslint/no-shadow': [2],
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/consistent-type-definitions': [2, 'type'],
    '@typescript-eslint/consistent-type-imports': [
      2,
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports'
      }
    ],

    // Unicorn
    'unicorn/prevent-abbreviations': 0,
    'unicorn/no-null': 0,
    'unicorn/no-await-expression-member': 0,

    // SonarJS
    'sonarjs/no-duplicate-string': [2, { threshold: 5 }],

    // Eslint comments
    'eslint-comments/no-use': [
      2,
      {
        allow: [
          'eslint-disable',
          'eslint-disable-line',
          'eslint-disable-next-line'
        ]
      }
    ],
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-aggregating-enable': 0,
    'eslint-comments/no-duplicate-disable': 2,
    'eslint-comments/no-unlimited-disable': 2,
    'eslint-comments/no-unused-disable': 2,
    'eslint-comments/no-unused-enable': 2,

    // React
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/no-array-index-key': 2,
    'react/button-has-type': 2,
    'react/self-closing-comp': [2, { component: true, html: true }],

    // Unused import
    'unused-imports/no-unused-imports': 2,
    'unused-imports/no-unused-vars': [
      2,
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ]
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.cjs'],
      rules: {
        '@typescript-eslint/no-var-requires': 0
      }
    },
    {
      files: [
        '*.js',
        '*.jsx',
        '*.ts',
        '*.tsx',
        '*.cjs',
        '*.mjs',
        '*.mts',
        '*.cts'
      ],
      rules: {
        'simple-import-sort/imports': [
          2,
          {
            groups: [['^@?\\w'], ['^[\\w]'], ['^'], ['^\\.']]
          }
        ]
      }
    }
  ]
}
