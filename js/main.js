// var rotateImg = document.getElementsByClassName('rotateImg');
// TweenMax.set(rotateImg, {autoAlpha:0,zIndex:-1});
// var rotateImgTween = new TimelineMax({paused:true,repeat:-1,reversed:true});
// for (var i = 0, len = rotateImg.length; i < len; i++) {
//   rotateImgTween.add(TweenMax.to(rotateImg[i], 1,{autoAlpha:1,rotation:360,transformOrigin:"50% 50%"},i));
//   rotateImgTween.add(TweenMax.to(rotateImg[i], 1,{autoAlpha:0,delay:2},i));
// }

// var lazyload= new LazyLoad({
//     elements_selector: ".lazyload"
// });


// var mainImg = document.querySelectorAll('#main img');
// // TweenMax.set(mainImg, {autoAlpha:0});
// 	var mainTween = new TimelineMax({paused:true, revered:true, repeat:-1});
// 	mainImg.forEach(function(e,i){
// 		mainTween.add(TweenMax.to(e, 2, {autoAlpha:1},1))
// 	})
// 	// mainTween.play();\
 //    var vImage = document.querySelectorAll('.vslide');
 //    var vScroll = document.querySelector('.vSlide').offsetHeight;	
	// var controller = new ScrollMagic.Controller();

	// var verticalSlide = new TimelineMax()
	// // animate panels
	// .to("#intro", 1, {y: vScroll})	

	// // create scene to pin and link animation
	// var hNavi = new ScrollMagic.Scene({
	// triggerElement: "#intro",
	// triggerHook: "enter",
	// duration: vImage.length*vScroll
	// })
	// .setPin("#intro")
	// .setTween(verticalSlide)
	// .addIndicators() // add indicators (requires plugin)
	// .addTo(controller);



// var imgTween = new TimelineMax({
// 			onComplete: function(){
// 				imgTween.restart();
// 			}
// 		});

 
// TweenMax.defaultEase = Circ.easeInOut;

// var time = 2;
// var y = document.querySelector('.vSlide').offsetHeight;
// console.log(document.querySelector('.vSlide').offsetHeight);
// imgTween.add(TweenMax.staggerFromTo('.vSlide', time,	{opacity: 0,y:+y,},{opacity: 1,y: 0}, 2))
// 	 	.add(TweenMax.staggerTo('.vSlide', time, {delay: time, opacity: 0, y: -y},2), 1.3)


// var vSlide = document.querySelectorAll('.vSlide');

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({
//     triggerElement:'.vSlide',
//     triggerHook:'onCenter',
//     duration: vSlide.length*700
// })
// .addTo(controller)
// .addIndicators()  
// .on("update", function(e) {
//     var move = e.target.controller().info("scrollDirection");
//     var currentPosition = 0;
//     console.log(e);
//        if ( move == "REVERSE" && currentPosition == 0) {
//             TweenMax.to("#intro .wrapper", 0.3, {top: "700px", ease: Linear.easeNone});
//             console.log("up");
//             currentPosition++;
//             console.log(currentPosition);
//             TweenMax.fromTo(vSlide[currentPosition], .3, {autoAlpha:0},{autoAlpha:1});
//         } else {
//         	TweenMax.to("#intro .wrapper", 0.3, {top: currentPosition*700+"px", ease: Linear.easeNone});
//             console.log("up");
//             currentPosition++;
//             console.log(currentPosition);
//             TweenMax.fromTo(vSlide[currentPosition], .3, {autoAlpha:0},{autoAlpha:1});

//         }
//         if ( move == "FORWARD" && currentPosition == 0) {
//             TweenMax.fromTo("#intro .wrapper", 0.3, {position: "absolute", top: "0px"}, {top: "-700px", ease: Linear.easeNone});
//             console.log("down");
//             currentPosition--;
//         }       

// })

 
 var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  mousewheel: true,
  loop: true,
  freeMode: true,
  freeModeSticky: true,
  freeModeMomentumVelocityRatio : 5,
  freeModeMinimumVelocity:1,
  navigation:{
  	nextEl:'.swiper-next',
  	prevEl:'.swiper-prev'
  }
});

