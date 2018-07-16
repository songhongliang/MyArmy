/**
 * 战士
 * 
 */


var ActorBase = require("ActorBase");

cc.Class({
    extends: ActorBase,

    init(uiComponent){
        this._uiComponent = uiComponent;
    },

    changeColor (color){
        this.node.color = color;
    },

    unuse (data) {

    },

    reuse (data) {

    },

    update (dt){

    }

});
