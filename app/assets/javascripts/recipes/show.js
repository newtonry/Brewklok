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
}

var editIngredient = function(event) {
	alert("make it content editable!")
	// alert($(event.target).data('ingredientid'));
	$("#ingredient" + $(event.target).data('ingredientid')).append(window.JST['edit_ingredient']());
}