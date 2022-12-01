var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    autoplay:{
        delay : 3000
    },
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var time = 200;
  var min = "";
  var sec = "";
  

  var x =setInterval(function(){
    var totalSeconds = 0;
    var hour = Math.floor(totalSeconds / 200);
    min = parseInt(time/60);
    sec = time%60;

    document.getElementById("demo").innerHTML = min + ":" + sec;
    time--;

   
    
  }, 1000);

  var timerVariable = setInterval(countUpTimer, 1000);
var totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  
  var hour = Math.floor(totalSeconds / 200);
  var minute = Math.floor((totalSeconds - hour *200) / 60);
  var seconds = totalSeconds - (hour * 200 + minute * 60);
  document.getElementById("count_up_timer").innerHTML = minute + ":" + seconds;
};

$('.pb_icon> .p_list').click(function(){
  $('#modalWrap').addClass("active");
});
$('.btn').click(function(){
  $('#modalWrap').removeClass("active");
});

$("html").easeScroll({
  frameRate: 60,
  animationTime: 2000,
  stepSize: 120,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 50
});

/*var type =setInterval(function(){*/

  new TypeIt('#typeitspan', {
    strings: 'The blood is rare and sweet as cherry wine.',
    speed: 150, 
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();

/*}, 3000);*/

