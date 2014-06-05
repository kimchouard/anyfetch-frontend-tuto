// Get the API status
var jqxhr = $.ajax({
		type: 'GET',
		dataType: 'json',
		url: 'https://api.anyfetch.com/status'
	})
	// All went well
  .done(function(data) {
    $('#apiStatus').html(data.status);
  })
  // An error occured
  .fail(function(jqXHR, textStatus) {
    console.log("An error occured: ", textStatus, jqXHR );
  });