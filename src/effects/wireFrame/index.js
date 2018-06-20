import * as THREE from 'three'

function wireFrame(id,el){
    this.id=id;
    this.el=el;
}

wireFrame.prototype = {
    constructor: wireFrame,

    _run:function(){
        console.log("线框Loading效果")
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
        var renderer = new THREE.WebGLRenderer();
    },


    _destory:function(){
        console.log("线框Loading效果"+this.id+"被销毁")
        //todo 删除scene
    }
}

export default wireFrame