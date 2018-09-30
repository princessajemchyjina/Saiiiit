var App = {
	globals:{
		block_allPhotos : document.querySelector(".allPhotos"),
		photos: document.querySelectorAll(".hidden"),
		points: document.querySelectorAll(".circle"),
		right_Btn:document.querySelector(".right"),
		left_Btn:document.querySelector(".left")
	},
	init : function(){
		//вставвил в начало последнюю фотографию
		// var div = document.createElement("div");
		// div.innerHTML = "<img src=\""+App.globals.photos[App.globals.photos.length-1].getAttribute("src")+"\" alt=\"\" class=\"hidden\">";
		// App.globals.block_allPhotos.insertBefore(div,App.globals.block_allPhotos.firstChild)
		
		// App.globals.block_allPhotos.children[App.globals.block_allPhotos.children.length-1].remove();

		App.globals.points[0].classList.remove("circle");
		App.globals.points[0].classList.toggle("circleIn");

		App.click_LeftBtn();
		App.click_RightBtn();
		App.click_onPoints();
		App.ifinite_galery();
	},
	click_LeftBtn : function(){

		// App.globals.left_Btn.addEventListener("click", function(){
		// 	var marginLeft_Block = parseFloat(window.getComputedStyle(App.globals.block_allPhotos).marginLeft);
		// 	console.log(marginLeft_Block)
		// 	var width_IMG = parseFloat(window.getComputedStyle(App.globals.photos[0]).width);
		// 	App.globals.block_allPhotos.style.marginLeft = marginLeft_Block+width_IMG+"px";

		// 	var div = document.createElement("div");		
		// 	App.globals.photos = document.querySelectorAll(".hidden");
		// 	div.innerHTML = "<img src=\""+App.globals.photos[App.globals.photos.length-1].getAttribute("src")+"\" alt=\"\" class=\"hidden\">";
		// 	App.globals.block_allPhotos.insertBefore(div,App.globals.block_allPhotos.firstChild)
		// 	App.globals.block_allPhotos.children[App.globals.block_allPhotos.children.length-1].remove();
		// 	console.log(div)

		// }) Таким способом не получается, так как оно не высчитывает за одно событие 2 раза margin

		App.globals.left_Btn.addEventListener("click", function(){
			var marginLeft_Block = parseFloat(window.getComputedStyle(App.globals.block_allPhotos).marginLeft);
			var width_IMG = parseFloat(window.getComputedStyle(App.globals.photos[0]).width);
			var len = App.globals.photos.length;
			//делаю проверку на 1 ли эта фотография или нет
			if(marginLeft_Block<-20){ //margin-left = 0, но из-за Javascripta надо брать поправку, примерно 15-20px
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block+width_IMG+"px";
				for(var i = 0; i< len; i++){
					if(App.globals.points[i].classList.contains("circleIn")){
						App.globals.points[i].classList.remove("circleIn");
						App.globals.points[i].classList.toggle("circle");
						App.globals.points[i-1].classList.remove("circle");
						App.globals.points[i-1].classList.toggle("circleIn");
					}
				}
			}
			else{
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block-((len-1)*width_IMG)+"px";
				App.globals.points[0].classList.remove("circleIn");
				App.globals.points[0].classList.toggle("circle");
				App.globals.points[len-1].classList.remove("circle");
				App.globals.points[len-1].classList.toggle("circleIn");
			}			
		})
	},
	click_RightBtn : function(){
		App.globals.right_Btn.addEventListener("click", function(){
			var marginLeft_Block = parseFloat(window.getComputedStyle(App.globals.block_allPhotos).marginLeft);
			var width_IMG = parseFloat(window.getComputedStyle(App.globals.photos[0]).width);
			var len = App.globals.photos.length;
			if(marginLeft_Block>(-1)*(len-1)*width_IMG+20){
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block-width_IMG+"px";
				for(var i = 0; i< len-1; i++){
					if(App.globals.points[i].classList.contains("circleIn")){
						console.log(App.globals.points[i])
						App.globals.points[i].classList.remove("circleIn");
						App.globals.points[i].classList.toggle("circle");
						App.globals.points[i+1].classList.remove("circle");
						App.globals.points[i+1].classList.toggle("circleIn");
						break;
					}
				}
			}
			else{
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block+((len-1)*width_IMG)+"px";
				App.globals.points[len-1].classList.remove("circleIn");
				App.globals.points[len-1].classList.toggle("circle");
				App.globals.points[0].classList.remove("circle");
				App.globals.points[0].classList.toggle("circleIn");
			}
		})
	}, 
	click_onPoints : function(){
		var len = App.globals.points.length;
		for(var i = 0; i<len;i++){
			App.globals.points[i].addEventListener("click", function(e){
				for(var j = 0; j<len; j++){
					if(e.target == App.globals.points[j]){
						for(var k = 0; k< len; k++){
							if(App.globals.points[k].classList.contains("circleIn")){
								App.globals.points[k].classList.remove("circleIn");
								App.globals.points[k].classList.toggle("circle");
								App.globals.points[j].classList.remove("circle");
								App.globals.points[j].classList.toggle("circleIn");

								var marginLeft_Block = parseFloat(window.getComputedStyle(App.globals.block_allPhotos).marginLeft);
								var width_IMG = parseFloat(window.getComputedStyle(App.globals.photos[0]).width);
								App.globals.block_allPhotos.style.marginLeft = marginLeft_Block+((k-j)*width_IMG)+"px";
								break;
							}
						}
					}
				}
			
			})
		}
	},
	ifinite_galery : function(){
		setInterval(function(){
			var marginLeft_Block = parseFloat(window.getComputedStyle(App.globals.block_allPhotos).marginLeft);
			var width_IMG = parseFloat(window.getComputedStyle(App.globals.photos[0]).width);
			var len = App.globals.photos.length;
			if(marginLeft_Block>(-1)*(len-1)*width_IMG+20){
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block-width_IMG+"px";
				for(var i = 0; i< len-1; i++){
					if(App.globals.points[i].classList.contains("circleIn")){
						console.log(App.globals.points[i])
						App.globals.points[i].classList.remove("circleIn");
						App.globals.points[i].classList.toggle("circle");
						App.globals.points[i+1].classList.remove("circle");
						App.globals.points[i+1].classList.toggle("circleIn");
						break;
					}
				}
			}
			else{
				App.globals.block_allPhotos.style.marginLeft = marginLeft_Block+((len-1)*width_IMG)+"px";
				App.globals.points[len-1].classList.remove("circleIn");
				App.globals.points[len-1].classList.toggle("circle");
				App.globals.points[0].classList.remove("circle");
				App.globals.points[0].classList.toggle("circleIn");
			}
		},2000)
	}
}
App.init();