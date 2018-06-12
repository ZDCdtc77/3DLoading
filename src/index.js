import * as THREE from 'three'
// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
}

alert("3dloading_hot");

let triloading = {
    load(option){

        //document.getElementsByTagName("body");
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
    },
    close(index){

    }
};

export  default (window.triloading || triloading)
