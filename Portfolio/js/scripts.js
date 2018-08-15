// // Slide Show
// var indexNumber = 0;
// var src = ["images/Elias.jpg", "images/Xavier.jpg"];

// setInterval(function () {
// 	if(indexNumber < 1) {
// 		indexNumber +=1;
// 	} else {
// 		indexNumber = 0};
// 	$("img.slide-show-pic").attr("src", src[indexNumber]);
// }, 3000);

//Menu Button

/* Temporarily Found a Fix. Not Pretty But Works */
var num = 0;

$(".header-image").on("click", function(){
 	if (num === 0) {
 	$("nav").fadeIn(300);
 	$("main").css("margin-top", "130px");
 	num +=1;	 
	} else {
	num = 0;
	}
});

$(".header-image").on("click", function(){
	if (num === 0) {
	$("nav").fadeOut(300);
	$("main").css("margin-top", "0px");
	num = 0;	 
   } else {
	num = 1;
   }
   });

