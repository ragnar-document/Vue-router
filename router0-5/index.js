var router = new VueRouter({

    routes : [
    {
      path: '/',
      components: {
        content: {
          template: `
             <h1>welcome</h1>
          `
        }
      },
    },
    {
      path: '/hellow/user',
      name: 'user',
      components: {
        sidebar:{
          template:`
          <div>
            <ul>
                <li>用户列表</li>
                <li>权限管理</li>
            </ul>
          </div>
          `
        },
        content: {
          template: `
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti in, laborum molestias necessitatibus optio perferendis quaerat quas qui quisquam sapiente. Architecto corporis eos eum libero optio, perspiciatis quo rem vel!</div>
          `
        }
      },
    },
    {
      path: '/article',
      components: {
        sidebar:{
          template:`
          <div>
            <ul>
                <li>帖子列表</li>
                <li>权限管理</li>
                <li>you管理</li>
                <li>she管理</li>
            </ul>
          </div>
          `
        },
        content: {
          template: `
              <div> Deleniti in, laborum molestias necessitatibus optio perferendis quaerat quas qui quisquam sapiente. Architecto corporis eos eum libero optio, perspiciatis quo rem vel!</div>
          `
        }
      },
    },
  ]
    
  });

  new Vue({
    el: '#app',
    router: router,
  });
