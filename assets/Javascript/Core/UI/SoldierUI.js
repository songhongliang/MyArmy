/**
 * 战士
 * 
 */
var HP = require("Life");
cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            default: null,        // The default value will be used only when the component attaching
            type: HP, // optional, default is typeof default
            serializable: true,   // optional, default is true
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.hp = new HP();
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
