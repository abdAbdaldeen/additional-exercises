var ms=0,s=0,m=0;
var timer;
isrun=false;
function start(){
    if(!isrun){
        isrun = true;
        $('#playPause').html('<i class="fas fa-pause"></i>');
        timer = setInterval(run, 10);
        $('#stopwatch').addClass('run');
    }
    else{
        isrun=false;
        clearInterval(timer);
        $('#playPause').html('<i class="fas fa-play"></i>');
    }
    
    
}
function run (){
    
    $("#stopwatch").text((m<10 ? "0"+m : m) +":" +(s<10 ? "0"+s : s) +":" + (ms<10 ? "0"+ms : ms));
    ms++;
    if(ms == 100){
        ms=0;
        s++;
    }
    if(s == 60){
        s=0;
        m++;
    }
}

function restart(){
    isrun=false;
    clearInterval(timer);
    s = m =ms =0;
    $("#stopwatch").text("00:00:00");
    $('#stopwatch').removeClass('run');
}