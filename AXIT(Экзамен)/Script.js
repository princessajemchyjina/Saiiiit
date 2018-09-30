var App = {
	globals : { 
		button_Tab_mas : document.querySelectorAll(".button_Tab"),
		content_mas : document.querySelectorAll(".content")
	},
	init : function(){
		var len = App.globals.button_Tab_mas.length;
		for(var i = 0; i<len; i++){
			App.globals.button_Tab_mas[i].addEventListener("click", function(e){
				App.click_on_tubsButton(e.currentTarget);
			})
		}
	},
	click_on_tubsButton : function(click_button){
		console.log(click_button)
		var len = App.globals.button_Tab_mas.length;
		for(var i = 0; i<len; i++){
			App.globals.content_mas[i].className = App.globals.content_mas[i].className.replace("content content_click", "content");
		};
		for(var i = 0; i<len; i++){
			App.globals.button_Tab_mas[i].className = App.globals.button_Tab_mas[i].className.replace("click_button", "")
		};
		for(var i = 0; i<len; i++){
			if(click_button == App.globals.button_Tab_mas[i]){
				App.globals.button_Tab_mas[i].classList.toggle("click_button");
				App.globals.content_mas[i].classList.toggle("content_click");
				break;
			}
		}
	}
}
App.init();