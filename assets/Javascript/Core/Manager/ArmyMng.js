/**
 * 
 * 军队管理
 * 
 */
var Army = require("Army");
var Soldier = require("Soldier");
var Utils = require("MathUtils");

var ArmyMng = function(){
};

ArmyMng.prototype.init = function(param){
    this.armys = [];
    this.soldierPool = new cc.NodePool(Soldier);
    this.gameObjLayer = param.gameObjLayer;
    this.soldierPrefab = param.soldierPrefab;
}

ArmyMng.prototype.creatSoldier = function(param){
    var soldier = cc.instantiate(this.soldierPrefab);
    soldier.parent = this.gameObjLayer;
    var p = Utils.randomPointByCircle(param.p,50);
    soldier.x = p.x;
    soldier.y = p.y;
    return soldier;
}

ArmyMng.prototype.createArmy = function(param){
    var army = new Army();
    army.init(param);

    for(var i = 0; i< 10 ; i++){
        var sd = this.creatSoldier(param);
        army.addSoldier(sd);
    }
}


var armyMng = new ArmyMng();

module.exports = {
    armyMng : armyMng
}