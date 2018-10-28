Vue.component('projects-component', {
  template: `<div class="depth">
		<img :src="project.img"></img>
		<a v-on:click="loadProject(project.title)">{{ project.title }}</a>
		</div>
	`,
  props: {
    project: Object,
  },
 methods: {
    loadProject: function (projectNm) {
    	console.log("load");
    	let closeBtn = document.getElementById('closeBtn');
    	closeBtn.style.display = "block";
    	let projectTrim = projectNm.replace(/ /g, '');
    	let pnm = document.getElementById(projectTrim);
    	let projectDiv = document.getElementById("projects");

    	var projectId = document.createElement("div");
    	projectId.setAttribute("id",projectTrim);
    	projectId.setAttribute("class","project");
    	var heading = document.createElement("h1");
		var headingText = document.createTextNode(projectNm);
		heading.appendChild(headingText);
		projectId.appendChild(heading);
		projectDiv.appendChild(projectId);
		var image = document.createElement("div");
		image.setAttribute("id","projectImg");
		projectId.appendChild(image);
		this.project.content.map(function(img){
			var imageInsert = document.createElement("img");
			imageInsert.setAttribute("class","object");
			imageInsert.setAttribute("src",img);
			image.appendChild(imageInsert);
		})

		var navi = document.createElement("div");
		navi.setAttribute("id","projectNavi");
		var prev = document.createElement("div");
		var prevText = document.createTextNode("prev");
		prev.appendChild(prevText);
		prev.setAttribute("id","prev");
		var returnback = document.createElement("div");
		var returnbackText = document.createTextNode("return");
		returnback.appendChild(returnbackText);
		returnback.setAttribute("id","returnback");
		var next = document.createElement("div");
		var nextText = document.createTextNode("next");
		next.appendChild(nextText);
		next.setAttribute("id","next");
		projectId.appendChild(navi);
		navi.appendChild(prev);
		navi.appendChild(returnback);
		navi.appendChild(next);

		var controller = new ScrollMagic.Controller();
		var object = document.querySelectorAll('.object');
		object.forEach(function(obj){
		new ScrollMagic.Scene({
			triggerElement:obj,
			triggerHook: 'onEnter'
		})
		.setTween(obj,.5,{autoAlpha:1,top:'-50px'})
		.addIndicators()
		.addTo(controller);
		})
  	}
}
});



let projectsNavi = new Vue({
  el: 'app',
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
  },
  methods:{
  	closeBtn: function(){
	    // Removes an element from the document
	    console.log("close");
	    var element = document.getElementsByClassName('project');
	    element[0].parentNode.removeChild(element[0]);
	    closeBtn.style.display="none";
  	}
  }
})
