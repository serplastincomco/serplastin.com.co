<script>
	import { SOCIAL } from '$lib/const/about';
	import { onMount } from 'svelte';
	import SEO from "$lib/components/SEO.svelte"
	const title = 'Productos';
	export let data;
	let CATEGORIES = [];
	let PRODUCTS = [];
	onMount(() => {
		CATEGORIES = data.PRODUCTS.cartegories;
		PRODUCTS = data.PRODUCTS.PRODUCTS;
	});
	function filterByCategory(category) {
		if (category === 'todas') {
			PRODUCTS = data.PRODUCTS.PRODUCTS;
		} else {
			PRODUCTS = data.PRODUCTS.PRODUCTS.filter(
				(/** @type {{ category: any; }} */ item) => item.category === category,
			);
		}
	}
</script>
<SEO
	URL='products'
	TITLE='Productos - conoce todos nuestros productos que tenemos para ti, animate a comprar'
	DESCRIPTION='Conoce todos los productos que ofrecemos en Serplastin, líderes en la fabricación de envases plásticos para industrias'
/>


<div
	class="ltn__breadcrumb-area bg-overlay-white-30 bg-image text-left"
	data-bs-bg="/img/bg/14.jpg"
>
	<div class="container mt-36">
		<div class="row">
			<div class="col-lg-12">
				<div class="ltn__breadcrumb-inner">
					<h1 class="page-title text-5xl font-bold">{title}</h1>
					<div class="ltn__breadcrumb-list">
						<ul>
							<li>
								<a href="/"
									><span class="ltn__secondary-color"><i class="fas fa-home"></i></span> Inicio</a
								>
							</li>
							<li>{title}</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="absolute mt-[105px]" id="categories"></div>
</div>
<section id="news-feed" class="news-feed-bg news-grid-bg sidebar-page-container">
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-sm-12">
				<div class="sidebar">
					<div class="sidebar-widget sidebar-tags">
						<div class="widget-title" >
							<h4>Categorías Disponibles</h4>
						</div>
						<div class="widget-conten mb-10t">
							<ul class="tags-list clearfix flex gap-2">
								<li><a href="#categories" class="bg-green-700 rounded-xl text-white p-3" on:click={() => filterByCategory('todas')}>Todas</a></li>
								{#each CATEGORIES as CATEGORY}
									<li><a href="#categories"  class="capitalize bg-green-700 rounded-xl text-white p-3" on:click={() => filterByCategory(CATEGORY)}>{CATEGORY}</a></li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<div class="tab-content container m-auto mt-5">
	<div class="tab-pane fade active show" id="liton_product_grid">
		<div class="ltn__product-tab-content-inner ltn__product-grid-view">
			<div class="row">
				{#each PRODUCTS as item}
					<div class="col-xl-3 col-sm-6 col-12">
						<div class="ltn__product-item ltn__product-item-3 text-center rounded-2xl shadow-xl">
							<div class="product-img">
								<img
									src={item.image}
									style=" height: 350px; object-fit: cover; width: 100%; aspect-ratio: 3 / 4;"
									class="object-cover rounded-t-2xl"
									alt="#"
								/>
							</div>
							<div class="product-info">
								<div class="product-ratting">
									<ul>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
										<li><i class="fas fa-star"></i></li>
									</ul>
								</div>
								<h2 class="product-title">{item.title}</h2>
								<div class="product-price">
									<span class="text-sm" style="font-size: 12px;">{item.description}</span>
								</div>
								<div class="product-price">
									<a target="_blank"
										href={SOCIAL.WHATSAPP + '?text=Hola me interesa el producto ' + item.title}
										class="p-2 px-3 rounded-lg text-white bg-[#198754]">Comprar</a
									>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
