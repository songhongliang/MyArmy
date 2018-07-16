/**
 * 
 * 生命,目前只有一个int的数值,以后可能会增加图片
 * 
 */
cc.Class({
    extends: cc.Component,
    properties: {
        //生命
        hp: {
            get () {
                return this._hp;
            },
            set (value) {
                this._hp = value;
            }
        },
    },
    init (v){
        this.hp = v;
    },
});
