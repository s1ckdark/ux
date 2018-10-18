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

var rotateImg = document.getElementsByClassName('rotateImg');
TweenMax.set(rotateImg, {autoAlpha:0,zIndex:-1});
var rotateImgTween = new TimelineMax({paused:true,repeat:-1,reversed:true});
for (var i = 0, len = rotateImg.length; i < len; i++) {
  rotateImgTween.add(TweenMax.to(rotateImg[i], 1,{autoAlpha:1,rotation:360,transformOrigin:"50% 50%"},i));
  rotateImgTween.add(TweenMax.to(rotateImg[i], 1,{autoAlpha:0,delay:2},i));
}

var lazyload= new LazyLoad({
    elements_selector: ".lazyload"
});

Vue.component('projects-component', {
  template: ` 
	<div class="depth">
		<img :src="project.img"></img>
		<a>{{ project.title }}</a>
	</div>
`,
  props: {
    project: Object
  }
});

let projectsNavi = new Vue({
  el: '#projectsNavi',
  data() {
    return {
      projects: []
    }
  },
  created() {
    const url = 'http://127.0.0.1:8080/js/project.json';
    this.$http.get(url).then(data => {
      const items = JSON.parse(data.response).Items;
      items.map(item => {
        this.projects.push(item)
      })
    })
  }
})
