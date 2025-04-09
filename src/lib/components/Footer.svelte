<script>
	import { ABOUT, SOCIAL } from '$lib/const/about';
	import PAGES from '$lib/const/pages';
</script>

<footer class="ltn__footer-area">
	<div class="footer-top-area section-bg-1 plr--5">
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-3 col-sm-6 col-12 grid place-items-center">
					<div class="-mt-10 mb-10 flex items-center">
						<img src="/brand/logo.png" class="w-14" alt="Logo" />
						<span class="ml-2 text-3xl font-semibold">Serplastin</span>
					</div>
				</div>
				<div class=" col-md-3 col-sm-6 col-12">
					<div class="footer-widget footer-menu-widget clearfix">
						<h4 class="footer-title">PÁGINAS</h4>
						<div class="footer-menu">
							<ul>
								{#each PAGES as page}
									<li><a href={page.href}>{page.name}</a></li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
				<div class=" col-md-3 col-sm-6 col-12">
					<div class="footer-widget footer-menu-widget clearfix">
						<h4 class="footer-title">PÁGINAS</h4>
						<div class="footer-address">
							<ul>
								<li>
									<div class="footer-address-icon">
										<i class="icon-placeholder"></i>
									</div>
									<div class="footer-address-info">
										<p>{ABOUT.ADDRESS}</p>
									</div>
								</li>
								<li>
									<div class="footer-address-icon">
										<i class="icon-call"></i>
									</div>
									<div class="footer-address-info">
										<p><a href="tel:+0123-456789">{ABOUT.PHONE[0]}</a></p>
									</div>
								</li>
								<li>
									<div class="footer-address-icon">
										<i class="icon-mail"></i>
									</div>
									<div class="footer-address-info">
										<p><a href="mailto:{ABOUT.EMAIL[0]}">{ABOUT.EMAIL[0]}</a></p>
									</div>
								</li>
							</ul>
						</div>
						<div class="ltn__social-media mt-20">
							<ul>
								<li>
									<a href={SOCIAL.FACEBOOK} target="_blank" title="Facebook"
										><i class="fab fa-facebook-f"></i></a
									>
								</li>
								<li>
									<a href={SOCIAL.INSTAGRAM} target="_blank" title="Instagram"
										><i class="fab fa-instagram"></i></a
									>
								</li>
								<li>
									<a href={SOCIAL.WHATSAPP} target="_blank" title="Dribbble"
										><i class="fab fa-whatsapp"></i></a
									>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="ltn__copyright-area ltn__copyright-2 section-bg-7 plr--5">
		<div class="container-fluid ltn__border-top-2">
			<div class="row">
				<div class="col-md-6 col-12">
					<div class="ltn__copyright-design clearfix">
						<p>©Copyright {ABOUT.APP_NAME}.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</footer>
