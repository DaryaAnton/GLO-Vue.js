<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <NavBarComponent />
          </div>
        </div>
        <h1 class="title-big">For your pleasure</h1>
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br><br>
              Afraid at highly months do things on at. Situation recommend objection do intention<br>
              so questions. <br>
              As greatly removed calling pleased improve an. Last ask him cold feel<br>
              met spot shy want. Children me laughing we prospect answered followed. At it went<br>
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <CardBestComponent 
                v-for="card in goods"
								:key="card.id"
                classItem="shop__item" 
                :name="card.name" 
                :price="card.price"
                :img="card.img" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import CardBestComponent from '@/components/CardBestComponent.vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  components: { NavBarComponent, CardBestComponent },
  data() {
    return {
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
    }
  }
}
</script>