wp.customize('has_passepartout', val =>
	val.bind(to => {
		document.body.classList.remove('ct-passepartout')

		if (to === 'yes') {
			document.body.classList.add('ct-passepartout')
		}
	})
)

const renderFormsType = () => {
	document.body.dataset.forms = wp
		.customize('forms_type')()
		.replace('-forms', '')
}

wp.customize('forms_type', val => val.bind(to => renderFormsType()))
wp.customize('form_elements_panel', val => val.bind(to => renderFormsType()))
