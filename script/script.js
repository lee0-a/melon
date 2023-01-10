let swiper = new Swiper(".mySwiper", {
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

  let time = 200;
  let min = "";
  let sec = "";
  

  let x =setInterval(function(){
    let totalSeconds = 0;
    let hour = Math.floor(totalSeconds / 200);
    min = parseInt(time/60);
    sec = time%60;

    document.getElementById("demo").innerHTML = min + ":" + sec;
    time--;

   
    
  }, 1000);

  let timerVariable = setInterval(countUpTimer, 1000);
  let totalSeconds = 0;

function countUpTimer() {
  ++totalSeconds;
  
  let hour = Math.floor(totalSeconds / 200);
  let minute = Math.floor((totalSeconds - hour *200) / 60);
  let seconds = totalSeconds - (hour * 200 + minute * 60);
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

/*let type =setInterval(function(){*/

  new TypeIt('#typeitspan', {
    strings: 'The blood is rare and sweet as cherry wine.',
    speed: 150, 
    afterComplete: function (instance) {
      instance.destroy();
    }
  }).go();

/*}, 3000);*/

