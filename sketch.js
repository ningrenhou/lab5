//Images from here: http://xhslink.com/a/WC3tanYAwrNab
//Images from here: http://xhslink.com/a/859MXr3TyrNab
//Images from here: http://xhslink.com/a/CQ8RYujnArNab

var alldaihaoyuan = [];
var data;
var currentgengtu = 0;
var daihaoyuanposition = {x: 100, y: 100, w:100, h:100};
var index = 0;

//loadImage: https://p5js.org/reference/p5/loadImage/
//push: https://www.w3schools.com/jsref/jsref_push.asp
//I was going to just use loadimage for this code, but realized I couldn't display more than one, so I added push, and everyone to make one loadimage and push.
function preload(){
    ajin = loadImage('/lab5/images/ajin.jpg');
    alldaihaoyuan.push(ajin);

    bugongping = loadImage('/lab5/images/bugongping.jpg');
    alldaihaoyuan.push(bugongping);

    buting = loadImage('/lab5/images/buting.jpg');
    alldaihaoyuan.push(buting);

    chuini = loadImage('/lab5/images/chuini.jpg');
    alldaihaoyuan.push(chuini);

    eihei = loadImage('/lab5/images/eihei.jpg');
    alldaihaoyuan.push(eihei);

    gege = loadImage('/lab5/images/gege.jpg');
    alldaihaoyuan.push(gege);

    glw = loadImage('/lab5/images/glw.jpg');
    alldaihaoyuan.push(glw);

    guofengxiao = loadImage('/lab5/images/guofengxiao.jpg');
    alldaihaoyuan.push(guofengxiao);

    maomao = loadImage('/lab5/images/maomao.jpg');
    alldaihaoyuan.push(maomao);

    nixiaozi = loadImage('/lab5/images/nixiaozi.jpg');
    alldaihaoyuan.push(nixiaozi);

    wink = loadImage('/lab5/images/wink.jpg');
    alldaihaoyuan.push(wink);

    wo = loadImage('/lab5/images/wo.jpg');
    alldaihaoyuan.push(wo);

    xixi = loadImage('/lab5/images/xixi.jpg');
    alldaihaoyuan.push(xixi);

    xuezhang = loadImage('/lab5/images/xuezhang.jpg');
    alldaihaoyuan.push(xuezhang);

    data = loadJSON('data.json');
}

function setup(){
    createCanvas(800, 400);
    console.log(data);
}

function draw(){
    background('#ede0a3');
    text(data.coffee[index],30,30);
    index++;
    index = index % data.coffee.length;
    image( alldaihaoyuan[currentgengtu], daihaoyuanposition.x, daihaoyuanposition.y, daihaoyuanposition.w, daihaoyuanposition.h);
}

function mousePressed(){
    // if we click the kitty, increment currentKitty and change position
    if( mouseX > daihaoyuanposition.x && mouseX < daihaoyuanposition.x+daihaoyuanposition.h
        && mouseY > daihaoyuanposition.y && mouseY < daihaoyuanposition.y+daihaoyuanposition.h){
        currentgengtu++;
        currentgengtu = currentgengtu % alldaihaoyuan.length;
        daihaoyuanposition.x = random(width-daihaoyuanposition.w);
        daihaoyuanposition.y = random(height-daihaoyuanposition.h);
    }
}