<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">

            <nav-link
              :link="links.footer.link"
              classLink="footer__item"
            >
              <img 
              :src="require(`@/assets/logo/${links.footer.icon}`)" 
              :alt="links.footer.icon" 
              />
            </nav-link>

            <nav-link
              v-for="link in links.other" 
              :key="link.id" 
              classLink="footer__item" 
              :text="link.text"
              :link="link.link" 
            ></nav-link>
            
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
    </div>
  </footer>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
  components: { NavLink },
  computed: {
    links() {
      return this.$store.getters['getFooterLinks']
    }
  },
}
</script>