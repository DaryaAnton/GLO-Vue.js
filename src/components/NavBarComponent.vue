<template>
	<header>
		<ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
			<li class="header__item">
				<router-link :to="links[0].link">
					<img :src="require(`@/assets/logo/${links[0].icon}`)" :alt="links[0].icon" />
				</router-link>
			</li>
			<NavLink classLink="header__item" :text="links[1].text" :link="links[1].link" />
			<NavLink classLink="header__item" :text="links[2].text" :link="links[2].link" />
			<NavLink classLink="header__item" :text="links[3].text" :link="links[3].link" />
		</ul>
	</header>
</template>

<script>
import NavLink from '@/components/NavLink.vue'

export default {
	components: { NavLink },
	data() {
		return {
			links: [
				{
					id: 0,
					link: '/',
					icon: 'Logo.svg'
				},
				{
					id: 1,
					text: 'Our coffee',
					link: '/our-coffee'
				},
				{
					id: 2,
					text: 'For your pleasure',
					link: '/your-pleasure'
				},
				{
					id: 3,
					text: 'Contact us',
					link: '/contact'
				},
			]
		}
	}
}

</script>
