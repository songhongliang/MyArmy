
var Army = require("Army");
var Soldier = require("Soldier");


var ArmyMng = function(){
    cc.log("======ArmyMng========")
};

ArmyMng.prototype.init = function(param){
    cc.log("======ArmyMng.init========")
    this.armys = [];
    this.soldierPool = new cc.NodePool(Soldier);
    this.gameObjLayer = param.gameObjLayer;
    this.soldierPrefab = param.soldierPrefab;
}

ArmyMng.prototype.creatSoldier = function(param){
    var soldier = cc.instantiate(this.soldierPrefab);
    soldier.parent = this.gameObjLayer;
    // return node;
}

ArmyMng.prototype.createArmy = function(param){
    var army = new Army();
    army.init();
    this.creatSoldier()
    // army.push();
}


var armyMng = new ArmyMng();

module.exports = {
    armyMng : armyMng
}