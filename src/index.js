import * as THREE from 'three'
// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
}

//alert("3dloading_hot");

let triloading = {
    load(option){
        console.log("triloading begin");

        let slotMask=document.createElement('div');
        slotMask.innerHTML="<div class='tri_mask'></div>";
        let eMask=slotMask.children[0];

        let slotPop=document.createElement('div');
        slotPop.innerHTML="<div class='tri_pop'></div>";
        let ePop=slotPop.children[0];

        eMask.appendChild(ePop);
        document.body.appendChild(eMask);


        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
    },
    close(index){
        console.log("triloading close");
    }
};

export  default (window.triloading || triloading)
