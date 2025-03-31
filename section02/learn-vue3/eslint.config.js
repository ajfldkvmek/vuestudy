import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{js,mjs,jsx,vue}'],
  },
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  skipFormatting,
  // {
  //   languageOptions: {
  //     parser: pluginVue.parser,
  //     parserOptions: {
  //       ecmaVersion: 'latest',
  //       sourceType: 'module',
  //       ecmaFeatures: {
  //         jsx: true
  //       },
  //       // API 요청 관련 오류 해결 옵션
  //       allowImportExportEverywhere: true
  //     }
  //   }
  // },
  // {
  //   // API 요청 관련 rules 추가
  //   rules: {
  //     'no-unused-vars': 'warn',
  //     'no-undef': 'error',
  //     // 'no-console': 'warn',
  //     // HTTP 요청 관련 오류를 무시하는 옵션을 추가
  //     'no-restricted-globals': 'off'
  //   }
  // }
]