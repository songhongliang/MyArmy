//boss类型
const BossType = cc.Enum({
    Demon: -1,
    SkeletonKing: -1
});

//敌人类型
const FoeType = cc.Enum({
    Foe0: -1,
    Foe1: -1,
    Foe2: -1,
    Foe3: -1,
    Foe5: -1,
    Foe6: -1,
    Boss1: -1,
    Boss2: -1
});

//抛射类型
const ProjectileType = cc.Enum({
    Arrow: -1,
    Fireball: -1,
    None: 999
});

//演员 兵种 
const ActorType = cc.Enum({
    unkonwn:0,
    home: 1,        //大本营
    guard: 2,       //卫兵
    soldier : 3     //战士
});

module.exports = {
    BossType,
    FoeType,
    ProjectileType,
    ActorType
};