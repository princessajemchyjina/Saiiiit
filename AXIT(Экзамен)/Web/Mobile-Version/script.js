var open_btn = document.querySelector(".mobile_menu")
var mobile_head = document.querySelector(".mobile_head")
var close_btn = document.querySelector(".imgClose")
var hgroup = document.querySelector("hgroup")
open_btn.addEventListener("click", function(){
	mobile_head.classList.remove("mobile_head")
	mobile_head.classList.toggle("mobile_head_view")
	hgroup.classList.remove("hgroup")
	hgroup.classList.toggle("hgroupNew")

})
close_btn.addEventListener("click", function(){
	mobile_head.classList.remove("mobile_head_view")
	mobile_head.classList.toggle("mobile_head")
	hgroup.classList.remove("hgroupNew")
	hgroup.classList.toggle("hgroup")
})
