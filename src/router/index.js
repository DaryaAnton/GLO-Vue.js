import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HeroView from '../views/HeroView.vue'
import OurCoffee from '../views/OurCoffeeView.vue'
import YourPleasure from '../views/YourPleasureView.vue'
import Contact from '../views/ContactView.vue'
import ThanksPage from '../views/ThanksPageView.vue'
import GoodsItemView from '../views/GoodsItemView.vue'

const routes = [
    { path: '/', component: HeroView },
    { path: '/our-coffee', component: OurCoffee },
    { path: '/your-pleasure', component: YourPleasure },
    { path: '/contact', component: Contact },
    { path: '/thanks', component: ThanksPage },
    { name: 'coffee', path: '/our-coffee/:id', component: GoodsItemView },
    { name: 'goods', path: '/your-pleasure/:id', component: GoodsItemView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
