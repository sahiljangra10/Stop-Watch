let time=document.getElementById("time");
let sec=0;
let min=0;
let hour=0;
let timer=null;
function displayTime(){
  if(timer!==null){
    clearInterval(timer);
  }
  timer = setInterval(()=>{
    sec++;
    if(sec>=60){
      min++;
      sec=0;
    }
    else if(min>=60){
      hour++;
      min=0;
    }
    let h=hour<10 ?"0"+hour : hour;
    let m=min<10 ?"0"+min : min;
    let s=sec<10 ?"0"+sec : sec;
    time.innerHTML=`${h}:${m}:${s}`;
  },1000)
}

function watchStop(){
  clearInterval(timer);
}

function watchReset(){
  clearInterval(timer);
  sec=0;
  min=0;
  hour=0;
  time.innerHTML=`00 : 00 : 00`;
}