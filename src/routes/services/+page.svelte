<script>
	import { ABOUT, SOCIAL } from '$lib/const/about';
	import SERVICES from '$lib/const/services';
	import SEO from "$lib/components/SEO.svelte"

	const title = 'Servicios';
</script>
<SEO
	URL='services'
	TITLE='Servicios - conoce todos nuestro servicios '
	DESCRIPTION='Conoce todos los servicios que ofrecemos en Serplastin, líderes en la fabricación de envases plásticos para industrias críticas como la farmacéutica, alimentaria y cosmética.'
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
</div>

<div class="tab-content container m-auto">
	<div class="tab-pane fade active show" id="liton_product_grid">
		<div class="ltn__product-tab-content-inner ltn__product-grid-view">
			<div class="row">
				<div class="ltn__about-us-area pb-115">
					<div class="container">
						{#each SERVICES as SERVICE}
							<div class="row mt-5">
								<div class="col-lg-5 align-self-center" id={SERVICE.NAME}>
									<div class="about-us-img-wrap ltn__img-shape-left about-img-left">
										<img src={SERVICE.IMAGE} alt="service detail {SERVICE.NAME} - {ABOUT.APP_NAME}" />
									</div>
								</div>
								<div class="col-lg-7 align-self-center">
									<div class="about-us-info-wrap">
										<div class="section-title-area ltn__section-title-2--- mb-20">
											<h6 class="section-subtitle section-subtitle-2 ltn__secondary-color">
												Serplastin
											</h6>
											<h1 class="section-title">{SERVICE.NAME}</h1>
										</div>
										<div class="about-us-info-wrap-inner about-us-info-devide---">
											<p>
												{SERVICE.DESCRIPTION}
											</p>
										</div>
										<div class="btn-wrapper animated">
											<a href={SOCIAL.WHATSAPP + '?text=Hola me interesa el servicios de ' +SERVICE.NAME} class="theme-btn-1 btn btn-effect-1 text-uppercase"
												>Contáctanos</a
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
	</div>
</div>
