var addIngredientForm = function() {
	ingredientId +=1;
	// $('#recipe-form').append(ingredientFields({id : ingredientId}));
	
	$(ingredientFields({id : ingredientId})).insertBefore( "#submit_recipe" );
}