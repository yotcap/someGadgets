let ball = document.getElementById("ball");
let	v = 0,	//时刻速度
	temp = 0,	//最高点
	i = 0;
const initalPositionTop = ball.offsetTop,	//初始位置
	initalPositionLeft = ball.offsetLeft;
const distance = 400,	//总距离
	g = 0.03,	//重力加速度
	horizontalSpeed = 1,	//水平速度
	time = 1;	//时间

//下落
function downBall() {
	if ((ball.offsetTop <= distance) && (ball.offsetTop >= 0)) {	//判断是否到底部
		setTimeout(function() {
			v = (ball.offsetTop - temp + distance * 0.1) * g;	//某时刻的速度
			v = v > 0 ? Math.ceil(v) : Math.floor(v);
			ball.style.top = ball.offsetTop + v + 'px';	//垂直移动
			ball.style.left = ball.offsetLeft + horizontalSpeed + 'px';	//水平移动
			downBall();
		}, time);
	} else {
		if ((distance - temp) <= 0) { return false; }	//停止判断
		if (i === 0) { temp = Math.floor(distance * 0.5); i++; }	//第一次的跳起高度temp
		upBall();
	}
}
//跳起
function upBall() {
	if (ball.offsetTop >= temp) {	//判断是否到达跳起的最高点
		setTimeout(function() {
			if (ball.offsetTop - temp <= 2) { temp += distance * 0.1; }	//接近最高点后更新最高点temp
			v = (ball.offsetTop - temp) * 0.05;	//上升的某时刻速度
			v = v > 0 ? Math.ceil(v) : Math.floor(v);
			//console.log("up   ball: "+ball.offsetTop+"  temp: "+temp);
			ball.style.top = ball.offsetTop - v + 'px';
			ball.style.left = ball.offsetLeft + horizontalSpeed + 'px';
			upBall();
		}, time);
	} else {
		downBall();
	}
}
function reset() {
	v = 0;
	i = 0;
	temp = 0;
	ball.style.top = initalPositionTop + 'px';
	ball.style.left = initalPositionLeft + 'px';
}
