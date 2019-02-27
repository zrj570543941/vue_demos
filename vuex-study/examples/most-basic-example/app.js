import 'babel-polyfill'
import Vue from 'vue'
import Vuex from 'vuex'
// 123
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

const App = {
  template: `
    <div id="app">
      <p>{{ count }}</p>
      <p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
      </p>
    </div>
  `,
}

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
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
})
