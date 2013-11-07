(function(root){
	var BrewHandler = root.BrewHandler = ( root.BrewHandler || {});
	// debugger
	var BrewHandler = root.BrewHandler = function () {
		this.timer = new root.Timer;
	}
	
	BrewHandler.prototype.start = function(element, recipe) {	
		// this.timer.start(element);
		that = this;
		this.timer.startTime = new Date().getTime()
		
		//need to do this for ingredients that start at 0, should fix
		currentIngredients = that.checkIngredients(that.timer.timeDifference() , recipe.ingredients);
		that.process(currentIngredients);
		
		//the loop
		setInterval(function() { 
			that.timer.updateElement(element); 
		
			currentIngredients = that.checkIngredients(that.timer.timeDifference() , recipe.ingredients);
			that.process(currentIngredients);
		
		}, 1000);

	};
	
	BrewHandler.prototype.checkIngredients = function(time, ingredients) {
		currentIngredients = [];
				
		for(var i = 0; i < ingredients.length; i++) {
			// debugger
			if (ingredients[i].time === Math.floor(time/1000)) { //going by seconds for now
				currentIngredients.push(ingredients[i])
				// console.log(currentIngredients);
			}
		}
		return currentIngredients;
	};
	
	BrewHandler.prototype.process = function(ingredients) {
		for(var i = 0; i < ingredients.length; i++) {
			$("#instruction-list").append("<li>" + ingredients[i].name + "</li>");
		}
	}

	
})(this);