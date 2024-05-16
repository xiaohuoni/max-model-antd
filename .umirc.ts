import { defineConfig } from '@umijs/max';

export default defineConfig({
  routes: [
    {
      title: 'site.title',
      path: '/',
      icon: 'PlaySquareFilled',
      component: 'index',
      name: 'index',
    },
    {
      path: '/users',
      icon: 'SmileFilled',
      component: 'users',
      name: 'users',
      wrappers: ['@/wrappers/foo', '@/wrappers/bar'],
    },
    {
      path: '/antd',
      icon: 'SmileFilled',
      component: 'antd',
      name: 'antd',
    },
    {
      path: '/accessAllow',
      icon: 'SmileFilled',
      component: 'users',
      name: 'Allow',
      access: 'canReadFoo',
    },
    {
      path: '/accessDeny',
      icon: 'SmileFilled',
      component: 'users',
      name: 'Deny',
      access: 'canReadBar',
    },
    { path: '/app1/*', icon: 'SmileFilled', name: 'app1', microApp: 'app1' },
    {
      path: '/data-flow',
      component: 'data-flow',
      name: 'data-flow',
      icon: 'SmileFilled',
      routes: [
        {
          path: '/data-flow/use-model',
          component: 'use-model',
          name: 'use-model',
          icon: 'SwitcherFilled',
        },
        {
          path: '/data-flow/dva',
          component: 'dva',
          name: 'dva',
          icon: 'TagFilled',
        },
      ],
    },
    {
      path: '/history',
      component: 'history',
    },
  ],
  antd: {
    style: 'less',
    // valid for antd5.0 only
    theme: {
      token: {
        colorPrimary: '#1DA57A',
      },
    },
    styleProvider: {
      hashPriority: 'high',
      legacyTransformer: true,
    },
    // dark: true,
    compact: true,
    /**
     * antd@5.1.0 ~ 5.2.3 仅支持 appConfig: {}, 来启用 <App /> 组件;
     * antd@5.3.0 及以上才支持 appConfig: { // ... } 来添加更多 App 配置项;
     */
    appConfig: {
      message: {
        maxCount: 3,
      },
    },
  },
  initialState: {
    loading: '@/components/Loading',
  },
  access: {},
  dva: {},
  model: {},
  analytics: {
    baidu: 'test',
  },
  moment2dayjs: {},
  mock: {
    include: ['pages/**/_mock.ts'],
  },
  layout: {
    title: 'Ant Design Pro',
  },
  mfsu: {
    // esbuild: true,
  },
  request: {},
  locale: {
    title: true,
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'app1',
          entry: '//localhost:8001/app1',
          props: {
            autoSetLoading: true,
          },
        },
      ],
    },
  },
  tailwindcss: {},
  // vite: {}
  // esmi: { cdnOrigin: 'https://npmcore-pre.alipay.com' },
  // lowImport: {},
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  icons: {
    include: ['local:rice', 'local:logo/umi', 'ant-design:fire-twotone'],
  },
});
