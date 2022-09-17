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
    component: ComponentCreator('/api', '7db'),
    routes: [
      {
        path: '/api',
        component: ComponentCreator('/api', '35a'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/change-default-address',
        component: ComponentCreator('/api/change-default-address', 'a33'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/change-other-addresses',
        component: ComponentCreator('/api/change-other-addresses', 'fa5'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/create-id',
        component: ComponentCreator('/api/create-id', '0ee'),
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
        path: '/api/find-appropriate-address-to-chain',
        component: ComponentCreator('/api/find-appropriate-address-to-chain', '4b8'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-id',
        component: ComponentCreator('/api/get-id', '211'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-id-config',
        component: ComponentCreator('/api/get-id-config', '613'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-request-from-id',
        component: ComponentCreator('/api/get-request-from-id', 'fe3'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/get-requests',
        component: ComponentCreator('/api/get-requests', '255'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-id',
        component: ComponentCreator('/api/update-id', 'f79'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-id-config',
        component: ComponentCreator('/api/update-id-config', 'c3f'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      },
      {
        path: '/api/update-payment-request',
        component: ComponentCreator('/api/update-payment-request', '042'),
        exact: true,
        sidebar: "openapi-sidebar-default"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1e8'),
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
        path: '/docs/fetcch-x/sdk/get-id-config',
        component: ComponentCreator('/docs/fetcch-x/sdk/get-id-config', 'cb9'),
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
        path: '/docs/fetcch-x/sdk/get-supported-chains',
        component: ComponentCreator('/docs/fetcch-x/sdk/get-supported-chains', '07e'),
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
        path: '/docs/fetcch-x/sdk/pay',
        component: ComponentCreator('/docs/fetcch-x/sdk/pay', '9a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/update-default-address',
        component: ComponentCreator('/docs/fetcch-x/sdk/update-default-address', 'f90'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/update-id-config',
        component: ComponentCreator('/docs/fetcch-x/sdk/update-id-config', 'aba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/update-others-address',
        component: ComponentCreator('/docs/fetcch-x/sdk/update-others-address', '086'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/fetcch-x/sdk/update-payment-requests',
        component: ComponentCreator('/docs/fetcch-x/sdk/update-payment-requests', '150'),
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
