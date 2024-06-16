<template>
	<main>
		<div class="banner coffepage-banner">
			<div class="container">
				<div class="row">
					<div class="col-lg-6">
						<NavBarComponent />
					</div>
				</div>
				<h1 class="title-big">Our Coffee</h1>
			</div>
		</div>
		<section class="shop">
			<div class="container">
				<div class="row">
					<div class="col-lg-4 offset-2">
						<img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
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
					<div class="col-lg-4 offset-2">
						<form action="#" class="shop__search">
							<label class="shop__search-label" for="filter">Looking for</label>
							<input id="filter" type="text" placeholder="start typing here..." class="shop__search-input">
						</form>
					</div>
					<div class="col-lg-4">
						<div class="shop__filter">
							<div class="shop__filter-label">
								Or filter
							</div>
							<div class="shop__filter-group">
								<button class="shop__filter-btn">Brazil</button>
								<button class="shop__filter-btn">Kenya</button>
								<button class="shop__filter-btn">Columbia</button>
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-10 offset-lg-1">
						<div class="shop__wrapper">
							<CardBestComponent classItem="shop__item" :name="coffee[0].name" :price="coffee[0].price"
								:img="coffee[0].img" />
							<CardBestComponent classItem="shop__item" :name="coffee[1].name" :price="coffee[1].price"
								:img="coffee[1].img" />
							<CardBestComponent classItem="shop__item" :name="coffee[2].name" :price="coffee[2].price"
								:img="coffee[2].img" />
							<CardBestComponent classItem="shop__item" :name="coffee[3].name" :price="coffee[3].price"
								:img="coffee[3].img" />
							<CardBestComponent classItem="shop__item" :name="coffee[4].name" :price="coffee[4].price"
								:img="coffee[4].img" />
							<CardBestComponent classItem="shop__item" :name="coffee[5].name" :price="coffee[5].price"
								:img="coffee[5].img" />
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
			coffee: [
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