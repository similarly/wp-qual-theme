<?php get_header(); ?>

<!-- MAIN PAGE -->

<div class="container mx-auto my-8">

	<?php if ( have_posts() ) : ?>
		<?php
		while ( have_posts() ) :
			?> 
			<div class="prose max-w-none">
			<div class="max-w-5xl p-5 mx-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-w-1/2"> 
				<?php the_post(); ?> 
				<?php get_template_part( 'template-parts/content', get_post_format() ); ?>
			</div>
			</div>
		<?php endwhile; ?>

	<?php endif; ?>

</div>

<?php
get_footer();
