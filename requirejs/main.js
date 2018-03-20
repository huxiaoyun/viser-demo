require.config({
  baseUrl: './lib',
  paths: {
      'viser-vue': "https://unpkg.com/viser-vue/umd/viser-vue",
      'viser': "https://unpkg.com/viser/umd/viser",
  }
})

//不存在减小打包体积  按需加载模块
require(['vue',
  'viser-vue',
  'viser'
], function(Vue,
  viserVue, viser) {
  //window.viserVue = viserVue;
  Vue.use(viserVue.default); //注册G2的组件对应的Vue组件
  //G2的数据
  const dataG2 = [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 13 },
  ];
  const scale = [{
      dataKey: 'value',
      min: 0,
  }, {
      dataKey: 'year',
      min: 0,
      max: 1,
  }];
  const height = 400;
  new Vue({
      el: '#app',
      data: { //options封装为相应式依赖
          dataG2,
          scale,
          height,
      }
  });
})
