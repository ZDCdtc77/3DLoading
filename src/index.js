import './less/index.less'
import effectsConstructors from './effects/index'
//import 'babel-polyfill' //这个不是必要的，能运行webgl的浏览器肯定都有es5的API

// 检验是否浏览器环境
try {
    document
} catch (ex) {
    throw new Error('请在浏览器环境下运行')
}

const _Utils = {
    _id: 1,
    _instances: []
}

let triloading = {
    _Utils: _Utils,
    load(option) {
        //创建遮罩DOM
        let slotMask = document.createElement('div');
        slotMask.innerHTML = "<div class='tri_mask'></div>";
        let eMask = slotMask.children[0];

        //创建弹出层
        let slotPop = document.createElement('div');
        slotPop.innerHTML = "<div class='tri_pop'></div>";
        let ePop = slotPop.children[0];

        eMask.appendChild(ePop);
        document.body.appendChild(eMask);

        //选择loading效果
        let effectConstructor
        if (!option || !option.type) {
            //wireFrame效果：默认
            effectConstructor = effectsConstructors["wireFrame"]
        }
        else {
            //其他效果
            effectConstructor = effectsConstructors[option.type]
        }

        //创建loading效果
        if (effectConstructor && typeof effectConstructor === 'function') {
            const id = _Utils._id
            const effect = new effectConstructor(id, ePop);
            effect._run();

            _Utils._instances.push(effect);


            if (option && option.time) {
                //设置了自动关闭
                setTimeout(function () {
                    triloading.close(id)
                }, option.time);
            }

            return _Utils._id++;
        }


    },
    close(id) {
        //销毁指定id的读取效果，未指定id全部销毁
        _Utils._instances = _Utils._instances.filter(_inst => {
            if (!id || _inst.id == id) {
                _inst._destory();
                return false;
            }
            return true;
        })
    }
};

export default (window.triloading || triloading)
