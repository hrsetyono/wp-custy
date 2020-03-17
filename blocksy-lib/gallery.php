<?php

function blocksy_flexy($args = []) {
	$args = wp_parse_args($args, [
		'prefix' => '',

		'items' => '',
		'images' => null,
		'images_ratio' => '3/4',

		'pills_images' => null,

		'pills_count' => 0,

		'items_container_class' => '',
		'size' => 'medium',
		'href' => null,

		'enable' => true
	]);

	$prefix = $args['prefix'];

	if (! empty($args['prefix'])) {
		$prefix .= '_';
	}

	$has_scale_rotate = false;

	if ($args['images']) {
		$args['pills_count'] = count($args['images']);
		$args['items'] = '';

		foreach ($args['images'] as $single_image) {
			$attachment_id = is_array($single_image) ? $single_image['attachment_id'] : $single_image;

			if ($has_scale_rotate) {
				$args['items'] .= '<div>';
			}

			$single_item_href = $args['href'];

			if (! $single_item_href) {
				$single_item_href = wp_get_attachment_image_src(
					$attachment_id,
					$args['size']
				);

				if ($single_item_href) {
					$single_item_href = $single_item_href[0];
				}
			}

			$args['items'] .= '<div><figure>' . blocksy_image([
				'attachment_id' => $attachment_id,
				'ratio' => $args['images_ratio'],
				'tag_name' => 'a',
				'size' => $args['size'],
				'html_atts' => [
					'href' => $single_item_href
				],
			]) .'</figure></div>';

			if ($has_scale_rotate) {
				$args['items'] .= '</div>';
			}
		}
	}

	if ($args['enable']) {
		$initial_value = 'no';

		if ($has_scale_rotate) {
			$initial_value = 'no:scalerotate';
		}

		$args['container_attr']['data-flexy'] = $initial_value;
	}

	// Pills
	$has_pills = true;

	// Slider view
	// boxed | full
	$slider_view = 'boxed';

	$container_attr = '';

	foreach ($args['container_attr'] as $key => $value) {
		$container_attr .= ' ' . $key . '="' . $value . '"';
	}

	$container_attr = trim($container_attr);

	?>

	<div
		class="flexy-container"
		<?php echo $container_attr ?>>

		<div class="flexy">
			<div class="flexy-view" data-flexy-view="<?php echo $slider_view ?>">
				<div class="flexy-items <?php echo $args['items_container_class'] ?>">
					<?php echo $args['items']; ?>
				</div>
			</div>
		</div>

		<?php
			if ($has_pills) {
				blocksy_flexy_pills($args['pills_count'], $args['pills_images']);
			}
		?>
	</div>
	<?php
}

function blocksy_flexy_pills($number_of_sliders, $pills_images = null) {
	if ($number_of_sliders === 0) return;

	$type = $pills_images ? 'thumbs' : 'circle';

	?>

	<nav class="flexy-pills" data-type="<?php echo $type ?>">
		<?php foreach (range(1, ceil($number_of_sliders)) as $index) { ?>
		<?php
			if ($pills_images) {
				$image_output = blocksy_image([
					'attachment_id' => $pills_images[$index - 1],
					'ratio' => '1/1',
					'tag_name' => 'a',
					'size' => "woocommerce_thumbnail",
					'class' => intval($index) === 1 ? 'active' : '',
					'html_atts' => [
						'href' => '#',
					],
				]);

				echo $image_output;
			} else {
				?>

				<a href="#" <?php if (intval($index) === 1) echo ' class="active"' ?>>
					<span hidden>
						<?php
							// translators: %s is the number of the slide
							echo sprintf(__('Slide %s', 'blocksy'), $index);
						?>
					</span>
				</a>

				<?php
			}
		} ?>
	</nav>

    <?php
}
