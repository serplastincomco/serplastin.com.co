<script>
	import { ABOUT, SOCIAL } from '$lib/const/about';
	import SEO from '$lib/components/SEO.svelte';
	const title = 'Contacto';
	let form = {
		name: '',
		msg: '',
	};
</script>

<SEO
	URL="contact"
	TITLE="Contacto - Contactanos para más información sobre nuestros productos y servicios"
	DESCRIPTION="Contactanos para más información sobre nuestros productos y servicios, líderes en la fabricación de envases plásticos"
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
<!-- CONTACT ADDRESS AREA START -->
<div class="ltn__contact-address-area mb-90">
	<div class="container">
		<div class="row">
			<div class="col-lg-4">
				<div class="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
					<div class="ltn__contact-address-icon">
						<img src="img/icons/10.png" alt="Icon_Image" />
					</div>
					<h3>Correos</h3>
					{#each ABOUT.EMAIL as mail}
						<p>{mail}</p>
					{/each}
				</div>
			</div>
			<div class="col-lg-4">
				<div class="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
					<div class="ltn__contact-address-icon">
						<img src="img/icons/11.png" alt="Icon_Image" />
					</div>
					<h3>Números de contacto</h3>
					{#each ABOUT.PHONE as mail}
						<p>{mail}</p>
					{/each}
				</div>
			</div>
			<div class="col-lg-4">
				<div class="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
					<div class="ltn__contact-address-icon">
						<img src="img/icons/12.png" alt="Icon_Image" />
					</div>
					<h3>Dirección</h3>
					<p>
						{ABOUT.ADDRESS}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- CONTACT ADDRESS AREA END -->

<!-- CONTACT MESSAGE AREA START -->
<div class="ltn__contact-message-area mb-120 mb--100">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div class="ltn__form-box contact-form-box box-shadow white-bg">
					<h4 class="title-2">Contactanos</h4>
					<form id="contact-form">
						<div class="row">
							<div class="col-md-12">
								<div class="input-item input-item-name ltn__custom-icon">
									<input type="text" bind:value={form.name} name="name" placeholder="Nombre" />
								</div>
							</div>
						</div>
						<div class="input-item input-item-textarea ltn__custom-icon">
							<textarea name="message" bind:value={form.msg} placeholder="Mensaje"></textarea>
						</div>
						<div class="btn-wrapper mt-5">
							<a href={SOCIAL.WHATSAPP + `?}&text=Hola, soy ${form.name} y quisiera saber sobre ${form.msg}`}
								class="btn theme-btn-1 btn-effect-1 text-uppercase bg-black hover:text-black"
								type="button">Enviar</a
							>
						</div>
						<p class="form-messege mb-0 mt-20"></p>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<!-- CONTACT MESSAGE AREA END -->

<!-- GOOGLE MAP AREA START -->
<div class="google-map mb-120">
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9068963365285!2d-74.1400695250212!3d4.610683695364015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9eb84b4190d7%3A0xf15a2f8e05e8a1a0!2sCra%2069%20%2336-10%2C%20Bogot%C3%A1!5e0!3m2!1sen!2sco!4v1710948439539!5m2!1sen!2sco"
		width="100%"
		height="100%"
		frameborder="0"
		allowfullscreen={true}
		aria-hidden="false"
		title="Google Maps"
	></iframe>
</div>
<div class="ltn__call-to-action-area call-to-action-6 before-bg-bottom" data-bs-bg="img/1.jpg--">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<div
					class="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---"
				>
					<div class="coll-to-info text-color-white">
						<h1>Visita nuestra linea de productos</h1>
					</div>
					<div class="btn-wrapper">
						<a class="btn btn-effect-3 btn-white" href="/products"
							>Exprorar productos <i class="icon-next"></i></a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
