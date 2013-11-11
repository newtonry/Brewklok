(function(root){
	var BrewHandler = root.BrewHandler = ( root.BrewHandler || {});

	var BrewHandler = root.BrewHandler = function (recipe) {
		this.timer = new root.Timer;
		this.past = [];
		this.current = [];
		this.future = recipe.ingredients;
		
		//removes any previous intervals
		if (!(typeof currentInterval === 'undefined')) {
			clearInterval(currentInterval);
		}
	}
	
	BrewHandler.prototype.start = function(element) {	
		this.element = element;
		var that = this;	
		this.timer.startTime = new Date().getTime();
		
		$('.start-button').fadeOut('fast', function(){
			$('.pause-button').show();
		});
		
		
		
		//need to do this for ingredients that start at 0, should fix
		var toBeAddedIngredients = that.getTBAdd() || [];			
		var toBeRemovedIngredients = that.getTBRem() || [];
		
		that.process(toBeAddedIngredients, toBeRemovedIngredients);		
		
		
		//setting interval to a global variable to abuse scope if user leaves timer page then comes back, now I can kill the old timers
		currentInterval = setInterval(function() { 	
			that.timer.updateElement(element);//updates the timer, which is visually 'element'
						
			var toBeAddedIngredients = that.getTBAdd() || [];			
			var toBeRemovedIngredients = that.getTBRem() || [];
			
			that.process(toBeAddedIngredients, toBeRemovedIngredients);			
		}, 1000);
	
	};

	BrewHandler.prototype.pause = function() {
		clearInterval(currentInterval);
		this.timer.pause();
		
		$('.pause-button').fadeOut('fast', function(){
			$('.unpause-button').show();
		});
		
	};

	BrewHandler.prototype.unpause = function() {
		var that = this;
		this.timer.unpause();

		$('.unpause-button').fadeOut('fast', function(){
			$('.pause-button').show();
		});

		that.timer.updateElement(that.element);
		var toBeAddedIngredients = that.getTBAdd() || [];			
		var toBeRemovedIngredients = that.getTBRem() || [];
		
		that.process(toBeAddedIngredients, toBeRemovedIngredients);		

		currentInterval = setInterval(function() { 	
			that.timer.updateElement(that.element);//updates the timer, which is visually 'element'
						
			var toBeAddedIngredients = that.getTBAdd() || [];			
			var toBeRemovedIngredients = that.getTBRem() || [];
			
			that.process(toBeAddedIngredients, toBeRemovedIngredients);			
		}, 1000);
	};

	BrewHandler.prototype.getTBRem = function() {
		var toBeRemoved = [];
		var time = this.timer.timeDifference();
		
		for(var i = 0; i < this.current.length; i++) {
			if(Math.floor(time/1000) - this.current[i].time > 5){
				toBeRemoved.push(this.current[i]);
			}
		}
		return toBeRemoved;
	};
	
	//returns the ingredients that need to be put in at this exact time
	BrewHandler.prototype.getTBAdd = function() {
		var toBeAddedIngredients = [];
		var time = this.timer.timeDifference();
				
		for(var i = 0; i < this.future.length; i++) {
				if (this.future[i].time === Math.floor(time/1000)) { //going by seconds for now					
				toBeAddedIngredients.push(this.future[i]);
			}
		}	
		return toBeAddedIngredients;
	};

	BrewHandler.prototype.fillFuture = function() {
		var $el = $("#futureIngredients");
		
		this.future.forEach(function(ingred){
			// $el.append("<h5 id='ingredientId" + ingred.id + "'>" + ingred.name + "</h5>");
			$el.append(displayIngredient({ingredient: ingred}));
		});
	}
	
	BrewHandler.prototype.process = function(toBeAddedIngredients, toBeRemovedIngredients) {
		var that = this;
				
		//from current to past
		toBeRemovedIngredients.forEach(function(ingred) {

			//rearrangment of stack
			for(var i = 0; i < that.current.length; i++) {
				if (ingred.id === that.current[i].id) {
					that.current.splice(i, 1);					
					that.past.push(ingred);
					break;
				}
			}
			var $el = $("#ingredientId" + ingred.id).detach();
			$el.toggleClass('well');
			$("#pastIngredients").append($el);
		});


		//from future to current
		toBeAddedIngredients.forEach(function(ingred) {
			for(var i = 0; i < that.future.length; i++) {
				if (ingred.id === that.future[i].id) {
					that.future.splice(i, 1);
					that.current.push(ingred);			
							
					break;
				}
			}

			var $el = $("#ingredientId" + ingred.id).detach();
			$el.toggleClass('well');
			$("#currentIngredients").append($el);
		});		
	}
})(this);