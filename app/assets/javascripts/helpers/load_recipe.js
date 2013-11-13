var loadRecipe = function(id, path, callback)
{
	$.ajax({
		url: "/recipes/" + id + ".json",
		type: 'GET',
		dataType: 'json',
		success: callback,
		
		error: function(resp){debugger}
	});
};