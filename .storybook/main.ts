import type { StorybookConfig } from '@storybook/nextjs';
import type { RuleSetRule } from 'webpack';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      "name": "@storybook/addon-essentials",
      "options": {
        "docs": false
      }
    },
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/nextjs",
    "options": {}
  },
  "staticDirs": [
    "../public"
  ],
  
  // SVG 파일을 React 컴포넌트로 처리하는 설정 추가
  webpackFinal: async (config) => {
    const fileLoaderRule = config.module?.rules?.find((rule) => {
      if (typeof rule !== 'string' && rule && typeof rule !== 'boolean' && rule.test instanceof RegExp) {
        return rule.test.test('.svg');
      }
      return false;
    });
    
    // SVG 규칙 제외 설정
    if (fileLoaderRule && typeof fileLoaderRule !== 'string' && typeof fileLoaderRule !== 'boolean') {
      fileLoaderRule.exclude = /\.svg$/;
    }
    
    // SVG 파일을 위한 새 규칙 추가
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    } as RuleSetRule);
    
    return config;
  }
};

export default config;
