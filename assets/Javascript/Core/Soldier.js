/**
 * 战士
 * 
 */
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
        // var ctx = this.getComponent(cc.Graphics);
        // ctx.circle(0,0, 10);
        // ctx.stroke();
        // ctx.fill();
    },

    changeColor (color){
        var g = this.getComponent(cc.Graphics);
        // g.strokeColor = color;
        g.fillColor = color;

        g.circle(0,0, 10);
        g.stroke();
        g.fill();
    },

    unuse (data) {

    },

    reuse (data) {

    },

    update (dt) {

    },
});
