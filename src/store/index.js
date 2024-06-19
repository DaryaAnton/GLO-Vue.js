import Vue from 'vue'
import Vuex from 'vuex'

import links from './linsk'
import bestsellers from './bestsellers'
import goods from './goods'
import coffee from './coffee'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    links,
    bestsellers,
    coffee,
    goods
  }
})

export default store