/**
 * 完成对游戏世界信息的更新和收集
 *
 * 游戏初始化
 */
var armyMng = require("ArmyMng").armyMng;
var global = require("Global");

var Game = cc.Class({
    extends: cc.Component,

    properties: {
        gameObjLayer: cc.Node,
        soldierPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("1111111111")
        global.gameObjLayer = this.gameObjLayer;
        armyMng.init({gameObjLayer:this.gameObjLayer,soldierPrefab:this.soldierPrefab});
        
    },

    start () {
    },

    // update (dt) {},
});