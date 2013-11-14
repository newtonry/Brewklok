var addIngredientForm = function() {
	ingredientId +=1;	
	$(ingredientFields({id : ingredientId})).insertBefore( "#submit_recipe" );
}