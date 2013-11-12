var loadRecipe = function(id, path, callback)
{
	$.ajax({
		url: "/recipes/" + id,
		type: 'GET',
		dataType: 'json',
		success: callback,
		
		error: function(resp){debugger}
	});
};