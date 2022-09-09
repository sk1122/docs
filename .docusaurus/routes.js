import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '36b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'cfe'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '874'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '083'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '5cc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '63c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '2ca'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '515'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '9a1'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '1d3'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'd6e'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '9d6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'be9'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '1c0'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '48b'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '7a7'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '8a3'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'e28'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '096'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', 'e48'),
    routes: [
      {
        path: '/api',
        component: ComponentCreator('/api', '0ef'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-fetcch-x-id',
        component: ComponentCreator('/api/create-fetcch-x-id', 'a71'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-payment-request',
        component: ComponentCreator('/api/create-payment-request', '6b2'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/destroy-fetcch-x-id',
        component: ComponentCreator('/api/destroy-fetcch-x-id', '0fd'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-payment-payment-requests-sent-by-a-user',
        component: ComponentCreator('/api/get-payment-payment-requests-sent-by-a-user', 'a58'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-payment-requests',
        component: ComponentCreator('/api/get-payment-requests', '517'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/list-fetcch-x-i-ds',
        component: ComponentCreator('/api/list-fetcch-x-i-ds', 'e9e'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/partial-update-fetcch-x-id',
        component: ComponentCreator('/api/partial-update-fetcch-x-id', '609'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/retreive-single-fetcch-x-id',
        component: ComponentCreator('/api/retreive-single-fetcch-x-id', '4ba'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-fetcch-x-id',
        component: ComponentCreator('/api/update-fetcch-x-id', 'e4a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b63'),
    routes: [
      {
        path: '/docs/category/fetcch-bridge',
        component: ComponentCreator('/docs/category/fetcch-bridge', 'e14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/fetcchx-id',
        component: ComponentCreator('/docs/category/fetcchx-id', '749'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/open-source',
        component: ComponentCreator('/docs/category/open-source', 'dd2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/sdk',
        component: ComponentCreator('/docs/category/sdk', '129'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/sdk-1',
        component: ComponentCreator('/docs/category/sdk-1', '563'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-bridge/how-it-works',
        component: ComponentCreator('/docs/fetcch-bridge/how-it-works', 'e9a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-bridge/sdk/bridge',
        component: ComponentCreator('/docs/fetcch-bridge/sdk/bridge', '996'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-bridge/sdk/installation',
        component: ComponentCreator('/docs/fetcch-bridge/sdk/installation', '218'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/api',
        component: ComponentCreator('/docs/fetcch-x/api', '6d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/how-it-works',
        component: ComponentCreator('/docs/fetcch-x/how-it-works', '7df'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/create-id',
        component: ComponentCreator('/docs/fetcch-x/sdk/create-id', '53f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/create-payment-requests',
        component: ComponentCreator('/docs/fetcch-x/sdk/create-payment-requests', '529'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/get-id',
        component: ComponentCreator('/docs/fetcch-x/sdk/get-id', '858'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/get-payment-requests',
        component: ComponentCreator('/docs/fetcch-x/sdk/get-payment-requests', '6c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/installation',
        component: ComponentCreator('/docs/fetcch-x/sdk/installation', '716'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/open-source/fetcch-chain-data',
        component: ComponentCreator('/docs/open-source/fetcch-chain-data', '7b0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e20'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
