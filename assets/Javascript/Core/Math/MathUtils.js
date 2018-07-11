var Utils = {};

//根据中心点随机生成在半径内的点
Utils.randomPointByCircle = function(center,r){
    //随机半径
    var realR = (Math.random()*r).toFixed(2);
    //随机角度
    var angel = (Math.random()*2*Math.PI).toFixed(2);

    var x = realR*Math.cos(angel);
    var y = realR*Math.sin(angel);
    return {x:center.x+x,y:center.y+y};
};

Utils.randomColor = function(){
    return {r:Utils.randomInit(256),g:Utils.randomInit(256),b:Utils.randomInit(256),a:255};
}

Utils.randomInit = function(v){
    return Math.floor(Math.random()*v);
}

module.exports = Utils;