(function(root){
	var BrewHandler = root.BrewHandler = ( root.BrewHandler || {});

	var BrewHandler = root.BrewHandler = function (recipe) {
		this.timer = new root.Timer;
		this.past = [];
		this.current = [];
		this.future = recipe.ingredients;
		this.mode = 'demo';
		this.modeModifier = 1;
		//removes any previous intervals
		if (!(typeof currentInterval === 'undefined')) {
			clearInterval(currentInterval);
		}
	}

	BrewHandler.prototype.setMode = function(mode) {
		if (mode === 'demo') {
			this.mode = 'demo';
			this.modeModifier = 1;			
			$("#mode-dropdown").html('Demo Mode <span class="caret"></span>');
		} else if (mode === 'realtime') {
			this.mode = 'realtime';
			this.modeModifier = 60;
			$("#mode-dropdown").html('Brew Mode <span class="caret"></span>');
		}
	};
	
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
			var percentDone = (that.timer.timeDifference() / 1000 / recipe.totalTime * 100) / that.modeModifier;
			console.log(percentDone);
			$('.progress-bar').width(percentDone + '%');
			 
			var toBeAddedIngredients = that.getTBAdd() || [];			
			var toBeRemovedIngredients = that.getTBRem() || [];
			
			that.process(toBeAddedIngredients, toBeRemovedIngredients);			
		}, 500);
	
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
			var percentDone = (that.timer.timeDifference() / 1000 / recipe.totalTime * 100) / that.modeModifier;
			$('.progress-bar').width(percentDone + '%');
			
						
			var toBeAddedIngredients = that.getTBAdd() || [];			
			var toBeRemovedIngredients = that.getTBRem() || [];
			
			that.process(toBeAddedIngredients, toBeRemovedIngredients);			
		}, 500);
	};

	BrewHandler.prototype.getTBRem = function() {
		var toBeRemoved = [];
		var time = this.timer.timeDifference();
		
		for(var i = 0; i < this.current.length; i++) {
			if(Math.floor((time /1000) / this.modeModifier)  - this.current[i].time > (5 * this.modeModifier)){
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
				if (this.future[i].time === Math.floor((time/1000) / this.modeModifier)) { //going by seconds for now					
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
			
			//for show page table
			var $ingredientListing =$('[data-ingredientId="' + ingred.id + '"]');
			$ingredientListing.switchClass('current', 'past', 4000);
						
			//for jumbo under /run
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

			//for show page table
			var $ingredientListing =$('[data-ingredientId="' + ingred.id + '"]');
			$ingredientListing.switchClass('future', 'current', 2000);

			//for jumbo under /run
			var $el = $("#ingredientId" + ingred.id).detach();
			$el.toggleClass('well');
			$("#currentIngredients").append($el);
		});		
	}
})(this);