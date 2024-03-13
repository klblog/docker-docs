import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CV工程师",
  description: "技术博客",
  srcDir: './src',
  // 还需要再服务器上配置路由匹配重定向
  cleanUrls: true, 
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/docker/docker-docs' }
    ],

    sidebar: [
      {
        text: 'Docker',
        items: [
          { text: '1.基本概念', link: '/docker/docker-docs' },
          { text: '2.基本应用', link: '/docker/docker-application' },
          // { text: '3.镜像优化', link: '/docker/docker-image' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lik778' }
    ]
  },
  rewrites: {
    "package/:pkg/(.*)": ":pkg/(.*)",
  },
  base: "/docs/"
})
