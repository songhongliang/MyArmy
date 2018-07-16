/**
 * 大本营逻辑
 */

var ActorTYpe = require("Types").ActorTYpe;
var ActorBase = require("ActorBase");
var MathUtils = require("MathUtils");
var armyMng = require("ArmyMng").armyMng;
var global = require("Global");

var Home = cc.Class({
    extends: ActorBase,

    init(uiComponent){
        this._super();
        this._time = 0;            //持续时间
        this._armyBatch = 0;         //军队批次
        this.guardNum = 5;
        this.guards = [];
        this._uiComponent = uiComponent;
        this.guardPrefab = uiComponent.guardPrefab;

        this.createGuard();
    },

    //创建卫兵
    createGuard () {
        cc.log("2222222222");
        for(var i = 0;i<this.guardNum;i++){
            var g = cc.instantiate(this.guardPrefab);
            g.init();
            g.parent = global.gameObjLayer;
            var p = MathUtils.randomPointByCircle(this._uiComponent.node,50);
            g.x = p.x;
            g.y = p.y;
            this.guards.push(g);
        }
    },

    update (dt) {
        this._time += dt;
        if(this._time >= this._armyBatch*10){
            this._armyBatch++;
            var armyPostion = {x:this._uiComponent.node.x,y:this._uiComponent.node.y+100};
            armyMng.createArmy({p:armyPostion});
        }
    },

    //移动
    move (){

    }
})

