function TrackMultipleTask(){
  this.start = function(){
var taskTemp=document.getElementById("task-template");
var cloneTask = taskTemp.cloneNode(true);
var clnode = document.getElementById("task-area-list").appendChild(cloneTask);
clnode.style.display = "block";

var btns = document.getElementsByClassName("start-tsk");
for(var i=0;i<btns.length;i++){
  btns[i].onclick = function(){
      
  }
}
}
}

function Timer(){
  var srcTime = "";
    var h=0,m=0,s=0;
  var interval = setInterval(function(){
    if(s<=59){
      s++;
      if(s<10){
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
    s=0;
  }else if(h<23){
    h++;
    m=0;
    s=0;
  }else{
    document.getElementById("task-tm").innerHTML = "24:00:00";
  }
  },1000);
}

window.onload = function(){
  var trackTime = new TrackMultipleTask();
  document.getElementById("newTask").addEventListener("click",trackTime.start);
}
