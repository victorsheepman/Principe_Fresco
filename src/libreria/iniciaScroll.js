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
});

const wallaper = basicScroll.create({
	elem: document.querySelector('#wallaper'),
	from: 'top-bottom',
	to: 'middle-middle',
	props: {
		'--opacidad': {
			from: 0,
			to: 1
		}
	}
})

instance.start()
wallaper.start()