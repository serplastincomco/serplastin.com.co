<script>
	import { ABOUT, SOCIAL } from '$lib/const/about';
	import PAGES from '$lib/const/pages';
</script>

<header
	class="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile--- ltn__header-logo-and-mobile-menu--- ltn__header-transparent gradient-color-4---"
>
	<div class="ltn__header-top-area border-bottom top-area-color-white--- bg-white">
		<div class="container">
			<div class="row">
				<div class="col-md-7">
					<div class="ltn__top-bar-menu">
						<ul>
							<li><a href="mailto:{ABOUT.EMAIL[0]}"><i class="icon-mail"></i> {ABOUT.EMAIL[0]}</a></li>
							<li><i class="icon-placeholder"></i> {ABOUT.ADDRESS}</li>
						</ul>
					</div>
				</div>
				<div class="col-md-5">
					<div class="top-bar-right text-end">
						<div class="ltn__top-bar-menu">
							<ul>
								<li>
									<div class="ltn__social-media py-3">
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
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div
		class="bg-white ltn__header-middle-area ltn__logo-right-menu-option ltn__header-row-bg-white ltn__header-padding ltn__header-sticky ltn__sticky-bg-white"
	>
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="site-logo-wrap">
						<div class="site-logo">
							<a href="/"><img src="/brand/logo.png" class="w-14" alt="Logo" /></a>
							<span class="ml-5 text-2xl font-bold">Serplastin</span>
						</div>
						<div class="get-support clearfix d-none">
							<div class="get-support-icon">
								<i class="icon-call"></i>
							</div>
							<div class="get-support-info">
								<h6>Get Support</h6>
								<h4><a href="tel:+123456789">123-456-789-10</a></h4>
							</div>
						</div>
					</div>
				</div>
				<div class="col header-menu-column menu-color-white---">
					<div class="header-menu d-none d-xl-block">
						<nav>
							<div class="ltn__main-menu flex justify-end">
								<ul>
									{#each PAGES as page}
										<li><a href={page.href}>{page.name}</a></li>
									{/each}
								</ul>
							</div>
						</nav>
					</div>
				</div>
				<div class="col--- ltn__header-options ltn__header-options-2 mb-sm-20">
					<div class="mobile-menu-toggle d-xl-none">
						<a href="#ltn__utilize-mobile-menu" class="ltn__utilize-toggle">
							<svg viewBox="0 0 800 600">
								<path
									d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200"
									id="top"
								></path>
								<path d="M300,320 L540,320" id="middle"></path>
								<path
									d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190"
									id="bottom"
									transform="translate(480, 320) scale(1, -1) translate(-480, -318) "
								></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- Utilize Mobile Menu Start -->
<div id="ltn__utilize-mobile-menu" class="ltn__utilize ltn__utilize-mobile-menu">
	<div class="ltn__utilize-menu-inner ltn__scrollbar">
		<div class="ltn__utilize-menu-head">
			<div class="site-logo">
				<a href="/"><img src="/brand/logo.png" class="w-14" alt="Logo" /></a>
			</div>
			<button class="ltn__utilize-close">×</button>
		</div>
		<div class="ltn__utilize-menu">
			<ul>
				{#each PAGES as page}
					<li><a href={page.href}>{page.name}</a></li>
				{/each}
			</ul>
		</div>
	
		<div class="ltn__social-media-2">
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
<div class="ltn__utilize-overlay"></div>
