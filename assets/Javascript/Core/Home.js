// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var HP = require("Life");
 var armyMng = require("ArmyMng").armyMng;
cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            // ATTRIBUTES:
            default: null,        // The default value will be used only when the component attaching
            type: HP,               // optional, default is typeof default
        },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hp = new HP();
    },

    start () {
        cc.log("====start=====")
        armyMng.createArmy();

        var node = new cc.Node('Label');
        var lb = node.addComponent(cc.Label);
        lb.string = "=========";
        node.parent = this.node; 

    },

    update (dt) {

    },
});
