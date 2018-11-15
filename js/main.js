  var $slide = $('.vSlide');
  var vScroll = $slide.height();  
  var controller = new ScrollMagic.Controller();
  var dur = $slide.height() / 120;


  // var verticalSlide = new TimelineMax()
  // .fromTo($slide.find('.img'), .5, {autoAlpha:0,scale:.2},{autoAlpha:1, y: -vScroll,ease:Linear.easeNone,scale:1.2},.5)  
  // .fromTo($slide.find('h1'), .5, {autoAlpha:0,scale:.2},{autoAlpha:1, y: -vScroll,ease:Linear.easeNone,scale:1.2},1)  

  // create scene to pin and link animation
  $slide.each(function(el,i){
    console.log(i);
    var hNavi = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0,
    duration: dur,
    reverse:true
    })
    .setPin(this)
    .on('start end enter leave', function(e){
      if(e.type == 'enter'){
     var timeline = new TimelineMax()
      .staggerFromTo($slide.eq(el).find('.img'), .5,{autoAlpha:0,y:'100%',scale:.5}, {autoAlpha:1, transform:'translate(-50%,-50%)',ease:Linear.easeNone,scale:1},.1)  
      .staggerFromTo($slide.eq(el).find('h1'), .5, {autoAlpha:0,x:'-100%',scale:.5},{autoAlpha:1, transform:'translate(-50%,-100px)',ease:Linear.easeNone,scale:1},.1)  
      .to($slide.eq(el),.1,{className:'vSlide active'})
    } else if(e.type=='leave') {
      var timeline = new TimelineMax()
      .staggerFromTo($slide.eq(el).find('h1'), .5, {autoAlpha:1, transform:'translate(-50%,-100px)'},{autoAlpha:0, transform:'translate(150%,-100px)',scale:.5,ease:Linear.easeNone,scale:1},.1)  
      .staggerFromTo($slide.eq(el).find('.img'), .5,{autoAlpha:1, transform:'translate(-50%,-50%)'}, {autoAlpha:0,transform:'translate(-50%,-150%)',scale:.5,ease:Linear.easeNone},.1)  
      .to($slide.eq(el),.1,{className:'vSlide'})
    } 
    })
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
})
  $('#slider-navi > .prev').click(function(){
     var $next = $(".active").parent().prev();
     if($next.length == 0){
      offset = $('.vSlide').last().offset().top;
     } else {
      offset = $next.offset().top; 
     }
     // $(window).animate({
     //     scrollTop: offset
     // }, 1500);
var body = $("body");
body.stop().animate({scrollTop:offset}, 500, 'swing', function() { 
});
          console.log("prev"+offset);
  })
  $('#slider-navi > .next').click(function(){
     var $next = $(".active").parent().next();
     if($next.length == 0){
      offset = 0;
     } else {
      offset = $next.offset().top; 
     }
var body = $("body");
body.stop().animate({scrollTop:offset}, 500, 'swing', function() { 
});
         console.log("next"+offset);
  })

    $('#intro').bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta /120 > 0) {
           $('#slider-navi > .prev').click();
        }
        else{
             $('#slider-navi > .next').click();
        }
    });