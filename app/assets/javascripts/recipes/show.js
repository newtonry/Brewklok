var markCanvas = function(time, name) {
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var xPos = 800 * (time/60);

	ctx.beginPath();
	ctx.arc(xPos + 100 ,50,10,0,2*Math.PI);

	ctx.stroke();
};

var initializeCanvas = function() {
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.moveTo(0,50);
	ctx.lineTo(1000,50);
	ctx.stroke();
};

var editIngredient = function(event) {
	alert("make it content editable!")
	// alert($(event.target).data('ingredientid'));
	$("#ingredient" + $(event.target).data('ingredientid')).append(window.JST['edit_ingredient']());
};

// var editableRollover = function() {
// 	$('.ingredient-listing').find("td").on("dblclick", function(){
// 
// 		$(this).attr("contentEditable", "true");
// 		// debugger
// 	});
// };


var makeRecipeEditable = function(event) {
	// debugger
	// alert($(event.target).data('recipeid'));
	
	// $(document).find("td").attr("contentEditable", "true");
	// debugger

	$('.ingredient-attr').attr("contentEditable", "true");
	$("#edit-button").hide('fast');
	$("#save-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");

}

var saveRecipe = function(event) {

	// make ajax call here

	makeRecipeUneditable();
}

var makeRecipeUneditable = function(event) {
	$('.ingredient-attr').attr("contentEditable", "false");
	$("#save-button").hide('fast');	
	$("#edit-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");
}








