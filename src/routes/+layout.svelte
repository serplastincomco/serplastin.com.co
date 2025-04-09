<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import ButtonWhastApp from '$lib/components/ButtonWhatsApp.svelte';	
	import './global.css';
</script>
<div class="body-wrapper">
	<ButtonWhastApp />
	<Header />
	<slot />
	<Footer />
</div>
