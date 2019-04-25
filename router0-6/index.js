var routes = [
    {
      path: '/',
      component: {
        template: `
        <div>
          <h1>首页</h1>
        </div>
        `,
      },
    },
    {
      path: '/post',
      component: {
        template: `
        <div>
          <h1>文章</h1>
        </div>
        `,
      },
    },
    {
      path: '/people',
      component: {
        template: `
        <div>
          <h1>人员</h1>
        </div>
        `,
      },
    },
  ];

  var router = new VueRouter({
    routes: routes,
  });

  //类似与中间件
  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    var human = true;
    if(!human && to.path == '/people')
      next('/post')
    else
      next()

  });

  // router.beforeEach((to,from)=>{
  //   //已经访问了所以就没有了next
  //   console.log(to,from)
  // })

  new Vue({
    el: '#app',
    router: router,
  });