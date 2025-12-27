let gameseq=[];
let userseq=[];
let btns=["yellow","green","red","purple"];

let started=false;
let level =0;

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){

    if(started==false){
    console.log("Game start");
    started=true;
    levelup();
}
}
);
function gameflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash")
},250)

}
function userflash(btn){
btn.classList.add("userflash");
setTimeout(function(){
    btn.classList.remove("userflash")
},250)
}
 
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`

    let randIdx=Math.floor(Math.random()*3);
    let randcol=btns[randIdx];
    randBtn=document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq)
    gameflash(randBtn);

}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000)
        }
    }
    else{
      h2.innerHTML=`Game Over ! Your score was <b> ${level}</b> <br> Please press any key to restart the Game` ;
      document.querySelector("body").style.backgroundColor="red";
      setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
      },500)
      reset();
    }
}

 function btnpress(){
    console.log(this);
   let btn=this;
   userflash(btn);
  usercolor=btn.getAttribute("id");
    console.log(usercolor)
    userseq.push(usercolor)

    checkans(userseq.length-1);

 }

 let allbtns=document.querySelectorAll(".btn")
 for(btna of allbtns){
    btna.addEventListener("click",btnpress);
 }


 function reset(){
    gameseq=[];
    userseq=[];
    started=false;
    level =0;
 }