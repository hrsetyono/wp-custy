<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package Blocksy
 */

get_header();
?>

	<div id="primary" class="content-area">
		<div class="ct-container">

			<section class="error-404 not-found">
				<header class="page-header">
					<h1 class="page-title">
						<?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'blocksy' ); ?>
					</h1>
				</header>

				<div class="page-content">
					<p>
						<?php esc_html_e( 'It looks like nothing was found at this location. Maybe try to search for something else?', 'blocksy' ); ?>
					</p>

					<?php get_search_form(); ?>
				</div>
			</section>

		</div>
	</div>

<?php
get_footer();