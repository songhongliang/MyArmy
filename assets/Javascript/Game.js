// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

var armyMng = require("ArmyMng").armyMng;
cc.Class({
    extends: cc.Component,

    properties: {
        gameObjLayer: cc.Node,
        soldierPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("======game onLoad========")
        armyMng.init({gameObjLayer:this.gameObjLayer,soldierPrefab:this.soldierPrefab})
    },

    start () {
    },

    // update (dt) {},
});
