var g = [1,2,3,4,5,6,7,8,0];
var l = [];
var n = 0;

do {
	ri = Math.floor(Math.random()*(g.length));//generates a random value
	r = g[ri];
//avoids the similar random values
	if(r!=-1) {
		l.push(r);
		g[ri] = -1;
		n+=1;
	}

} while(n<9);

function drawPuzzle() {//shuffles the image pieces
	for(i=0;i<9;i++) {
		document.getElementsByTagName('td')[i].innerHTML = '<img src="'+l[i]+'.jpg">';
	}
	checkwin();
}
function keyPressed(e) {//key values for the keyboard keys
	k = e.keyCode;
	if(k==38) {moveUp();}
	if(k==40) {moveDown();}
	if(k==37) {moveLeft();}
	if(k==39) {moveRight();}
}

function moveDown() {//for the down key
	if(l.indexOf(0)>2) {
		i = l.indexOf(0);
		j = i - 3;
		t = l[i];//swapping occurs here
		l[i] = l[j];
		l[j] = t;
		drawPuzzle();
	}
}
function moveUp() {
	if(l.indexOf(0)<6) {
		i = l.indexOf(0);
		j = i + 3;
		t = l[i];
		l[i] = l[j];
		l[j] = t;
		drawPuzzle();
	}
}
function moveRight() {
	i = l.indexOf(0);
	if(!(i==0 || i==3 || i==6)) {
		j = i - 1;
		t = l[i];
		l[i] = l[j];
		l[j] = t;
		drawPuzzle();
	}
}
function moveLeft() {
	i = l.indexOf(0);
	if(!(i==2 || i==5 || i==8)) {
		j = i + 1;
		t = l[i];
		l[i] = l[j];
		l[j] = t;
		drawPuzzle();
	}
}

function checkwin() {//win condition
	var a=1;
	for(i=0;i<8;i++){
		if(l[i]!=i+1){
			a=0
		}
	}if(a==1){
		alert("you win")
	}
}
drawPuzzle();