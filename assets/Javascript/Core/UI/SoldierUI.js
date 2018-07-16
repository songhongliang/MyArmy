/**
 * 战士
 * 
 */
var Logic = require("Soldier");

cc.Class({
    extends: cc.Component,

    onLoad () {
        this._logic = new Logic();
        this._logic.init(this);
    },

    start () {
    },

    changeColor (color){
        this.node.color = color;
    },

    unuse (data) {

    },

    reuse (data) {

    },

    update (dt) {

    },
});
