const boxes=Array.from(document.getElementsByClassName("box"));
const play=document.getElementById("play");//win message
const restartBtn=document.getElementById("restartBtn");
const spaces=[];//if something is in the box we dont want user to click on it
const O_TEXT='0';
const X_TEXT='X';
var count=0;
let currentPlayer; 
console.log(boxes);
const drawBoard=()=>{ //used to draw board 
    boxes.forEach((box, index) => { //taking each box and index of each box
        let styleString=''; //to add borders we take empty styleString
        if(index<3){ //box is on the top 
            styleString+=`border-bottom:3px solid var(--purple);`;//sets bottom line
        }
        if(index%3===0){//we are on left
            styleString+=`border-right:3px solid var(--purple);`;//sets the right line
        }
        if(index%3===2){//we are on right
            styleString+=`border-left:3px solid var(--purple);`;//sets the left line
        }
        if(index>5){ //box is at the bottom
            styleString+=`border-top:3px solid var(--purple);`;//sets the top line
        }
        box.style=styleString; 
        box.addEventListener('click',boxClicked);//whether box is clicked/not
    });
};
const boxClicked=(e)=> {//adding boxclicked function
    const id=e.target.id;//getting id of the element
    count++;//increments the count value
    console.log("count"+count)//counting the number of times box have been clicked
    
    if(!spaces[id]) {//if nothing in spaces
        spaces[id]=currentPlayer;
        e.target.innerText=currentPlayer;//setting inner box to current player
        
        if(playerHasWon()){//handling if player has won
            play.innerText=`${currentPlayer} has won!`;
            return;
        }
        if(!spaces.includes(null) && count==9){ //if all spaces are filled and count is 9 returns draw
            play.innerText="Draw";
        }
        currentPlayer=currentPlayer===O_TEXT ? X_TEXT : O_TEXT; /*if current player=O then  X otherwise we set O */
        
    }

};
const playerHasWon=()=>{ //checking if player has won (conditions)
    if(spaces[0]===currentPlayer){
        if(spaces[1]===currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if(spaces[3]===currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} wins up left`);
            return true;

        }
        if(spaces[4]===currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} wins up diagonally`);
            return true;
        }
    } if(spaces[8]===currentPlayer){
        if(spaces[2]===currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins up top`);
            return true;
        }
        if(spaces[6]===currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins up left`);
            return true;

        }
        
    } if(spaces[4]===currentPlayer){
        if(spaces[3]===currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} wins up middle`);
            return true;
        }
        if(spaces[1]===currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} wins up straight`);
            return true;

        }
       
    }if(spaces[2]===currentPlayer){
        if(spaces[4]===currentPlayer && spaces[6]===currentPlayer){
            console.log(`${currentPlayer} wins diagonally`);
            return true;
        }
    }
};

const restart =()=>{
    spaces.forEach((space,index)=>{ //wipe out each space
        spaces[index]=null;
    });
    boxes.forEach(box=>{
        box.innerText='';//wipe out text 
    });
    play.innerText="Let's Play!";
    currentPlayer=O_TEXT;//reset current player 
};
restartBtn.addEventListener('click',restart);//listening for click event for restart
restart();
drawBoard();