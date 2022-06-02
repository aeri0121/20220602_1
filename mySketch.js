colors = "565264-706677-a6808c-ccb7ae-d6cfcb".split("-").map(a=>"#"+a)
class Ball{	//建立物件
	constructor(){	//預設值，
		//數值都為隨機抽取
		this.p = {x:random(width),y:random(height)} //物件的起始位置
		this.v = {x:random(-1,1),y:random(-1,1)}  //物件移動的速度
		this.r =random(100,200)	//物件大小
		this.color = random(colors)	//顏色
	}
}
var ball
var balls = []	//宣告一個櫃子
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	/*宣告一個圓的屬性
	ball={ 
		p:{x:50,y:50,},	//p為位置
		v:{x:0,y:1},	//v為速度
		r:100,	//r為值
		color:	color(252,68,68)
	}
	*/
	//放進櫃子
	for(var i=0;i<100;i++){
		ball = new Ball()	//產生一個新的Ball class元件
		balls.push(ball)
	}
}

function draw() {
	background(100)
	//顯示
	for(var i =0;i<balls.length;i++){
	//放入變數名稱
	let ball = balls[i] 
	fill(ball.color)
	circle(ball.p.x, ball.p.y,ball.r);
	ball.p.x += ball.v.x	
	ball.p.y += ball.v.y
	}


function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
}