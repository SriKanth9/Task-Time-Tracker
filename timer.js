function TrackMultipleTask(){
  this.start = function(){
var taskTemp=document.getElementById("task-template");
var cloneTask = taskTemp.cloneNode(true);
var clnode = document.getElementById("task-area-list").appendChild(cloneTask);
clnode.style.display = "block";
document.getElementById("start-task").addEventListener("click",recordTask);
  }
function recordTask(){
  createRecord();
  //createButtons();
}
function createRecod(){
var stTime = new timer();
var coutTime = setInterval(stTime.startTime,1000);
}
function createButtons(){
  createTimer();
}
function createTimer(){

}
}
function timer(){
  var x = 10,y = 20;
  this.startTime = function(){
    console.log(x+y);
  }
}

function Timer(){
  var srcTime = "";
  this.time = function(){
    var h=0,m=0,s=0;
    if(s==59){
      sec++;
      if(sec<10){
        srcTime="0"+h+":0"+m+":0"+s;
      }else if(m<10){
        srcTime="0"+h+":0"+m+":"+s;
      }else if(h<10){
        srcTime="0"+h+":"+m+":"+s;
      }else{
        srcTime=h+":"+m+":"+s;
      }
    document.getElementById("task-tm").innerHTML = srcTime;
  }else if(m<59){
    m++;
    sec=0;
  }else if(h<23){
    h++;
    m=0;
    s=0;
  }else{
    document.getElementById("task-tm").innerHTML = "24:00:00";
  }
  }
}

window.onload = function(){
  var trackTime = new TrackMultipleTask();
  document.getElementById("newTask").addEventListener("click",trackTime.start);
}
