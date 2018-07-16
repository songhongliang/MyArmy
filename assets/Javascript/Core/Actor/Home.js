/**
 * 大本营逻辑
 */

var ActorTYpe = require("Types").ActorTYpe;
var ActorBase = require("ActorBase");
var MathUtils = require("MathUtils");


var Home = cc.Class({
    extends: ActorBase,

    init(uiComponent){
        this.super();
        this.guardNum = 10;
        this.guards = [];
        this._uiComponent = uiComponent;
        this.guardPrefab = null;
    },

    //创建卫兵
    createGuard () {
        for(var i = 0;i<this.guardNum;i++){
            var g = cc.instantiate(this.guardPrefab);
            g.init();
        }
    },

    //移动
    move (){

    }
})

