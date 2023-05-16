<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
	<link href="https://fonts.googleapis.com/css?family=Roboto:500,400,300,300italic,400italic,500,600,700,700italic&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Play:400&amp;subset=latin,cyrillic" rel="stylesheet" type="text/css">
</head>

<body <?php body_class( 'bg-white text-gray-900 antialiased' ); ?>>

<?php do_action( 'tailpress_site_before' ); ?>

<div id="page" class="flex flex-col min-h-screen">

	<?php do_action( 'tailpress_header' ); ?>

	<header>
		<div class="fixed top-0 left-0 z-50 flex items-center w-screen h-16 bg-c-blue">
			<div class="flex justify-between gap-5 mx-auto font-bold text-white sm:container">
				<a class="w-8 h-8 svg-icon-vk svg-icon " href="https://vk.com/worldenergy24"></a>
				<?php get_template_part( 'template-parts/button')?>
				<div class="my-auto"><div class="w-8 h-8 svg-icon svg-icon-vk"></div></div>
				<div class="my-auto">Text1</div>
			</div>
		</div>
		<div class="container mx-auto mt-16">
			<div class="items-stretch py-2 border-b lg:flex lg:justify-between lg:items-center">
				<div class="flex items-center justify-between ">
						<?php if ( has_custom_logo() ) { ?>
							<img class="h-16" src="<?php echo wp_get_attachment_url( get_theme_mod( 'custom_logo' ) );?>">
						<?php } else { ?>
							<!-- <a href="<?php echo get_bloginfo( 'url' ); ?>" class="blog-name-header lowercase text-3xl">
								<?php echo get_bloginfo( 'name' ); ?>
							</a> -->
							<a href="<?php echo get_bloginfo( 'url' ); ?>" class="flex justify-center items-center blog-name-header lowercase text-2xl lg:text-4xl">«ооо» квалификация</a>
							<p class="text-sm font-light text-gray-600">
								<?php echo get_bloginfo( 'description' ); ?>
							</p>

						<?php } ?>

					<div class="lg:hidden">
						<a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
							<svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1"
								 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
									<g id="icon-shape">
										<path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z"
											  id="Combined-Shape"></path>
									</g>
								</g>
							</svg>
						</a>
					</div>
				</div>

				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'menu-1',
						'container'		 => 'div',
						'container_class'=> 'primary-menu menu lg:h-16 hidden lg:block',
						'fallback_cb'    =>  true,
						'menu_class'	 => 'flex items-center  lg:text-md  mt-3 lg:mt-0 lg:flex-row gap-5 flex-col font-bold h-full',
						'items_wrap'     => '<ul id="%1$s" class="%2$s" aria-label="submenu">%3$s</ul>',
					)
				);
				?>
			</div>
		</div>
	</header>

	<div id="content" class="flex-grow site-content">

		<?php if ( is_front_page() ) { ?>
			
		<?php } ?>

		<?php do_action( 'tailpress_content_start' ); ?>

		<main>
