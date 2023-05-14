<article id="post-<?php the_ID(); ?>" <?php post_class('mb-12 prose max-w-none prose-h1:text-2xl lg:prose-h2:text-2xl '); ?>>

	<header class="mb-4 break-words entry-header lg:break-keep">
		<?php the_title( sprintf( '<h1 class="mb-1 text-xl font-extrabold leading-tight entry-title lg:text-3xl"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>
		<time datetime="<?php echo get_the_date( 'c' ); ?>" itemprop="datePublished" class="text-sm text-gray-700"><?php echo get_the_date(); ?></time>
	</header>

	<div class="entry-content prose-a:text-blue-500 hover:prose-a:text-emerald-500">
		<?php the_content(); ?>

		<?php
			wp_link_pages(
				array(
					'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'tailpress' ) . '</span>',
					'after'       => '</div>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
					'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'tailpress' ) . ' </span>%',
					'separator'   => '<span class="screen-reader-text">, </span>',
				)
			);
		?>
	</div>

</article>
