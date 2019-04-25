const User ={
    template:`<h1>插进来了哦</h1>`
  }
  const Users = {
    props: ['id'],
    template: '<div>User {{ id }}</div>'
  }
var routes = [
    {
    path: '/',
    component: User
    },
    {
    path: '/user/:id',
    component: Users,
    props: true
    //对象模式
    // props: { newsletterPopup: false }
    
    },
];
  
var router = new VueRouter({
	routes: routes,
});

new Vue({
	el: '#app',
	router: router,
});
