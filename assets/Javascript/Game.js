/**
 * 
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
