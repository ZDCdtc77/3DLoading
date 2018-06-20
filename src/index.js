import './less/index.less'
import effectsConstructors from './effects/index'
//import 'babel-polyfill' //这个不是必要的，能运行webgl的浏览器肯定都有es5的API

// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
}

const _Utils={
    _id:1,
    _instances:[]
}

let triloading = {
    _Utils:_Utils,
    load(option){
        //创建遮罩DOM
        let slotMask=document.createElement('div');
        slotMask.innerHTML="<div class='tri_mask'></div>";
        let eMask=slotMask.children[0];

        //创建弹出层
        let slotPop=document.createElement('div');
        slotPop.innerHTML="<div class='tri_pop'></div>";
        let ePop=slotPop.children[0];

        eMask.appendChild(ePop);
        document.body.appendChild(eMask);

        //创建loading效果
        let effectConstructor
        if(!option || !option.type){
            //wireFrame效果：默认
            effectConstructor =  effectsConstructors["wireFrame"]
        }
        else{
            //其他效果
            effectConstructor =  effectsConstructors[option.type]
        }

        if (effectConstructor && typeof effectConstructor === 'function'){
            const effect = new effectConstructor(_Utils._id,ePop);
            effect._run();

            _Utils._instances.push(effect);

            return _Utils._id++;
        }
    },
    close(id){
         _Utils._instances.forEach(_inst => {
             if(!id || _inst.id==id){
                 _inst._destory();
             }
         })
    }
};

export  default (window.triloading || triloading)
