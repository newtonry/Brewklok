var markCanvas = function(time, totalTime, name) {

	var c=document.getElementById("myCanvas");
	// debugger
	var ctx=c.getContext("2d");
	var xPos = 800 * (time/totalTime);

	ctx.beginPath();
	ctx.arc(xPos + 100 ,50,10,0,2*Math.PI);

	ctx.stroke();
};

var initializeCanvas = function() {
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	ctx.moveTo(0,50);
	ctx.lineTo(1200,50);
	ctx.stroke();
};

var addToGraph = function(id, name, time) {
  $("#sliders").append("<div id='ingredient" + id + "' class='ingredient-slider'></div>");
	$("#ingredient" + id).slider({
		value: time
	});
	
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
	var params = {recipe: {}};
	// recipe['ingredients'] = {
	// 	1: {name: "xdsaf"},
	// 	2: {name: "xdsaf"}
	// 	
	// 	
	// };
	
	var newIngredients =$("#ingredient-table-body").find(".ingredient-listing");
	
	for(var i=0; i < newIngredients.length; i++) {
		
		// console.log($(newIngredients[i]).attr('data-ingredientid'));

		// var newIngred = { "id" : $(newIngredients[i]).attr('data-ingredientid'),
		// 									"name" : $(newIngredients[i]).find('.ingredient-name').html(),
		// 									"time" : $(newIngredients[i]).find('.ingredient-time').html(),
		// 									"notes" : $(newIngredients[i]).find('.ingredient-notes').html()
		// 								};
	  var id = $(newIngredients[i]).attr('data-ingredientid');
		
	
		params['recipe'][id] = {
			// "id" : $(newIngredients[i]).attr('data-ingredientid'),
			"name" : $(newIngredients[i]).find('.ingredient-name').html(),
			"time" : $(newIngredients[i]).find('.ingredient-time').html(),
			"notes" : $(newIngredients[i]).find('.ingredient-notes').html()
		};

		
		// recipe['ingredients'][id] = [];
		// recipe['ingredients'][id]['name'] = $(newIngredients[i]).find('.ingredient-name').html();
		// recipe['ingredients'][id]['time'] = $(newIngredients[i]).find('.ingredient-time').html();
		// recipe['ingredients'][id]['notes'] = $(newIngredients[i]).find('.ingredient-notes').html();



		
		// .push(newIngred);
	}	

	//make ajax call sending all ingredients
	$.ajax({
		// url: "/recipes/",
		data: params,
		type: "PATCH",
		dataType: 'json',
		success: function(resp) {			
		},
		
		error: function(resp) {
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








