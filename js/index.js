const badgeE1 = document.querySelector('header .badges');

console.log(badgeE1);

window.onload = function(){
    if(window.screenY > 500){
        gsap.to("#to-top",0.6,{
            x:0
        });
    }else{
        gsap.to("#to-top",0.6,{
            x:100
        });
    }
}


window.addEventListener('scroll', _.throttle(function(){
    if(window.scrollY > 500){
        //뱃지숨기기
        // badgeE1.style.display = 'none';
        //gsap.to(요소, 지속시간, 옵션)
        gsap.to(badgeE1,0.6,{
            opacity:0,
            display:'none'
        });

        //버튼 보이게하기
        gsap.to("#to-top",0.6,{
            x:0
        });

    }else{
        //뱃지 나오기
        badgeE1.style.display = 'block';
        gsap.to(badgeE1,0.6,{
            opacity:1
        });

        //버튼 숨기기
        gsap.to("#to-top",0.6,{
            x:100
        })
    }
},300));

const fadeEs = document.querySelectorAll('#body_layout .fade-in');

fadeEs.forEach(function(fadeEl,index){
    //console.log(fadeEl);
    //console.log(index);
    gsap.to(fadeEl,1,{
        opacity:1,
        delay: (index+1)*0.7
    });
});

//new swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
    direction : 'vertical',
    autoplay: true,
    loop:true
});

new Swiper('.promotion .swiper-container',{
    slidesPerView : 3,  //한번에 보여줄 슬라이드 갯수
    spaceBetween : 10,  //슬라이드 사이의 마진
    centeredSlides : true,
    loop : true,
    autoplay : {
        delay : 5000
    },
    pagination:{
        el: '.swiper-pagination', //pagination의 기능을 담을 변수를 만들고 저장
        click:true              //누르는 기능이 추가 되었을때
    },
    navigation:{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    }
})

const promotionEl = document.querySelector('.promotion');
// console.log(promotionEl);

const promotiontoggle = document.querySelector('.toggle-promoton');
// console.log(promotiontoggle);

let isHidePromotion = false;
//true면 숨기기, false면 보이기

promotiontoggle.addEventListener('click', function(){

    isHidePromotion = !isHidePromotion;
    if(isHidePromotion){
        promotionEl.classList.add('hide');
    }else{
        promotionEl.classList.remove('hide');
    }
});

//범위 랜덤 함수
function random(min, max){
    //.toFiexd()를 통해반환된 문자 데이터를
    //parseFloat()을 통해 소수점을 가지는 숫자데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


function floatingObject(selector,delay, size){
    //gsap.to(요소,시간,옵션)
    gsap.to(selector,1,{
        y:20,
        repeat:-1,
        yoyo:true,
        ease : Power1.easeInOut,
        delay:random(0,delay)
    });
}

floatingObject('.floating1',1,15);
floatingObject('.floating2',.5,15);
floatingObject('.floating3',1.5,20);


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
    // id맞 찾아짐
    new YT.Player('player', {
    
    // 영상 재생할 유튜브 ID
    videoId: 'qewfsI9c320', //처음재생할 영상

    // 유투브 어떻게 재생할 건지
    playerVars:{
        autoplay:true, //자동재생 유무
        loop:true, //반복재생 유무
        playlist:['qewfsI9c320','DwDqAzSk2ew'] //반복해서 재생할 유튜브 영상 목록
    },

    events:{
        onReady:function(event){
            event.target.mute() //음소거
        }
    }
  });
}

const spyEls = document.querySelectorAll('section.scroll-spy');
// console.log(spyEl);

spyEls.forEach(function(spyEl){
    new ScrollMagic
    .Scene({
        triggerElement: spyEl,   //보여짐요소를 감시할 요소
        triggerHook: .8
    })
    .setClassToggle(spyEl,'show')
    .addTo(new ScrollMagic.Controller());   //controller=스크롤할 때 보여지는 기능
});

new Swiper('#award .swiper-container',{
    autoplay:true,
    loop:true,
    spaceBetween:30,
    slidesPerView:5
    ,navigation : {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
    }
});

const toTopEl = document.querySelector("#to-top");

toTopEl.addEventListener('click',function(){
    gsap.to(window,0.7,{
        scrollTo:0
    });
});

