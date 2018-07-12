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
        hp: {               //生命
            default: null, 
            type: HP,         
        },
        _time:0,            //持续时间

        armyBatch:0
    },
    onLoad () {
        this.hp = new HP();
        this.hp.init(10000);
    },

    start () {
        
    },

    update (dt) {
        this._time += dt;
        if(this._time >= this.armyBatch*3){
            this.armyBatch++;
            var armyPostion = {x:this.node.x,y:this.node.y+300};
            armyMng.createArmy({p:armyPostion});
        }
    },
});
