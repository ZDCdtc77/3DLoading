import * as THREE from 'three'

function wireFrame(id, el) {
    this.id = id;
    this.el = el;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
}

wireFrame.prototype = {
    constructor: wireFrame,

    _run: function () {
        var scene = new THREE.Scene();//相当于DATABOX
        var camera = new THREE.PerspectiveCamera(30, this.el.clientWidth / this.el.clientHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer({alpha: true});//相当于NETWORK alpha为true时 背景 透明

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;

        renderer.setClearColor('#cccccc', 0)
        renderer.setSize(this.el.clientWidth, this.el.clientHeight);
        this.el.appendChild(renderer.domElement);

        var geometry = new THREE.BoxGeometry(2, 2, 2);
        var material = new THREE.MeshBasicMaterial({color: 0xffffff, wireframe: true});
        var cube = new THREE.Mesh(geometry, material);
        this.scene.add(cube);

        camera.position.y = 1;
        camera.position.z = 10;

        var animate = function () {
            requestAnimationFrame(animate);

            cube.rotation.x += 0.05;
            cube.rotation.y += 0.05;
            cube.rotation.z += 0.05;

            if (!cube.headingway) cube.headingway = "up";

            if ((cube.headingway == "up" && cube.position.y <= 2) || cube.position.y <= 0) {
                cube.headingway = "up"
                cube.position.y += 0.05;
            }
            else {
                cube.headingway = "down"
                cube.position.y -= 0.05;
            }

            renderer.render(scene, camera);
        };

        animate();
    },

    _destory: function () {
        let parentNode = this.el.parentNode;
        let ancestorsNode = parentNode.parentNode;
        ancestorsNode.removeChild(parentNode);
        this.scene = null;
        this.camera = null;
        this.renderer = null;
    }
}

export default wireFrame