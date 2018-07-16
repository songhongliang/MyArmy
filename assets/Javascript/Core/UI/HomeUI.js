/**
 * 大本营
 * 
 * 
 */
var Logic = require("Home");

cc.Class({
    extends: cc.Component,

    properties: {
        guardPrefab:cc.Prefab
    },
    onLoad () {
        this._logic = new Logic();
        this._logic.init(this);
    },

    start () {
    },

    update (dt) {
        this._logic.update(dt);
    },
});
