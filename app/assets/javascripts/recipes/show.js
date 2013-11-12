var addToGraph = function(id, name, time, totalTime) {
	$("#graph-ingredient-names").append(name);
  $("#graph").append("<div id='graph-name" + id + "' class='graph-ingredient-name col-md-2'>" + name + "</div>");
	$("#graph").append("<div id='ingredient" + id + "' class='ingredient-slider col-md-10'></div>");


	$("#ingredient" + id).slider({
		value: time,
		max: totalTime + 1,
		min: -1,
		slide: function(	) {
			//adjusts the 
			$('[data-ingredientId="' + id + '"]').find('.ingredient-time').html($("#ingredient" + id).slider( "value"));
		}
	});
	$("#ingredient" + id).slider('disable');	
};

var makeRecipeEditable = function(event) {
	// this.recipeBeforeFor = 


	// $("#graph").children().slider('enable');

	$("#graph").find('.ingredient-slider').slider('enable');
	
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

var cancelSaveRecipe = function() {
	
	
	makeRecipeUneditable();
};


var addChangeListeners = function(id) {
	//if the time is changed, need to update the graph as well
	$('[data-ingredientId="' + id + '"]').find('.ingredient-time').blur(function(){
		var newValue = $('[data-ingredientId="' + id + '"]').find('.ingredient-time').html();
		$slider = $("#ingredient" + id).find('a');
		// $slider.css('left', newValue + '%');
		$slider.animate({
			left: newValue + '%'
		}, 250, function(){
			//animation complete callback
		});
	
	});
	
	$('[data-ingredientId="' + id + '"]').find('.ingredient-name').blur(function(){
		var newName = $('[data-ingredientId="' + id + '"]').find('.ingredient-name').html();
		// debugger
		$nameInGraph = $("#graph-name" + id).html(newName);
	
	});
};



var makeRecipeUneditable = function(event) {
	// $("#graph").children().slider('disable');
	$("#graph").find('.ingredient-slider').slider('disable');

	$('.ingredient-attr').attr("contentEditable", "false");
	$("#save-button").hide('fast');	
	$("#cancel-save-button").hide('fast');
	$("#edit-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");
}