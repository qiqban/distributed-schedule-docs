const { description } = require('../../package')

module.exports = {
  base: '/distributed-schedule-docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'distributed-schedule-parent',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: true,
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档',
        link: '/文档/'
      },
      {
        text: '问题',
        link: '/问题/'
      },
      {
        text: '计划',
        link: '/计划/'
      },
      {
        text: 'GitHub:项目',
        link: 'https://github.com/waverLv/distributed-schedule-parent'
      },
      {
        text: 'GitHub:文档',
        link: 'https://github.com/waverLv/distributed-schedule-docs'
      },
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-auto-sidebar',
    '@vuepress/search', {
      searchMaxSuggestions: 10
    }
  ]
}
