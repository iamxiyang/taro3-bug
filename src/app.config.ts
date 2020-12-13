export default {
  pages: [
    'pages/index/index',
    'pages/classify/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#7e7578',
    selectedColor: '#EB3939',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: '/assets/imgs/tabbar/home.png',
        selectedIconPath: '/assets/imgs/tabbar/home_active.png',
      },
      {
        pagePath: 'pages/classify/index',
        text: '分类',
        iconPath: '/assets/imgs/tabbar/classify.png',
        selectedIconPath: '/assets/imgs/tabbar/classify_active.png',
      },

    ]
  }
}
