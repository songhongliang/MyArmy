// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var HP = require("Life")


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
        var ctx = this.getComponent(cc.Graphics);
        ctx.circle(0,0, 10);
        ctx.stroke();
    },

    unuse (data) {

    },

    reuse (data) {

    },

    update (dt) {

    },
});
