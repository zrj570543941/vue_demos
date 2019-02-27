// import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})

new Vue({
  el: '#app',
  computed: {
    count () {
      return store.state.count
    }
  },
  render (h) {
    return (
      <div id="app">
        <p>{this.count}</p>
        <p>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </p>
      </div>
    )
  },
  // 通过mutations间接改store值而不是直接
  // 改store值
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
})
