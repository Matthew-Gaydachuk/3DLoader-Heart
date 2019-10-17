var loader = new THREE.FileLoader()

loader.load('app.json', function (values) {

	var player = new APP.Player()
	player.load(JSON.parse(values))
	player.setSize(window.innerWidth, window.innerHeight)
	player.play()

	document.body.appendChild(player.dom)

	window.addEventListener('resize', function () {
		player.setSize(window.innerWidth, window.innerHeight)
	})
})