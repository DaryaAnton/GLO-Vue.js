import { v4 as uuidv4 } from 'uuid';

const goods = {
  state: {
    goods: [
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'Solimo Coffee Beans 2kg',
        price: 10.73,
        country: 'Brazil'
      },
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'Presto Coffee Beans 1kg',
        price: 15.99,
        country: 'Argentina'
      },
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'AROMISTICO Coffee 1kg',
        price: 6.99,
        country: 'Colombia'
      },
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'Caffe Molinari 2kg',
        price: 12.11,
        country: 'Zimbabwe'
      },
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'De Roccis 10kg',
        price: 18.97,
        country: 'Waorania'
      },
      {
        id: uuidv4(),
        img: 'good-1.jpg',
        name: 'Ionia 1.5kg',
        price: 5.19,
        country: 'Russia'
      },

    ]
  },
  getters: {
    getGoods(state) {
      return state.goods
    }
  }
}

export default goods