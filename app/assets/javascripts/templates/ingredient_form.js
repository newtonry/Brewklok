// <div class="form-group">	
// 	<label for="ingredient_name">Ingredient: </label>
// 	<input class="form-control" type="text" name="ingredients[1][name]" value="" id="ingredient_1_name">
// 
// <div class="form-group">
// 	<label for="ingredient_time">Time to add: </label>
// 	<input class="form-control" type="text" name="ingredients[1][time]" value="" id="ingredient_1_time">
// 
// <div class="form-group">
// 	<label for="ingredient_notes">Additional Note: </label>
// <textarea class="form-control" name="ingredients[1][notes]" value="" id="ingredient_1_notes"></textarea>

var ingredientFields = _.template('<div class="form-group"><label for="ingredient_name">Ingredient: </label><input class="form-control" type="text" name="ingredients[<%= id %>][name]" value="" id="ingredient_<%= id %>_name"><label for="ingredient_amount">Time: </label><input class="form-control" type="text" name="ingredients[<%= id %>][time]" value="" id="ingredient_<%= id %>_time"><label for="ingredient_amount">Amount: </label><input class="form-control" type="text" name="ingredients[<%= id %>][amount]" value="" id="ingredient_<%= id %>_amount"><div class="form-group"><label for="ingredient_notes">Additional Notes: </label><textarea class="form-control" name="ingredients[<%= id %>][notes]" value="" id="ingredient_<%= id %>_notes"></textarea></div></div>');