module.exports = {
  base: '/',
  title: 'VuePress Classroom',
  description: 'Just learing..',

  themeConfig: {
    smoothScroll: true,
    lastUpdated: 'Updated',
    // sidebarDepth: 2,
    nav: [
      {text: 'Boilerplate', link: '/boilerplate/'},
      {text: 'Filters', link: '/filters/'},
      {text: 'Lorem', link: '/lorem/'},
    ],
    sidebar: [
      {        
        title: 'Boilerplate',
        path: '/boilerplate/',
        children: [
          '/boilerplate/vue',
          '/boilerplate/vue-router',
          '/boilerplate/vuex'
        ],
      },
      {        
        title: 'Filters',
        path: '/filters/',
        children: [ 
          '/filters/copy'
        ],
      },
      {        
        title: 'Lorem',
        path: '/lorem/',
      }
    ],    
  }
}

/*
function boilerplateLinks() {
  return [
    {
      text: 'Boilerplate',
      path: '/boilerplate/',
      sidebarDepth: 2,
      children: [
        {text: 'Vue', link: '/boilerplate/vue/'},
        {text: 'Vue-Router', link: '/boilerplate/vue-router/'},
        {text: 'Vuex', link: '/boilerplate/vuex/'}
      ]
    }
  ]
}

function filterLinks() {
  return [
    {
      text: 'Filters',
      path: '/filters/',
      sidebarDepth: 2,
      children: [
        {text: 'copy', link: '/filters/copy/'},
      ]
    }
  ]
}
*/

// initialOpenGroupIndex: -1