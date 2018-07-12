/**
 * 完成对游戏世界信息的更新和收集
 *
 * 游戏初始化
 */
var armyMng = require("ArmyMng").armyMng;
cc.Class({
    extends: cc.Component,

    properties: {
        gameObjLayer: cc.Node,
        soldierPrefab: cc.Prefab
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        armyMng.init({gameObjLayer:this.gameObjLayer,soldierPrefab:this.soldierPrefab})
    },

    start () {
    },

    // update (dt) {},
});
