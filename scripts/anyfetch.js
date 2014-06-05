// base64 encoding for the login
var login64 = btoa('test@anyfetch.com:password');

// Do an authentificated API call
var apiCall = function(endpoint, callback) {
	$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'https://api.anyfetch.com' + endpoint,
			headers: {
				'Authorization': 'Basic ' + login64
			}
		})
		// All went well
	  .done(function(data) {
	    callback(data, null);
	  })
	  // An error occured
	  .fail(function(jqXHR, textStatus) {
	    console.log("An error occured: ", textStatus, jqXHR );
	    callback(null, textStatus);
	  });
}

$(function() {
	// Get API status
	apiCall('/batch?pages=/status&pages=/company&pages=/document_types&pages=/providers', function(data, err) {
		if (err) {
			return err;
		}

		// Update API status & Company name on index.html
		$('#apiStatus').html(data['/status'].status);
		$('#companyName').html(data['/company'].name);

		//Create the HTML code from the data
		var docTypesHtml = '';
		var provHtml = '';
		$.each( data['/document_types'], function(key, value) {
			docTypesHtml += '<li>'+value.name+'</li>'
		});
		$.each( data['/providers'], function(key, value) {
			provHtml += '<li>'+value.name+'</li>'
		});
		// Update documents types and providers list
		$('#docTypes').html(docTypesHtml);
		$('#provs').html(provHtml);
	});
});