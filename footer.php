
</main>

<?php do_action( 'tailpress_content_end' ); ?>

</div>

<?php do_action( 'tailpress_content_after' ); ?>

<footer id="colophon" class="py-12 shadow-inner site-footer bg-gray-50" role="contentinfo">
	<?php do_action( 'tailpress_footer' ); ?>

	<div class="container mx-auto text-center text-gray-500">
		&copy; <?php echo date_i18n( 'Y' );?> - ООО «КВАЛИФИКАЦИЯ»
	</div>
</footer>

</div>

<?php wp_footer(); ?>
<script>
  new isvek.Bvi({
	panelFixed: false,
  });
</script>
</body>
</html>
