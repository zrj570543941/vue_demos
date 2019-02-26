var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
// 视图会相应
app.message = 'x'
// 视图不会相应
app.other = 'x'

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: '页面加载于 ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

var app5 = new Vue({
  methods: {
    reverseMessage: function () {
      // handler is here
    }
  }
})

new Vue({
  data: {
    a: 1
  },
  // 不要在生命周期函数上使用箭头函数
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
