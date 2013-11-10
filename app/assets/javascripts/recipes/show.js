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

var makeRecipeEditable = function(event) {

	$('.ingredient-attr').attr("contentEditable", "true");
	$("#edit-button").hide('fast');
	$("#save-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");

}

var saveRecipe = function(event) {
	
	//needs to browse over each ingredient and build it up
	//store each ingredient in an array
	
	// debugger
	var recipe = [];
	recipe['ingredients'] = [];
	var newIngredients =$("#ingredient-table-body").find(".ingredient-listing");
	
	for(var i=0; i < newIngredients.length; i++) {
		
		// console.log($(newIngredients[i]).attr('data-ingredientid'));

		// var newIngred = { "id" : $(newIngredients[i]).attr('data-ingredientid'),
		// 									"name" : $(newIngredients[i]).find('.ingredient-name').html(),
		// 									"time" : $(newIngredients[i]).find('.ingredient-time').html(),
		// 									"notes" : $(newIngredients[i]).find('.ingredient-notes').html()
		// 								};
	  var id = $(newIngredients[i]).attr('data-ingredientid');
		
		// debugger
		
		recipe['ingredients'][id] = [];
		recipe['ingredients'][id]['name'] = $(newIngredients[i]).find('.ingredient-name').html();
		recipe['ingredients'][id]['time'] = $(newIngredients[i]).find('.ingredient-time').html();
		recipe['ingredients'][id]['notes'] = $(newIngredients[i]).find('.ingredient-notes').html();
		
		
		// .push(newIngred);
	}	
	
	//make ajax call sending all ingredients
	$.ajax({
		// url: "/recipes/",
		data: recipe,
		type: "PATCH",
		dataType: 'json',
		success: function(resp) {
			
			
			
		},
		
		error: function(resp) {
			console.log(resp);
		}		
	});
	
	
	
	
	//highlight out button

	makeRecipeUneditable();
}

var makeRecipeUneditable = function(event) {
	$('.ingredient-attr').attr("contentEditable", "false");
	$("#save-button").hide('fast');	
	$("#edit-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");
}








