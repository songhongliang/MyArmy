/**
 * 
 * 状态机
 * 
 */
//若有冲突考虑添加donothing状态
var stateType = cc.Enum ({
    idleState:1,
    moveState:2,
    moveEndState:3,
    fightState:4,
    fightEndState:5,
    deadState:6,
    deadEndState:7
});
var StateMachine = cc.Class ({
    
    /**自身实例*/
    //private static instance: StateMachine;
    
    /**构造函数*/
    ctor(){},
    init(obj) {
        /**引用对象*/
        this._obj = obj;
        /**当前状态*/
        this._curState = 0;
    },
    /**改变状态*/
    changeState (state) {
        this._curState = state;
    },
    /**实时刷新*/
    onEnterFrame(advancedTime){
        switch(this._curState){
            case stateType.idleState://闲置状态
                if(this._obj.isIdle()) {  
                    this._obj.idling();
                }
                break;
            case stateType.moveState://移动中
                if(this._obj.isMove()) {  
                    this._obj.moving();
                }
                break;
            case stateType.moveEndState://移动完毕
                this._obj.movingEnd();
                break;
            case stateType.fightState://攻击中
                if(this._obj.isFighting()) {  
                    this._obj.fighting();
                }
                break;
            case stateType.fightEndState://攻击完毕
                this._obj.fightingEnd();
                break;
            case stateType.deadState://死亡中
                if(this._obj.isDead()) {  
                    this._obj.dying();
                }
                break;
            case stateType.deadEndState://死亡完毕
                this._obj.dyingEnd();
                break;
            default:
                break;
        }
    },
    /**当前状态读取器*/
    get curState(){
        return this._curState;
    }
})