<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			
			<nav-link
				:link="links.header.link"
				classLink="header__item"
			>
				<img 
				:src="require(`@/assets/logo/${links.header.icon}`)" 
				:alt="links.header.icon" 
				/>
			</nav-link>

			<nav-link
				v-for="link in links.other" 
				:key="link.id" 
				classLink="header__item" 
				:text="link.text"
				:link="link.link" 
			></nav-link>
		</ul>
	</header>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
	components: { NavLink },
  computed: {
    links() {
      return this.$store.getters['getHeaderLinks']
    }
  }
}

</script>
