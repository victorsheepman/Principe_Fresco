const instance = basicScroll.create({
	elem: document.querySelector('#letra'),
	from: 'top-bottom',
	to: 'middle-middle',
	props: {
		'--opacity': {
			from: '-10px',
			to: '304px'
		}
	}
})

instance.start()