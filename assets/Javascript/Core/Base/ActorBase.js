/**
 * 有生命和状态对象的基类
 * 
 */

var ActorType = require("Types").ActorType;
var StateMachine = require("StateMachine");
var HP = require("Life");

var ActorBase = cc.Class({
    name:"ActorBase",
    
    ctor(){},
    init(){
        this._fsm = new StateMachine();
        this._hp = new HP();
        this._type = ActorType.unknown;
    },

    //移动
    move (){

    }
})

