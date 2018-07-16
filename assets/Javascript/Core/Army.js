/**
 * 
 * 军队
 *
 * 负责规划战士的位置
 *
 * 战士自己
 * 
 */

var Soldier = require("Soldier");
var Utils = require("MathUtils");

var ArmyID = 0;

var Army = function(){
    
}

Army.prototype.init = function(){
    this._id = ++ArmyID;
    this.soldiers = [];
    this.teamColor = cc.color(Utils.randomColor());
}

//获取军队ID
Army.prototype.getID = function(){
    return this._id;
};


Army.prototype.addSoldier = function(soldier){
    var s = soldier.getComponent("SoldierUI");
    s.changeColor(this.teamColor);
    this.soldiers.push(soldier);
};

Army.prototype.deleteSoldier = function(soldierID){
    for(var i=0,len = this.soldiers.length;i<len;i++)
    {
        if(this.soldiers[i].getID == soldierID){
            this.soldiers.splice(i,1);
            return true;
        }
    }
    return false;
};

module.exports = Army;