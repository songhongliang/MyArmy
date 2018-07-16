/**
 * 大本营
 * 
 * 
 */


var HP = require("Life");
var armyMng = require("ArmyMng").armyMng;

cc.Class({
    extends: cc.Component,

    properties: {
        _time:0,            //持续时间
        armyBatch:0         //军队批次
    },
    onLoad () {
    },

    start () {
        
    },

    update (dt) {
        this._time += dt;
        if(this._time >= this.armyBatch*100000){
            this.armyBatch++;
            var armyPostion = {x:this.node.x,y:this.node.y+200};
            armyMng.createArmy({p:armyPostion});
        }
    },
});
