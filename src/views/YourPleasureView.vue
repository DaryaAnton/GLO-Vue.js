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
              <CardBestComponent classItem="shop__item" :name="goods[0].name" :price="goods[0].price"
                :img="goods[0].img" />
              <CardBestComponent classItem="shop__item" :name="goods[1].name" :price="goods[1].price"
                :img="goods[1].img" />
              <CardBestComponent classItem="shop__item" :name="goods[2].name" :price="goods[2].price"
                :img="goods[2].img" />
              <CardBestComponent classItem="shop__item" :name="goods[3].name" :price="goods[3].price"
                :img="goods[3].img" />
              <CardBestComponent classItem="shop__item" :name="goods[4].name" :price="goods[4].price"
                :img="goods[4].img" />
              <CardBestComponent classItem="shop__item" :name="goods[5].name" :price="goods[5].price"
                :img="goods[5].img" />
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
export default {
  components: { NavBarComponent, CardBestComponent },
  data() {
    return {
      goods: [
        {
          id: 0,
          img: 'good-1.jpg',
          name: 'Solimo Coffee Beans 2kg',
          price: 10.73,
          country: 'Brazil'
        },
        {
          id: 1,
          img: 'good-1.jpg',
          name: 'Presto Coffee Beans 1kg',
          price: 15.99,
          country: 'Argentina'
        },
        {
          id: 2,
          img: 'good-1.jpg',
          name: 'AROMISTICO Coffee 1kg',
          price: 6.99,
          country: 'Colombia'
        },
        {
          id: 3,
          img: 'good-1.jpg',
          name: 'Caffe Molinari 2kg',
          price: 12.11,
          country: 'Zimbabwe'
        },
        {
          id: 4,
          img: 'good-1.jpg',
          name: 'De Roccis 10kg',
          price: 18.97,
          country: 'Waorania'
        },
        {
          id: 5,
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