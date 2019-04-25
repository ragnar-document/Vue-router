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
        // beforeEach:(to,from,next) =>{
        //   ..独享路由组件
        // }
        template: `
        <div>
          <h1>文章</h1>
        </div>
        `,
      },
    },
    {
      path: '/people',
      meta: {
        login_required: true, //修改此做测试
      },
      component: {
        template: `
        <div>
          <h1>人员</h1>
          <router-link to="more" append>more</router-link>
          <router-view></router-view>
        </div>
        `,
      },
      children: [
        { 
        path: 'more',
        component:{
          template: `
            <h1>sdfsdfsdfsdf</h1>
          `,
        }
       }
      ]
    },
  ];

  var router = new VueRouter({
    routes: routes,
  });

  //类似与中间件
  router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    var logged_in = false;
   //一个路由匹配到的所有路由记录会暴露为 $route 对象 
   //(还有在导航守卫中的路由对象) 的 $route.matched 数组。
   //因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。
    if(!logged_in &&  to.matched.some(function (item){
      return item.meta.login_required;
    }))
    //next：一定要调用该方法来 resolve 这个钩子，
    //如果不写next()或者next(false)，页面路由不会跳转，
    //也就是页面被阻止在当前页面了
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
