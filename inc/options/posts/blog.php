<?php
/**
 * Blog options
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [
	'blog_section_options' => [
		'type' => 'ct-options',
		'setting' => [ 'transport' => 'postMessage' ],
		'inner-options' => [

			[
				blocksy_rand_md5() => [
					'type' => 'ct-condition',
					'condition' => [ 'show_on_front' => 'posts' ],
					'global' => true,
					'options' => [

						'blog_page_title_enabled' => [
							'label' => __( 'Blog Title', 'blocksy' ),
							'type' => 'ct-panel',
							'switch' => true,
							'value' => 'no',
							'wrapperAttr' => [ 'data-label' => 'heading-label' ],
							'setting' => [ 'transport' => 'postMessage' ],
							'inner-options' => [

								blocksy_get_options('general/page-title', [
									'prefix' => 'blog',
									'is_home' => true
								])

							],
						],

					]
				]
			],

			blocksy_get_options('general/posts-listing', [
				'prefix' => 'blog',
			]),

			[
				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Page Elements', 'blocksy' ),
				],
			],

			blocksy_get_options('general/sidebar-particular', [
				'prefix' => 'blog',
			]),

			blocksy_get_options('general/pagination', [
				'prefix' => 'blog',
			]),

			[
				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Functionality Options', 'blocksy' ),
				],

				'has_posts_reveal' => [
					'label' => __( 'Cards Reveal Effect', 'blocksy' ),
					'type' => 'ct-switch',
					'value' => 'no',
					'setting' => [ 'transport' => 'postMessage' ],
				],

			],

		],
	],
];
