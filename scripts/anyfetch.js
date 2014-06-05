// base64 encoding for the login
var login64 = btoa('test@anyfetch.com:password');

// Do an authentificated API call
var apiCall = function(endpoint, callback) {
	$.ajax({
			type: 'GET',
			dataType: 'json',
			url: 'https://api.anyfetch.com'+endpoint,
			headers: {
				'Authorization': 'Basic '+login64
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
	apiCall('/status', function(data, err) {
		if (err) {
			return err;
		}

		// Update API status on index.html
		$('#apiStatus').html(data.status);
	});

	// Get company infos
	apiCall('/company', function(data, err) {
		if (err) {
			return err;
		}

		$('#companyName').html(data.name);
	});
});