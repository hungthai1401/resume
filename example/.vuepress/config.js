module.exports = {
  base: '/vuepress-theme-resume/example/dist/',
  dest: 'example/dist',
  theme: 'resume',
  title: 'Thai Nguyen Hung Resume',
  themeConfig: {
    sidebar: [
      {
        collapsable: false,
        children: ['/']
      }
    ]
  }
}
