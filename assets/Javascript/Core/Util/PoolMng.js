const NodePool = require('NodePool');
const ActorType = require('Types').ActorType;
cc.Class({
    extends: cc.Component,

    properties: {
        actorPools: {
            default: [],
            type: NodePool
        }
    },

    // use this for initialization
    init () {
        for (let i = 0; i < this.actorPools.length; ++i) {
            this.actorPools[i].init();
        }
    },

    requestActor (actorType) {
        let thePool = this.actorPools[actorType];
        if (thePool.idx >= 0) {
            return thePool.request();
        } else {
            return null;
        }
    },

    returnActor (actorType, obj) {
        let thePool = this.actorPools[actorType];
        if (thePool.idx < thePool.size) {
            thePool.return(obj);
        } else {
            cc.log('Return obj to a full pool, something has gone wrong');
            return;
        }
    }
});
