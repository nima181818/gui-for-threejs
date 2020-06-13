//初始化threejs
export default {
	scene: null,
	camera: null,
	renderer: null,
	control:null,
	init(renderdom) {
		let width = window.innerWidth - 240,
			height = window.innerHeight - 26,
			light = new THREE.PointLight( 0xff0000, 1, 100 );
		var geometry = new THREE.PlaneGeometry(5, 20, 32);
		var material = new THREE.MeshNormalMaterial({
		
			side: THREE.DoubleSide
		});
		var axes = new THREE.AxisHelper(20);
		
		var plane = new THREE.Mesh(geometry, material);
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
		this.camera.position.x = 30;
		this.camera.position.y = 30;
		this.camera.position.z = 30;
	//	this.scene.add(light);
		this.scene.add(axes);
        this.scene.add(plane)
		this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(new THREE.Color(0x000000));
		this.renderer.setSize(width, height)
		
		this.camera.lookAt(this.scene.position)
		this.control =new THREE.OrbitControls(this.camera,renderdom);
		this.renderer.render(this.scene, this.camera)
		renderdom.appendChild(this.renderer.domElement)
		console.log(this.scene)
		this.moving();
	},
	moving(){
		this.control.update();
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.moving.bind(this))
	}
}