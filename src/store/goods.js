import { v4 as uuidv4 } from 'uuid';

const goods = {
  state: {
    goods: []
  },
  mutations: {
    setGoodData(state, data) {
      state.goods = data
    }
  },
  actions: {
    setGoodData({commit}, data) {
      commit('setGoodData', data)
    }
  },
  getters: {
    getGoods(state) {
      return state.goods
    },
    getGoodsById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === id)
      }
    }
  }
}

export default goods