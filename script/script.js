Start();
var imgs=2;
var now=0;
function start(){
 $(".slide>img").eq(0).siblings().css({"opacity":"0", "transition":"all 1s"});
    setInterval(function(){slide();},3000);
}
function slide(){
    now=now==imgs?0:now+=1;
    $(".slide>img").eq(now-1).css({"opacity":"0", "transition":"all 1s"});
    $(".slide>img").eq(now).css({"opacity":"1", "transition":"all 1s"});
}
$(function(){
    $(".icons").css({"opacity":"0","margin-top":"-2000px"});

    $(window).on("scroll",function(){
        if($(window).scrollTop()>900){
            $(".icons").animate({marginTop:"0",opacity:"1"},1200,"linear")
            
        }
    });
});
