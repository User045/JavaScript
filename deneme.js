$(function(){

$(".menu").on({

mouseover:function(){
    $(this).css("color","gray");
},
mouseleave:function(){
    $(this).css("color","white")
}


})
animasyon();

function animasyon(){
var say=1;
setInterval(function(){

    var a="p"+say+".jpg"

  $("#hd_goruntu").fadeOut(3000,function(){

$(this).queue(function(){

$(this).attr("src", a);

$(this).dequeue();

});

$(this).fadeIn(3000);

  })

say++;

if(say==6){

    say=1;

}

},6000)

}


})