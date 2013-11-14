var addToGraph = function(id, name, time, totalTime) {
	$("#graph-ingredient-names").append(name);
	var newRow = $("#graph").append("<div class='row'></div>").find('.row').last();
	
  newRow.append("<div id='graph-name" + id + "' class='graph-ingredient-name col-md-2'>" + name + "</div>");
	newRow.append("<div id='ingredient" + id + "' class='ingredient-slider col-md-10'></div>");

	$("#ingredient" + id).slider({
		value: time,
		max: totalTime + 1,
		min: -1,
		slide: function() {
			$('[data-ingredientId="' + id + '"]').find('.ingredient-time').html($("#ingredient" + id).slider( "value"));
			
			console.log("value: " + $("#ingredient" + id).slider( "value"));
			console.log("left: " + $("#ingredient" + id).find('a').css('left'));
			
		}
	});

	//this line readjusts the css-left to actually be at 0
	// $slider = $("#ingredient" + id).find('a').css('left', time + '%');
	
	$("#ingredient" + id).slider('disable');	
};

var addGrid = function(totalTime) {
	var newRow = $("#graph").append("<div class='row'></div>").find('.row').last();
  newRow.append("<div id='graph-grid-name' class='graph-ingredient-name col-md-2'>" + 'sadfasdf' + "</div>");
	newRow.append("<div id='graph-grid-slider' class='col-md-10'></div>");
	$("#graph-grid-slider").slider();
	$("#graph-grid-slider").slider('disable');

	for(var timeValue = 0; timeValue  <= totalTime -5; timeValue += 5) {
		$("#graph-grid-slider").append("<span style='position: absolute; left:" + timeValue / totalTime * 100 + "%;'>" + timeValue + "</span>");
		console.log('asfdaf');
		
	}

};

var addProgressBar = function() {
	$(".ingredient-slider").first().append("<span class='progress-bar'></span>");
	$(".progress-bar").height($("#graph").height() + 29); //the 30 is the two margins of 15px each
	// $(".progress-bar")
};

var makeRecipeEditable = function(event) {
	this.oldGraphValues = this.getCurrentGraphValues();
	this.oldIngredientTable = $("#ingredient-table").clone();

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
		url:  window.location.pathname,
		data: params,
		type: "PATCH",
		dataType: 'json',
		success: function(resp) {
			// console.log('saved');
			$('nav').prepend('<div id="alert-message" class="alert alert-success">Saved!</div>');
			$('#alert-message').fadeIn('fast').delay(1000).fadeOut('fast', function() {
			$('#alert-message').remove();
		});
		},
		
		error: function(resp) {
			console.log('There was an error in the save.');
		}		
	});
	
	makeRecipeUneditable();
}

var cancelSaveRecipe = function() {
	// $("#graph").b
	// debugger
	$("#ingredient-table").replaceWith(this.oldIngredientTable);
	
	revertSliderValues();
	
	makeRecipeUneditable();
};

var getCurrentGraphValues = function() {
	var currentValues = [];
	
	for(var i = 0; i < $(".ingredient-slider").length; i++) {
		var currentValue = $($(".ingredient-slider")[i]).slider("value");
		currentValues.push(currentValue);
	}
	return currentValues;
};

var revertSliderValues = function() {	
	for(var i = 0; i < $(".ingredient-slider").length; i++) {
		$($(".ingredient-slider")[i]).slider("value", this.oldGraphValues[i]);
	}
};



var addChangeListeners = function(id) {
	//if the time is changed, need to update the graph as well
	$('[data-ingredientId="' + id + '"]').find('.ingredient-time').blur(function(){
		var newValue = $('[data-ingredientId="' + id + '"]').find('.ingredient-time').html();

		// $slider = $("#ingredient" + id).find('a');
		// $slider.css('left', newValue/recipe.totalTime*100 + '%');

		$("#ingredient" + id).slider("value", newValue);

		// $slider.animate({
		// 	value: newValue //+ '%'
		// }, 250, function(){
		// 	//animation complete callback
		// });
	
	});
	
	$('[data-ingredientId="' + id + '"]').find('.ingredient-name').blur(function(){
		var newName = $('[data-ingredientId="' + id + '"]').find('.ingredient-name').html();
		// debugger
		$nameInGraph = $("#graph-name" + id).html(newName);
	
	});
};



var makeRecipeUneditable = function(event) {
	$("#graph").find('.ingredient-slider').slider('disable');

	$('.ingredient-attr').attr("contentEditable", "false");
	$("#save-button").hide('fast');	
	$("#cancel-save-button").hide('fast');
	$("#edit-button").show('fast');
	$("#ingredient-table").toggleClass("highlighted-table");
}

var startBrew = function() {
	var e = event.target;
	$(event.target).switchClass( "btn-success", "btn-info", 1000, function(){
		alert('swithcalss');
		// debugger
		$(e).click(function() { pauseBrew();});
		
	});
	
	bh.start('#clock');	
}
	

var bindBrewActionHandler = function($el) {
	var brewingState = undefined;
	
	var brewActionHandler = function () {
		if (brewingState === undefined) {
			brewingState = "unpaused";
			bh.start("#clock");
			$el.switchClass( "btn-success", "btn-info", 1000, function(){ 
				$el.html('Pause');
			});

		} else if (brewingState === "unpaused") {
			brewingState = "paused";
			bh.pause();
			$el.switchClass( "btn-info", "btn-success", 1000, function(){ 
				$el.html('Unpause');
			});
			
			
		} else {
			brewingState = "unpaused";
			bh.unpause();
			$el.switchClass( "btn-success", "btn-info", 1000, function(){ 
				$el.html('Pause');
			});
			
		}
	}
	
	$el.click(brewActionHandler);
};