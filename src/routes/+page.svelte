<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import SERVICES from '$lib/const/services';
	// import { altImages } from '$lib/helpers/helper';
</script>

<SEO
	URL=""
	TITLE="Envases Plásticos de Alta Precisión"
	DESCRIPTION="Con más de dos décadas de experiencia en la fabricación de envases plásticos, nuestra empresa se ha consolidado como líder en precisión y calidad."
/>
<div class="l">
	<div class="">
		<div class="">
			<div class="">
				<div class="container">
					<div class="row">
						<div
							class=" grid h-[100vh] w-full place-items-center"
							style="background-image: url(/brand/main.jpg); background-size: cover; background-position: center;"
						>
							<div class=" grid w-full max-w-md place-items-center">
								<h1 class="mt-24 text-center text-5xl font-bold text-white">
									Envases Plásticos <br /> de Alta Precisión
								</h1>
								<div class="text-center">
									<p class="text-white">
										Con más de dos décadas de experiencia en la fabricación de envases plásticos,
										nuestra empresa se ha consolidado como líder en precisión y calidad. Envases
										plásticos Envases PET Fabricante de envases Tapas plásticas
									</p>
								</div>
								<div class="btn-wrapper animaSted">
									<a href="/products" class="theme-btn-1 btn btn-effect-1">Ver productos</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="ltn__about-us-area pt-25 pb-120">
	<div class="container">
		<div class="row">
			<div class="col-lg-6 align-self-center">
				<div class="about-us-img-wrap about-img-left">
					<img src="/brand/it.jpg" alt={'información especial sobre serplastin'} />
				</div>
			</div>
			<div class="col-lg-6 align-self-center">
				<div class="about-us-info-wrap">
					<div class="section-title-area ltn__section-title-2--- mb-30">
						<h6 class="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
							About Us
						</h6>
						<h2 class="section-title">Empaques Plásticos de Precisión: Garantía de Calidad</h2>
						<p>
							Con más de dos décadas de experiencia, somos líderes en la fabricación de envases
							plásticos para industrias críticas como la farmacéutica, alimentaria y cosmética.
							Nuestro compromiso con la precisión y la calidad nos ha posicionado como un socio
							confiable para garantizar la integridad de sus productos.
						</p>
					</div>
					<ul class="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
						<li>
							<i class="fas fa-check-square"></i> Precisión y Exactitud: Nos destacamos por nuestra meticulosa
							atención a los detalles en la fabricación de cada envase plástico, asegurando la exactitud
							de dimensiones y especificaciones para satisfacer las exigencias de industrias sensibles
							como la farmacéutica.
						</li>
						<li>
							<i class="fas fa-check-square"></i> Diversificación de Sectores: Nuestros productos abarcan
							una amplia gama de sectores, desde la farmacéutica hasta la industria alimentaria y cosmética,
							demostrando nuestra versatilidad y capacidad para adaptarnos a diferentes requisitos y
							normativas específicas de cada sector, garantizando la seguridad y calidad de los productos.
						</li>
						<li>
							<i class="fas fa-check-square"></i> Compromiso con la Calidad: Mantenemos un compromiso
							inquebrantable con la calidad en todas las etapas de producción, desde la selección de
							materiales hasta el control de procesos, garantizando que nuestros envases plásticos cumplan
							con los estándares más exigentes de la industria y asegurando la integridad de los productos
							de nuestros clientes, así como la seguridad de los consumidores finales.
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- ABOUT US AREA END -->

<!-- BANNER AREA START -->
<div class="ltn__banner-area mt-120---">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title-area ltn__section-title-2 text-center">
					<h3 class="section-title">Nuestros servicios</h3>
				</div>
			</div>
		</div>
		<div class="row ltn__custom-gutter--- justify-content-center">
			{#each SERVICES as SERVICE}
				<div class="col-lg-4 col-sm-6">
					<div class="ltn__banner-item">
						<div class="ltn__banner-img">
							<a href="/services#{SERVICE.NAME}"
								><img src={SERVICE.IMAGE} alt="Diseño banner de {SERVICE.NAME}" /></a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<div class="ltn__product-area ltn__product-gutter pt-85 pb-70 d-none">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title-area ltn__section-title-2 text-center">
					<h3 class="section-title">envases plasticos</h3>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-3">
				<div class="row">
					<div class="col-lg-12">
						<div class="ltn__banner-item">
							<div class="ltn__banner-img">
								<img src="/img/banner/13.jpg" alt={'conoce más hacerca de nuestros servicios'} />
							</div>
						</div>
					</div>
					<div class="col-lg-12">
						<div class="ltn__banner-item">
							<div class="ltn__banner-img">
								<img src="/img/banner/12.jpg" alt={'conoce más hacerca de nuestros servicios'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- PRODUCT AREA END -->

<!-- PRODUCT AREA START (product-item-3) -->
<div class="ltn__product-area ltn__product-gutter pt-85 pb-70 d-none">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="section-title-area ltn__section-title-2 text-center"></div>
			</div>
		</div>
	</div>
</div>
<!-- PRODUCT AREA END -->

<!-- CALL TO ACTION START (call-to-action-6) -->
<div
	class="ltn__call-to-action-area call-to-action-6 before-bg-bottom d-none"
	data-bs-bg="/img/1.jpg--"
>
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div
					class="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---"
				>
					<div class="coll-to-info text-color-white"></div>
					<div class="btn-wrapper">
						<a class="btn btn-effect-3 btn-white" href="/"
							>Explore Products <i class="icon-next"></i></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
