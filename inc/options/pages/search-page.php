<?php
/**
 * Search page
 *
 * @copyright 2019-present Creative Themes
 * @license   http://www.gnu.org/copyleft/gpl.html GNU General Public License
 * @package   Blocksy
 */

$options = [
	'search_section_options' => [
		'type' => 'ct-options',
		'setting' => ['transport' => 'postMessage'],
		'inner-options' => [
			[
				'search_page_title_enabled' => [
					'label' => __('Page Title', 'blocksy'),
					'type' => 'ct-panel',
					'switch' => true,
					'value' => 'yes',
					'wrapperAttr' => ['data-label' => 'heading-label'],
					'setting' => ['transport' => 'postMessage'],
					'inner-options' => [
						blocksy_get_options('general/page-title', [
							'prefix' => 'search',
							'is_search' => true
						])
					]
				]
			],

			blocksy_get_options('general/posts-listing', [
				'prefix' => 'search',
				'title' => __('search results', 'blocksy')
			]),

			[
				blocksy_rand_md5() => [
					'type'  => 'ct-title',
					'label' => __( 'Page Elements', 'blocksy' ),
				],
			],

			blocksy_get_options('general/sidebar-particular', [
				'prefix' => 'search'
			]),

			[
				blocksy_rand_md5() => [
					'type' => 'ct-title',
					'label' => __( 'Functionality Options', 'blocksy' ),
				],

				'search_options_panel' => [
					'label' => __( 'Search Trough', 'blocksy' ),
					'type' => 'ct-panel',
					'value' => 'yes',
					'wrapperAttr' => [ 'data-panel' => 'only-arrow' ],
					'setting' => [ 'transport' => 'postMessage' ],
					'inner-options' => [

						blocksy_rand_md5() => [
							'type' => 'ct-title',
							'label' => __('Search Through Criteria', 'blocksy'),
							'desc' => __(
								'Chose in which post types do you want to perform searches.',
								'blocksy'
							)
						],

						'search_through' => [
							'label' => false,
							'type' => 'ct-checkboxes',
							'attr' => ['data-columns' => '2'],
							'disableRevertButton' => true,
							'choices' => blocksy_ordered_keys([
								'post' => __('Posts', 'blocksy'),
								'page' => __('Pages', 'blocksy'),
								'product' => __('Products', 'blocksy')
							]),

							'value' => [
								'post' => true,
								'page' => false,
								'product' => false
							]
						],

					],
				],

			],
		]
	]
];
