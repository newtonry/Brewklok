var loadRecipe = function(id, callback)
{
	$.ajax({
		url: "../" + id,
		type: 'GET',
		dataType: 'json',
		success: callback,
		
		error: function(resp){debugger}
		
		
	});
};