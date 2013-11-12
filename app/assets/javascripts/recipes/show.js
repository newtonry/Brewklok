var addToGraph = function(id, name, time, totalTime) {
  $("#graph").append("<div id='ingredient" + id + "' class='ingredient-slider'></div>");


	$("#ingredient" + id).slider({
		value: time,
		max: totalTime,
		min: 0,
		slide: function(	) {
			//adjusts the 
			$('[data-ingredientId="' + id + '"]').find('.ingredient-time').html($("#ingredient" + id).slider( "value"))
		}
	});
	$("#ingredient" + id).slider('disable');	
};

var makeRecipeEditable = function(event) {

	$("#graph").children().slider('enable');
	$('.ingredient-attr').attr("contentEditable", "true");
	$("#edit-button").hide('fast');
	$("#save-button").show('fast');
	$("#cancel-save-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");

}

var saveRecipe = function(event) {
	var params = {recipe: {}};
	
	var newIngredients =$("#ingredient-table-body").find(".ingredient-listing");
	
	for(var i=0; i < newIngredients.length; i++) {
	  var id = $(newIngredients[i]).attr('data-ingredientid');		
	
		params['recipe'][id] = {
			"name" : $(newIngredients[i]).find('.ingredient-name').html(),
			"time" : $(newIngredients[i]).find('.ingredient-time').html(),
			"notes" : $(newIngredients[i]).find('.ingredient-notes').html()
		};
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
	$("#graph").children().slider('disable');
	$('.ingredient-attr').attr("contentEditable", "false");
	$("#save-button").hide('fast');	
	$("#cancel-save-button").hide('fast');
	$("#edit-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");
}








