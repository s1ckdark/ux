// variables
var navi = document.getElementsByClassName('section-nav'),
	naviText = document.getElementsByClassName('section-nav-text'),
	lineOne = document.getElementsByClassName('one'),
    lineTwo = document.getElementsByClassName('two'),
    lineThree = document.getElementsByClassName('three'),
    lineFour = document.getElementsByClassName('four'),
    duration = 0.18,
    alphaduration = 0.15,
    rotation = 45,
    ease = Back.easeOut.config(1);

// animations
var flipTheBurger = new TimelineMax({paused:true, reversed:true})
    .to(lineOne, alphaduration, {y:-41, opacity:0}, 0)
    .to(lineFour, alphaduration, {y:41, opacity:0}, 0)
    .to(lineTwo, duration, {rotation:rotation, transformOrigin:"center center", ease:ease}, 0.1)
    .to(lineThree, duration, {rotation:-rotation, transformOrigin:"center center", ease:ease}, 0.1)
    .to(navi, duration, {width:'100%',height:'100%',backgroundColor:'#121212',position:'fixed'}, 0.2)
    .to(naviText, duration, {autoAlpha:1}, 0.5);

document.getElementById('sectionNav').onclick = function(e){
  flipTheBurger.reversed() ? flipTheBurger.play() : flipTheBurger.reverse();
}
