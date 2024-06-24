const product = {
//   state: {
//     products: {}
//   },
//   mutations: {
//     setProduct(state, { id, data }) {
//       state.products[id] = data;
//     }
//   }
state: {
  product: null
},
mutations: {
  setProduct(state, product) {
    state.product = product;
  }
},
actions: {
  fetchProduct({ commit }, { pageName, id }) {
    fetch(`http://localhost:3000/${pageName}/${id}`)
      .then(res => res.json())
      .then(data => {
        commit('setProduct', data);
      });
  }
},
getters: {
  product: state => state.product
}
}
  export default product

