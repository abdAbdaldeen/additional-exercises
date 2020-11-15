var isDisappear = false;
function animation() {
    var rs = document.getElementById("rightS");  
    var ls = document.getElementById("leftS");   
    var button = document.getElementById("button");
    if(!isDisappear){
        isDisappear=true;
        button.innerText = "Appear";
    let op = 1;
    rs.style.opacity = op ; 
        ls.style.opacity = op ; 
    let id = setInterval(f1, 5);
    function f1() {
      if (op <= 0) {
        clearInterval(id);
      } else {
        op-=0.005;
        rs.style.opacity = op ; 
        ls.style.opacity = op ; 
      }
    }
}
else{
    isDisappear = false;
    button.innerText = "Disappear";
    let op = 0;
    rs.style.opacity = op ; 
        ls.style.opacity = op ; 
    let id = setInterval(f2, 5);
    function f2() {
      if (op >= 1) {
        clearInterval(id);
      } else {
        op += 0.005;
        rs.style.opacity = op ; 
        ls.style.opacity = op ; 
      }
    }
}
  }